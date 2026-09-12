"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
    const smallScreen = window.innerWidth < 768;
    const lightMode = reduceMotion || coarsePointer || smallScreen;
    document.documentElement.classList.toggle("js-anim", !reduceMotion);

    const lenis = new Lenis({
      duration: reduceMotion ? 0 : 0.9,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: !lightMode,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.2,
      infinite: false,
    });

    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.config({ ignoreMobileResize: true });
    lenis.on("scroll", ScrollTrigger.update);

    const tickerFn = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tickerFn);
    gsap.ticker.lagSmoothing(0);

    const mm = gsap.matchMedia();

    let refreshTimer: ReturnType<typeof setTimeout> | undefined;
    const refresh = () => {
      clearTimeout(refreshTimer);
      refreshTimer = setTimeout(() => ScrollTrigger.refresh(), 250);
    };
    window.addEventListener("load", refresh);
    if (document.fonts?.ready) {
      document.fonts.ready.then(() => ScrollTrigger.refresh()).catch(() => {});
    }
    // Extra refresh once images/fonts settle (fixes team timing).
    const lateRefresh = setTimeout(() => ScrollTrigger.refresh(), 1200);

    // Fail-open reveals: IntersectionObserver adds .is-in, CSS transitions.
    // Never leaves content at opacity 0 if a trigger misfires.
    const revealEls = Array.from(document.querySelectorAll("[slide-up]"));
    const revealIO =
      typeof IntersectionObserver !== "undefined"
        ? new IntersectionObserver(
            (entries) => {
              for (const entry of entries) {
                if (entry.isIntersecting) {
                  (entry.target as HTMLElement).classList.add("is-in");
                  revealIO.unobserve(entry.target);
                }
              }
            },
            { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
          )
        : null;
    revealEls.forEach((el, i) => {
      const html = el as HTMLElement;
      // Light stagger for siblings sharing a parent.
      const siblings = html.parentElement?.querySelectorAll("[slide-up]");
      if (siblings && siblings.length > 1) {
        const idx = Array.prototype.indexOf.call(siblings, html);
        if (idx > 0 && idx < 6) html.style.transitionDelay = `${Math.min(idx * 70, 350)}ms`;
      } else if (i < 4 && html.closest(".hero_top-wrap")) {
        html.style.transitionDelay = `${i * 60}ms`;
      }
      revealIO?.observe(html);
    });
    // Safety net: reveal everything still hidden after 3s (never stuck invisible).
    const safetyTimer = setTimeout(() => {
      document.querySelectorAll("[slide-up]:not(.is-in)").forEach((el) => {
        (el as HTMLElement).classList.add("is-in");
      });
      ScrollTrigger.refresh();
    }, 3000);

    // Pause offscreen CSS marquees so they cost zero frames when unseen.
    const marqueeIO =
      typeof IntersectionObserver !== "undefined"
        ? new IntersectionObserver(
            (entries) => {
              for (const entry of entries) {
                const t = entry.target as HTMLElement;
                t.style.animationPlayState = entry.isIntersecting ? "running" : "paused";
              }
            },
            { rootMargin: "100px" }
          )
        : null;
    document
      .querySelectorAll(
        ".marquee-track-left, .marquee-track-right, .hero-video-marquee-track"
      )
      .forEach((t) => marqueeIO?.observe(t as HTMLElement));

    if (!reduceMotion) {
      const counters = document.querySelectorAll(".counter");
      counters.forEach((counter) => {
        const el = counter as HTMLElement;
        const text = el.textContent?.trim() || "";
        const match = text.match(/^([0-9]*\.?[0-9]+)(.*)$/);
        if (!match) return;
        const endValue = parseFloat(match[1]) || 0;
        const suffix = match[2] || "";
        const decimals = match[1].includes(".")
          ? match[1].split(".")[1].length
          : 0;

        el.textContent = (0).toFixed(decimals) + suffix;
        const obj = { val: 0 };

        gsap.to(obj, {
          val: endValue,
          duration: 1.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 92%",
            once: true,
          },
          onUpdate() {
            el.textContent = obj.val.toFixed(decimals) + suffix;
          },
          onComplete() {
            el.textContent = endValue.toFixed(decimals) + suffix;
          },
        });
      });

      mm.add("(min-width: 992px)", () => {
        const section = document.querySelector(".section_team_height");
        const field = document.querySelector<HTMLElement>(".team_battom-wrap");
        const title = document.querySelector(".team_top-wrap");
        if (!section || !field) return;

        // Cards keep their scattered CSS positions inside the 2800px field.
        // A single transform-only tween pans the field up through the
        // clipped 100vh sticky window — no top/left layout thrash, and no
        // cards can end up off-viewport.
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.4,
            invalidateOnRefresh: true,
          },
        });

        tl.fromTo(
          field,
          { y: () => window.innerHeight },
          {
            y: () => -(field.offsetHeight - window.innerHeight),
            ease: "none",
          },
          0
        );

        if (title) {
          tl.to(title, { opacity: 0, duration: 0.15, ease: "none" }, 0);
        }

        return () => {
          tl.scrollTrigger?.kill();
          tl.kill();
          gsap.set([field, title].filter(Boolean) as HTMLElement[], {
            clearProps: "all",
          });
        };
      });

      // Parallax + magnetic (desktop w/ fine pointer only, throttled)
      mm.add("(min-width: 992px) and (pointer: fine)", () => {
        gsap.utils.toArray<HTMLElement>(".hero_main_circle_box, .brand_video_wrap").forEach((el) => {
          gsap.to(el, {
            yPercent: -6,
            ease: "none",
            scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
          });
        });

        gsap.utils.toArray<HTMLElement>(".studies_collection-image, .services_card-image").forEach((img) => {
          gsap.fromTo(
            img,
            { yPercent: -4 },
            {
              yPercent: 4,
              ease: "none",
              scrollTrigger: { trigger: img, start: "top bottom", end: "bottom top", scrub: true },
            }
          );
        });

        const cleanups: Array<() => void> = [];
        gsap.utils.toArray<HTMLElement>(".hero_primary-button, .hero_secondary-button, .pricing_card-button").forEach((btn) => {
          const xTo = gsap.quickTo(btn, "x", { duration: 0.3, ease: "power3.out" });
          const yTo = gsap.quickTo(btn, "y", { duration: 0.3, ease: "power3.out" });
          let queued = false;
          let last: MouseEvent | null = null;
          const flush = () => {
            queued = false;
            if (!last) return;
            const r = btn.getBoundingClientRect();
            xTo((last.clientX - (r.left + r.width / 2)) * 0.15);
            yTo((last.clientY - (r.top + r.height / 2)) * 0.22);
          };
          const move = (e: MouseEvent) => {
            last = e;
            if (!queued) {
              queued = true;
              requestAnimationFrame(flush);
            }
          };
          const leave = () => {
            last = null;
            xTo(0);
            yTo(0);
          };
          btn.addEventListener("mousemove", move);
          btn.addEventListener("mouseleave", leave);
          cleanups.push(() => {
            btn.removeEventListener("mousemove", move);
            btn.removeEventListener("mouseleave", leave);
          });
        });
        return () => cleanups.forEach((fn) => fn());
      });
    } else {
      // Reduced motion: show everything immediately.
      document.querySelectorAll("[slide-up]").forEach((el) => {
        (el as HTMLElement).classList.add("is-in");
      });
    }

    return () => {
      window.removeEventListener("load", refresh);
      clearTimeout(refreshTimer);
      clearTimeout(lateRefresh);
      clearTimeout(safetyTimer);
      revealIO?.disconnect();
      marqueeIO?.disconnect();
      document.documentElement.classList.remove("js-anim");
      mm.revert();
      gsap.ticker.remove(tickerFn);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return <>{children}</>;
}
