"use client";

import { useEffect, useRef } from "react";

interface BgVideoProps {
  poster: string;
  mp4: string;
  alt: string;
  videoId: string;
  /** Stagger initial fetches so 18 marquee clips don't hit the CDN at once. */
  deferMs?: number;
  /**
   * Attach src + start playing on mount instead of waiting for the
   * IntersectionObserver — for above-the-fold clips that must load first.
   */
  eager?: boolean;
  className?: string;
  /**
   * Fill the parent box edge-to-edge instead of forcing a 16/10 strip.
   * Use when the parent already has a definite size (e.g. the phone
   * mockup screen, which defines its own 9/19 aspect-ratio).
   */
  fill?: boolean;
}

/**
 * Lazy autoplaying background video.
 * - src attaches only when near the viewport (IntersectionObserver), so the
 *   card paints its first frame instead of rendering as a blank box.
 * - autoplays muted + inline + looped; no user controls.
 * - Pauses when scrolled away / tab hidden, so only visible clips stream.
 */
export default function BgVideo({
  poster,
  mp4,
  alt,
  videoId,
  deferMs = 0,
  eager = false,
  className,
  fill = false,
}: BgVideoProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const v = videoRef.current;
    if (!wrap || !v) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let delayTimer: ReturnType<typeof setTimeout> | undefined;
    let visible = eager;
    let loaded = false;

    const ensureSrc = () => {
      if (!loaded) {
        loaded = true;
        v.src = mp4;
      }
    };

    const tryPlay = () => {
      if (!visible || document.hidden) return;
      ensureSrc();
      v.play().catch(() => {});
    };

    // Eager clips start fetching/playing immediately — first thing on the page.
    if (eager) tryPlay();

    const io = new IntersectionObserver(
      (entries) => {
        visible = entries[0].isIntersecting;
        if (visible) {
          // Stagger first loads so the ribbons don't burst requests.
          delayTimer = setTimeout(tryPlay, deferMs + Math.floor(Math.random() * 200));
        } else {
          clearTimeout(delayTimer);
          v.pause();
        }
      },
      { rootMargin: "100px" }
    );
    io.observe(wrap);

    const onVis = () => {
      if (document.hidden) {
        v.pause();
      } else {
        tryPlay();
      }
    };
    document.addEventListener("visibilitychange", onVis);

    return () => {
      clearTimeout(delayTimer);
      v.pause();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [mp4, deferMs, eager]);

  return (
    <div ref={wrapRef} className="bgv-root" style={{ width: "100%", height: "100%", ...(fill ? {} : { aspectRatio: "16 / 10" }) }}>
      <video
        ref={videoRef}
        id={`${videoId}-video`}
        loop
        muted
        playsInline
        autoPlay
        preload="none"
        poster={poster || undefined}
        disablePictureInPicture
        data-wf-ignore="true"
        data-object-fit="cover"
        className={className}
        style={{ ...(poster ? { backgroundImage: `url("${poster}")` } : {}), width: "100%", height: "100%", objectFit: "cover" }}
      />
      <span className="sr-only" role="img" aria-label={alt} />
    </div>
  );
}
