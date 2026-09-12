"use client";

import { useEffect, useRef, useState } from "react";

export default function ScrollChrome() {
  const [showTop, setShowTop] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);
  const showTopRef = useRef(false);

  useEffect(() => {
    let raf = 0;
    let queued = false;
    const update = () => {
      queued = false;
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      const y = el.scrollTop || document.body.scrollTop || 0;
      const p = max > 0 ? Math.min(1, Math.max(0, y / max)) : 0;
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${p})`;
      }
      document.querySelector(".navbar")?.classList.toggle("is-scrolled", y > 24);
      const show = y > 700;
      if (show !== showTopRef.current) {
        showTopRef.current = show;
        setShowTop(show);
      }
    };
    const onScroll = () => {
      if (!queued) {
        queued = true;
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <div ref={progressRef} className="brandicom-progress" aria-hidden="true" />
      <button
        type="button"
        aria-label="Back to top"
        className={`brandicom-top${showTop ? " show" : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        tabIndex={showTop ? 0 : -1}
      >
        ↑
      </button>
    </>
  );
}
