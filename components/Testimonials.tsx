"use client";

import BgVideo from "./BgVideo";

interface Testimonial {
  author: string;
  role: string;
  quote: string;
  poster: string;
  mp4: string;
  webm: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    author: "Olivia Bennett",
    role: "Marketing Director",
    quote:
      "We went from inconsistent posting to a clear growth system. Our engagement tripled within weeks.",
    poster:
      "https://cdn.prod.website-files.com/69e08be4846b1167331e54ef%2F6a4e56d40ef2c7530f3a0c02_Fashion%20Forward%20Portrait%20Photo%20on%20Lummi_poster.0000000.jpg",
    mp4: "https://cdn.prod.website-files.com/69e08be4846b1167331e54ef%2F6a4e56d40ef2c7530f3a0c02_Fashion%20Forward%20Portrait%20Photo%20on%20Lummi_mp4.mp4",
    webm: "https://cdn.prod.website-files.com/69e08be4846b1167331e54ef%2F6a4e56d40ef2c7530f3a0c02_Fashion%20Forward%20Portrait%20Photo%20on%20Lummi_webm.webm",
  },
  {
    author: "Elena Rodriguez",
    role: "Marketing Director",
    quote:
      "Brandicom turned our scattered efforts into a consistent impact engine. Our audience grew by 200%.",
    poster:
      "https://cdn.prod.website-files.com/69e08be4846b1167331e54ef%2F6a4e56de2dc82c7574aaaaaf_Freckled%20Redhead%20Portrait%20Photo%20on%20Lummi_poster.0000000.jpg",
    mp4: "https://cdn.prod.website-files.com/69e08be4846b1167331e54ef%2F6a4e56de2dc82c7574aaaaaf_Freckled%20Redhead%20Portrait%20Photo%20on%20Lummi_mp4.mp4",
    webm: "https://cdn.prod.website-files.com/69e08be4846b1167331e54ef%2F6a4e56de2dc82c7574aaaaaf_Freckled%20Redhead%20Portrait%20Photo%20on%20Lummi_webm.webm",
  },
  {
    author: "Sarah Turner",
    role: "Marketing Director",
    quote:
      "We went from inconsistent posting to a clear growth system. Our engagement tripled within weeks.",
    poster:
      "https://cdn.prod.website-files.com/69e08be4846b1167331e54ef%2F6a4e56ea46bda34adb472226_Modern%20Minimalist%20Portrait%20Photo%20on%20Lummi_poster.0000000.jpg",
    mp4: "https://cdn.prod.website-files.com/69e08be4846b1167331e54ef%2F6a4e56ea46bda34adb472226_Modern%20Minimalist%20Portrait%20Photo%20on%20Lummi_mp4.mp4",
    webm: "https://cdn.prod.website-files.com/69e08be4846b1167331e54ef%2F6a4e56ea46bda34adb472226_Modern%20Minimalist%20Portrait%20Photo%20on%20Lummi_webm.webm",
  },
];

export default function Testimonials() {
  // Multiply for continuous marquee ribbon
  const marqueeItems = [
    ...TESTIMONIALS,
    ...TESTIMONIALS,
    ...TESTIMONIALS,
    ...TESTIMONIALS,
  ];

  return (
    <section
      id="testimonials"
      data-wf-component-id="615c5c3e-53aa-955b-2aba-a39a10aec6d9"
      data-wf-variant-state="base"
      className="section_testimonials"
    >
      <div className="container">
        <div className="testimonials_main-wrapper">
          <div className="testimonials_top-wrap">
            <div slide-up="" className="services_text-dot-wrap">
              <div className="services_dot-wrap"></div>
              <div className="text-size-regular">Testimonial</div>
            </div>
            <div className="testominals_title-wrap">
              <div className="testimonials_heading-wrap">
                <h2 slide-up="" className="style-h2">
                  What our clients say
                </h2>
              </div>
              <div className="testimonials_text-wrap">
                <div slide-up="" className="text-medium">
                  Don’t take our word for it — hear from the brands we’ve
                  successfully helped grow.
                </div>
              </div>
            </div>
          </div>

          <div slide-up="" className="testimonials_btm_card_box">
            <div className="testimonials_right-absloute-wrap"></div>
            <div className="testimonials_left-absloute-wrap"></div>

            <div
              className="testimonials_btm_card_wrap marquee-track-left"
              style={{ display: "flex" }}
            >
              {marqueeItems.map((item, idx) => (
                <div key={idx} className="testimonials_card-inner-wrap">
                  <div className="testimonials_btm-card">
                    <div className="testimonials_btm_in">
                      <div className="testimonials_card-top-wrap">
                        <div className="testimonials_icon-text-wrap">
                          <div className="testimonials_star-wrap">
                            <img
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/69e08be4846b1167331e54ef/6a477db650d93a822f9b0493_logoipsum-367%201.svg"
                              alt="logo"
                              className="testimonials_star-icon"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="testimonials_card-btm-wrap">
                        <div className="text-size-medium title">
                          {item.quote}
                        </div>
                        <div className="testimonials_title-wrap">
                          <div className="text-size-xmedium author">
                            {item.author}
                          </div>
                          <div className="text-small author-designetion">
                            {item.role}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      data-poster-url={item.poster}
                      data-autoplay="true"
                      data-loop="true"
                      data-wf-ignore="true"
                      className="testimonials_btm_bg w-background-video w-background-video-atom"
                    >
                      <BgVideo
                        poster={item.poster}
                        mp4={item.mp4}
                        alt={`${item.author} testimonial`}
                        videoId={`testimonial-${idx}`}
                        deferMs={(idx % 3) * 200}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
