"use client";

import { useEffect, useRef, useState } from "react";

interface LazyVideoProps {
  poster: string;
  mp4: string;
  alt: string;
  className?: string;
  showControls?: boolean;
  videoId: string;
}

/** Only loads + plays when near the viewport. Pauses when scrolled away. */
export default function LazyVideo({ poster, mp4, alt, className, showControls, videoId }: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [userPaused, setUserPaused] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    const wrap = wrapRef.current;
    if (!v || !wrap) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          if (!loaded) setLoaded(true);
          if (!userPaused) {
            const p = v.play();
            if (p && typeof p.catch === "function") {
              p.then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
            }
          }
        } else {
          v.pause();
          setIsPlaying(false);
        }
      },
      { rootMargin: "200px" }
    );
    io.observe(wrap);

    const onVis = () => {
      if (document.hidden) {
        v.pause();
        setIsPlaying(false);
      } else if (!userPaused) {
        v.play().then(() => setIsPlaying(true)).catch(() => {});
      }
    };
    document.addEventListener("visibilitychange", onVis);
    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [loaded, userPaused]);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      setUserPaused(false);
      v.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    } else {
      v.pause();
      setUserPaused(true);
      setIsPlaying(false);
    }
  };

  return (
    <div ref={wrapRef} style={{ width: "100%", height: "100%" }}>
      <video
        ref={videoRef}
        id={`${videoId}-video`}
        loop
        muted
        playsInline
        preload="none"
        poster={poster}
        disablePictureInPicture
        data-wf-ignore="true"
        data-object-fit="cover"
        className={className}
        style={{ backgroundImage: `url("${poster}")`, width: "100%", height: "100%" }}
      >
        {loaded && <source src={mp4} data-wf-ignore="true" type="video/mp4" />}
      </video>
      <span className="sr-only" role="img" aria-label={alt} />
      {showControls && (
        <div aria-live="polite">
          <button
            type="button"
            data-w-bg-video-control="true"
            aria-controls={`${videoId}-video`}
            aria-label={isPlaying ? `Pause ${alt}` : `Play ${alt}`}
            onClick={togglePlay}
            className="w-backgroundvideo-backgroundvideoplaypausebutton play-button w-background-video--control"
          >
            <span className="play-state" hidden={!isPlaying}>
              <img
                src="https://cdn.prod.website-files.com/69e08be4846b1167331e54ef/6a477db9ad96a07a9006332c_pause.svg"
                loading="lazy"
                alt="Pause video"
              />
            </span>
            <span hidden={isPlaying}>
              <img
                loading="lazy"
                alt="Play video"
                src="https://cdn.prod.website-files.com/69e08be4846b1167331e54ef/6a477dc226af1a24064923da_Intersect.svg"
              />
            </span>
          </button>
        </div>
      )}
    </div>
  );
}
