"use client";

import Link from "next/link";
import BgVideo from "./BgVideo";

interface BrandVideo {
  poster: string;
  mp4: string;
  webm: string;
}

const BRAND_VIDEOS: BrandVideo[] = [
  {
    poster: "https://cdn.prod.website-files.com/69e08be4846b1167331e54ef%2F6a4e55f0d1e799f86e17aba7_Portrait%20Against%20Orange%20Background%20Photo%20on%20Lummi_poster.0000000.jpg",
    mp4: "https://cdn.prod.website-files.com/69e08be4846b1167331e54ef%2F6a4e55f0d1e799f86e17aba7_Portrait%20Against%20Orange%20Background%20Photo%20on%20Lummi_mp4.mp4",
    webm: "https://cdn.prod.website-files.com/69e08be4846b1167331e54ef%2F6a4e55f0d1e799f86e17aba7_Portrait%20Against%20Orange%20Background%20Photo%20on%20Lummi_webm.webm",
  },
  {
    poster: "https://cdn.prod.website-files.com/69e08be4846b1167331e54ef%2F6a4e570760be3ad74bcfb8c2_Radiant%20Portrait%20Photo%20on%20Lummi_poster.0000000.jpg",
    mp4: "https://cdn.prod.website-files.com/69e08be4846b1167331e54ef%2F6a4e570760be3ad74bcfb8c2_Radiant%20Portrait%20Photo%20on%20Lummi_mp4.mp4",
    webm: "https://cdn.prod.website-files.com/69e08be4846b1167331e54ef%2F6a4e570760be3ad74bcfb8c2_Radiant%20Portrait%20Photo%20on%20Lummi_webm.webm",
  },
  {
    poster: "https://cdn.prod.website-files.com/69e08be4846b1167331e54ef%2F6a4e580b5762c60f2bdeecdd_Redhead%20in%20Orange%20Profile%20Photo%20on%20Lummi_poster.0000000.jpg",
    mp4: "https://cdn.prod.website-files.com/69e08be4846b1167331e54ef%2F6a4e580b5762c60f2bdeecdd_Redhead%20in%20Orange%20Profile%20Photo%20on%20Lummi_mp4.mp4",
    webm: "https://cdn.prod.website-files.com/69e08be4846b1167331e54ef%2F6a4e580b5762c60f2bdeecdd_Redhead%20in%20Orange%20Profile%20Photo%20on%20Lummi_webm.webm",
  },
  {
    poster: "https://cdn.prod.website-files.com/69e08be4846b1167331e54ef%2F6a4e55d0076726c5a0d9e222_Blonde%20Woman%20with%20Flower%20Photo%20on%20Lummi_poster.0000000.jpg",
    mp4: "https://cdn.prod.website-files.com/69e08be4846b1167331e54ef%2F6a4e55d0076726c5a0d9e222_Blonde%20Woman%20with%20Flower%20Photo%20on%20Lummi_mp4.mp4",
    webm: "https://cdn.prod.website-files.com/69e08be4846b1167331e54ef%2F6a4e55d0076726c5a0d9e222_Blonde%20Woman%20with%20Flower%20Photo%20on%20Lummi_webm.webm",
  },
  {
    poster: "https://cdn.prod.website-files.com/69e08be4846b1167331e54ef%2F6a4e584ab743fd78d1d564e6_Smiling%20Woman%20Outdoors%20Photo%20on%20Lummi_poster.0000000.jpg",
    mp4: "https://cdn.prod.website-files.com/69e08be4846b1167331e54ef%2F6a4e584ab743fd78d1d564e6_Smiling%20Woman%20Outdoors%20Photo%20on%20Lummi_mp4.mp4",
    webm: "https://cdn.prod.website-files.com/69e08be4846b1167331e54ef%2F6a4e584ab743fd78d1d564e6_Smiling%20Woman%20Outdoors%20Photo%20on%20Lummi_webm.webm",
  },
  {
    poster: "https://cdn.prod.website-files.com/69e08be4846b1167331e54ef%2F6a478c012ccb9c99384933e6_Vibrant%20Portrait%20Close-Up%20Photo%20on%20Lummi_poster.0000000.jpg",
    mp4: "https://cdn.prod.website-files.com/69e08be4846b1167331e54ef%2F6a478c012ccb9c99384933e6_Vibrant%20Portrait%20Close-Up%20Photo%20on%20Lummi_mp4.mp4",
    webm: "https://cdn.prod.website-files.com/69e08be4846b1167331e54ef%2F6a478c012ccb9c99384933e6_Vibrant%20Portrait%20Close-Up%20Photo%20on%20Lummi_webm.webm",
  },
  {
    poster: "https://cdn.prod.website-files.com/69e08be4846b1167331e54ef%2F6a4e560eba5d44a03df86a2c_Stylish%20Woman%20Portrait%20Photo%20on%20Lummi_poster.0000000.jpg",
    mp4: "https://cdn.prod.website-files.com/69e08be4846b1167331e54ef%2F6a4e560eba5d44a03df86a2c_Stylish%20Woman%20Portrait%20Photo%20on%20Lummi_mp4.mp4",
    webm: "https://cdn.prod.website-files.com/69e08be4846b1167331e54ef%2F6a4e560eba5d44a03df86a2c_Stylish%20Woman%20Portrait%20Photo%20on%20Lummi_webm.webm",
  },
  {
    poster: "https://cdn.prod.website-files.com/69e08be4846b1167331e54ef%2F69ec7a86b9414a5a93a60c93_Modern%20Fashion%20Portrait%20Photo%20on%20Lummi%20%283%29_poster.0000000.jpg",
    mp4: "https://cdn.prod.website-files.com/69e08be4846b1167331e54ef%2F69ec7a86b9414a5a93a60c93_Modern%20Fashion%20Portrait%20Photo%20on%20Lummi%20%283%29_mp4.mp4",
    webm: "https://cdn.prod.website-files.com/69e08be4846b1167331e54ef%2F69ec7a86b9414a5a93a60c93_Modern%20Fashion%20Portrait%20Photo%20on%20Lummi%20%283%29_webm.webm",
  },
];

export default function BrandCTA() {

  return (
    <section
      id="contact"
      data-wf-component-id="f2a13fa5-6f9f-3f98-3b1c-12209db3d4fc"
      data-wf-variant-state="base"
      className="section_brand"
    >
      <div className="container">
        <div className="brand_main-wrapper">
          <div className="brand_top-wrap">
            <div slide-up="" className="brand_text-dot-wrap">
              <div className="brand_dot-wrap"></div>
              <div className="text-size-regular">Get Started</div>
            </div>
            <div className="brand_title-wrap">
              <div className="brand_heading-wrap">
                <h2 slide-up="" className="style-h2 text-colo-white">
                  Ready to grow your brand?
                </h2>
              </div>
              <div className="brand_text-wrap">
                <div slide-up="" className="text-medium text-color-white">
                  Let’s turn your social media into a powerful growth engine.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div slide-up="" className="barnd_battom-wrap">
        {/* Top Curve */}
        <div className="curve_svg w-embed">
          <svg
            version="1.1"
            viewBox="0 0 804 50.167"
            enableBackground="new 0 0 804 50.167"
            xmlSpace="preserve"
            style={{ width: "100%", height: "auto", display: "block" }}
          >
            <path
              fill="#0066FF"
              d="M804,0v16.671c0,0-204.974,33.496-401.995,33.496C204.974,50.167,0,16.671,0,16.671V0H804z"
            ></path>
          </svg>
        </div>

        {/* Video Ribbon */}
        <div className="brand_video_wrap" style={{ overflow: "hidden" }}>
          <div className="brand_video_wrap_box marquee-track-left">
            {[0, 1].map((half) => (
              <div key={half} className="brand_btm-video-wrap" aria-hidden={half === 1}>
                {BRAND_VIDEOS.map((vid, idx) => (
                <div
                  key={idx}
                  data-poster-url={vid.poster}
                  data-autoplay="true"
                  data-loop="true"
                  data-wf-ignore="true"
                  className="brand_btm-bg-video w-background-video w-background-video-atom"
                >
                  <BgVideo
                    poster={vid.poster}
                    mp4={vid.mp4}
                    alt="Brand video"
                    videoId={`brand-${half}-${idx}`}
                    deferMs={idx * 150}
                  />
                </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Curve */}
        <div className="curve_svg two w-embed">
          <svg
            version="1.1"
            viewBox="0 0 804 50.167"
            enableBackground="new 0 0 804 50.167"
            xmlSpace="preserve"
            style={{ width: "100%", height: "auto", display: "block" }}
          >
            <path
              fill="#0066FF"
              d="M804,0v16.671c0,0-204.974,33.496-401.995,33.496C204.974,50.167,0,16.671,0,16.671V0H804z"
            ></path>
          </svg>
        </div>
      </div>

      {/* Button */}
      <div slide-up="" className="brand_button-wrap">
        <Link
          href="mailto:contact@brandicom.com"
          className="hero_secondary-button w-variant-5d42a8e4-7468-2db5-2e7a-c9038385df4e w-inline-block"
        >
          <div className="primary-btn-text-wrap">
            <div className="text-size-small secondary-btn-text">
              Book a Call
            </div>
          </div>
          <div className="primary-btn-bg w-variant-5d42a8e4-7468-2db5-2e7a-c9038385df4e"></div>
        </Link>
      </div>
    </section>
  );
}
