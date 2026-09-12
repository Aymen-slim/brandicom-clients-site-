"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import BgVideo from "./BgVideo";

interface VideoItem {
  id: string;
  poster: string;
  mp4: string;
  alt: string;
}

// 4 local Instagram reels served from /public/reels.
// Duplicated once at render time (4 + 4 = 8) for a seamless -50% marquee loop.
const HERO_VIDEOS: VideoItem[] = [
  {
    id: "reel-1",
    poster: "",
    mp4: "/reels/reel-1.mp4",
    alt: "Coffee shop reel",
  },
  {
    id: "reel-2",
    poster: "",
    mp4: "/reels/reel-2.mp4",
    alt: "Restaurant mood reel",
  },
  {
    id: "reel-3",
    poster: "",
    mp4: "/reels/reel-3.mp4",
    alt: "Italian restaurant new decor reel",
  },
  {
    id: "reel-4",
    poster: "",
    mp4: "/reels/reel-4.mp4",
    alt: "La Cucina by Dali Iftar reel",
  },
];

const PHONE_VIDEO: VideoItem = {
  id: "reel-phone",
  poster: "",
  mp4: "/reels/reel-1.mp4",
  alt: "Coffee shop reel",
};

/**
 * Repeat the available videos until the track holds at least `minTotal`
 * cards. The -50% marquee loop needs two identical halves, so the result
 * is always a whole even number of rounds over the source list.
 */
function repeatForLoop<T>(items: T[], minTotal: number): T[] {
  if (items.length === 0) return items;
  let rounds = Math.max(2, Math.ceil(minTotal / items.length));
  if (rounds % 2 !== 0) rounds += 1;
  return Array.from({ length: rounds }, () => items).flat();
}

function MarqueeCard({ item, index }: { item: VideoItem; index: number }) {
  const videoId = `hero-marquee-${index}`;
  return (
    <div
      data-poster-url={item.poster}
      data-video-urls={item.mp4}
      data-autoplay="true"
      data-loop="true"
      data-wf-ignore="true"
      className="home_image w-background-video w-background-video-atom"
    >
      <BgVideo
        poster={item.poster}
        mp4={item.mp4}
        alt={item.alt}
        videoId={videoId}
        deferMs={(index % 4) * 300}
        eager={index < 6}
      />
    </div>
  );
}

export default function Hero() {
  // 4 reels repeated to 12 cards (3 rounds -> bumped to 4 for even halves)
  // so the ribbon stays full on any screen width.
  const loopVideos = repeatForLoop(HERO_VIDEOS, 12);
  const [liked, setLiked] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  // Freeze the ribbon animation (and its videos via BgVideo's own IO)
  // whenever the hero is offscreen — keeps scrolling smooth elsewhere.
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        el.style.animationPlayState = entry.isIntersecting ? "" : "paused";
      },
      { rootMargin: "80px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="section-hero" id="top">
      <img src="/hero-glow.svg" alt="" className="shape" aria-hidden="true" />
      <div className="container">
        <div className="hero_main-wraaper">
          <div className="hero_top-wrap">
            <div slide-up="" className="hero_text-dot-wrap">
              <div className="hero_dot-wrap"></div>
              <div className="text-size-regular">Trusted by global brands</div>
            </div>

            <div slide-up="" className="hero_heading-wrap">
              <h1 className="style-h1">
                Build, Grow, and Scale
                <br />
                Your Brand on Social Media
              </h1>
            </div>

            <div slide-up="" className="hero_text-wrap">
              <div className="text-medium">
                We combine content, management, and paid media to help brands
                grow, engage, and convert — on the platforms that matter most.
              </div>
            </div>

            <div slide-up="" className="hero_button-wrap">
              <Link
                href="#work"
                className="hero_secondary-button w-inline-block"
              >
                <div className="primary-btn-text-wrap">
                  <div className="text-size-small secondary-btn-text">
                    See Projects
                  </div>
                </div>
                <div className="primary-btn-bg"></div>
              </Link>

              <Link
                href="#services"
                className="hero_primary-button w-inline-block"
              >
                <div className="primary-btn-text-wrap">
                  <div className="text-size-small text-color-white primary-btn-text">
                    Explore Services
                  </div>
                </div>
                <div className="primary-btn-bg"></div>
              </Link>
            </div>
          </div>

          <div className="hero_main_circle_box">
            <div className="banner-marque">
              <div ref={trackRef} className="home_image_box hero-video-marquee-track">
                {loopVideos.map((vid, idx) => (
                  <MarqueeCard
                    key={`${vid.id}-${idx}`}
                    item={vid}
                    index={idx}
                  />
                ))}
              </div>
            </div>

            <div className="banner-mobile">
              <div className="banner-mobile-in">
                <div
                  data-poster-url={PHONE_VIDEO.poster}
                  data-video-urls={PHONE_VIDEO.mp4}
                  data-autoplay="true"
                  data-loop="true"
                  data-wf-ignore="true"
                  className="banner-background-video w-background-video w-background-video-atom"
                >
                  <BgVideo
                    poster={PHONE_VIDEO.poster}
                    mp4={PHONE_VIDEO.mp4}
                    alt={PHONE_VIDEO.alt}
                    videoId="hero-phone"
                    fill
                    eager
                  />
                  {/* Instagram-style overlay: action rail + view count */}
                  <div className="phone-ig-rail" aria-hidden="false">
                    <button
                      type="button"
                      className={`phone-ig-btn${liked ? " liked" : ""}`}
                      aria-pressed={liked}
                      aria-label={liked ? "Unlike this reel" : "Like this reel"}
                      onClick={() => setLiked((v) => !v)}
                    >
                      <svg viewBox="0 0 24 24" fill={liked ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                      </svg>
                      <span>12.4K</span>
                    </button>
                    <div className="phone-ig-btn" role="img" aria-label="328 comments">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                      </svg>
                      <span>328</span>
                    </div>
                    <div className="phone-ig-btn" role="img" aria-label="Share this reel">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="m22 2-7 20-4-9-9-4Z" />
                        <path d="M22 2 11 13" />
                      </svg>
                      <span>Share</span>
                    </div>
                  </div>
                  <div className="phone-ig-views" role="img" aria-label="48.2K views">
                    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <polygon points="6 3 20 12 6 21 6 3" />
                    </svg>
                    <span>48.2K</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
