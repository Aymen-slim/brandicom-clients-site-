"use client";

const PARTNER_LOGOS = [
  {
    src: "https://cdn.prod.website-files.com/69e08be4846b1167331e54ef/69e9d52501661d99d839003b_Frame%20(10).avif",
    alt: "Volvo logo",
  },
  {
    src: "https://cdn.prod.website-files.com/69e08be4846b1167331e54ef/69f074f794314c47954d3c85_Frame%20(28).avif",
    alt: "WarpSpeed logo",
  },
  {
    src: "https://cdn.prod.website-files.com/69e08be4846b1167331e54ef/69f07dfe85aac54bdbe7ac8d_Frame%20(29).avif",
    alt: "Sonorous logo",
  },
  {
    src: "https://cdn.prod.website-files.com/69e08be4846b1167331e54ef/69f07e03a6383c7fdb81f8b6_Frame%20(30).avif",
    alt: "Spinrilla logo",
  },
  {
    src: "https://cdn.prod.website-files.com/69e08be4846b1167331e54ef/69f07e30698d5ecbe734a996_Frame%20(31).avif",
    alt: "Frequency logo",
  },
  {
    src: "https://cdn.prod.website-files.com/69e08be4846b1167331e54ef/69f07e3485aac54bdbe7b53c_Frame%20(32).avif",
    alt: "Foresight logo",
  },
  {
    src: "https://cdn.prod.website-files.com/69e08be4846b1167331e54ef/69f07e5f25020b373905d67e_Frame%20(33).avif",
    alt: "Target partner logo",
  },
];

export default function LogoPartners() {
  return (
    <section slide-up="" className="section_logo" id="partners">
      <div className="container">
        <div className="logo_main-wrapper">
          <div className="logo-title-wrap">
            <div className="text-medium">Growth Partners</div>
          </div>
          <div className="logo_inner_box" style={{ overflow: "hidden" }}>
            <div className="logo_inner-wrap marquee-track-left">
              {[0, 1].map((half) => (
                <div key={half} className="logo_images-wrap" aria-hidden={half === 1}>
                  {PARTNER_LOGOS.map((logo, idx) => (
                    <div key={idx} className="logo-image-wrap">
                      <img
                        src={logo.src}
                        loading="lazy"
                        alt={logo.alt}
                        className="logo_image"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
