"use client";

import { useState } from "react";

interface ServiceItem {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  includes: string[];
}

const SERVICES: ServiceItem[] = [
  {
    id: 1,
    title: "Content Creation",
    subtitle: "Create scroll-stopping content that builds attention and trust.",
    image: "https://cdn.prod.website-files.com/69e08be4846b1167331e54ef/69eb0aad7186ea48ab16148d_87444908a14a70e84ab98f7a40511b81b25c456d.avif",
    includes: ["Ideation", "Video Assets", "Filming", "Graphics"],
  },
  {
    id: 2,
    title: "Social Media Management",
    subtitle: "Consistent posting, engagement, and growth — without the stress.",
    image: "https://cdn.prod.website-files.com/69e08be4846b1167331e54ef/69eb0e5e0ed517017b3d079c_42482dbfea02f1d5b1afc0a9f9891aadf7f43134.avif",
    includes: ["Content Calendar", "Community Management", "Monthly Reporting", "Profile Optimization"],
  },
  {
    id: 3,
    title: "Paid Media (Ads)",
    subtitle: "Turn views into revenue with high-performing ad campaigns.",
    image: "https://cdn.prod.website-files.com/69e08be4846b1167331e54ef/69eb0e619b0f1c1a977136d6_cd26f0fc41aae31d92670d2c561dd4ae63623a8b.avif",
    includes: ["Ad Creatives", "Audience Targeting", "A/B Testing", "ROAS Optimization"],
  },
];

export default function Services() {
  const [activeOverlay, setActiveOverlay] = useState<number | null>(null);

  const toggleCard = (id: number) => {
    setActiveOverlay(activeOverlay === id ? null : id);
  };

  return (
    <section
      id="services"
      data-wf--sectio-services--variant="base"
      data-wf-component-id="9f0f65b4-d016-282b-a8eb-fe8300c8d9c6"
      data-wf-variant-state="base"
      className="section_services"
    >
      <div className="container">
        <div className="services_main-wrapper">
          <div className="services_top-wrap">
            <div slide-up="" className="services_text-dot-wrap">
              <div className="services_dot-wrap"></div>
              <div className="text-size-regular">Services</div>
            </div>
            <div className="services_title-wrap">
              <div slide-up="" className="services_heading-wrap">
                <h2 className="style-h2">
                  Everything you need to grow <br />{" "}
                  on social — done for you
                </h2>
              </div>
              <div slide-up="" className="services_text-wrap">
                <div className="text-medium">
                  We handle the strategy, execution, and optimization — so you
                  can focus on your business.
                </div>
              </div>
            </div>
          </div>

          <div className="services_battom-wrap">
            {SERVICES.map((s) => {
              const isOpen = activeOverlay === s.id;
              return (
                <div
                  key={s.id}
                  slide-up=""
                  role="button"
                  tabIndex={0}
                  aria-expanded={isOpen}
                  aria-label={s.title}
                  className={`services_card${isOpen ? " is-open" : ""}`}
                  style={{ position: "relative", cursor: "pointer" }}
                  onClick={() => toggleCard(s.id)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      toggleCard(s.id);
                    }
                    if (e.key === "Escape") setActiveOverlay(null);
                  }}
                >
                  <div className="services_card-inner-wrap">
                    <div className="services_card-image-wrap">
                      <img
                        loading="lazy"
                        src={s.image}
                        alt={s.title}
                        className="services_card-image"
                      />
                    </div>
                  </div>

                  <div className="services_card-title-wrap">
                    <div className="text-size-xmedium services_card_title">
                      {s.title}
                    </div>
                    <div className="text-size-small services_card_text">
                      {s.subtitle}
                    </div>
                  </div>

                  <div className="services_card-arrow-wrap">
                    <img
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/69e08be4846b1167331e54ef/69eb0cc4ff88be5245ae6dbb_arrow-up-02.png"
                      alt=""
                      className="services_card-arrow-image"
                    />
                  </div>

                  {/* Hover & Click Overlay */}
                  <div className="services_card_overlay">
                    <div className="services_card_overlay_top">
                      <div className="text-size-xmedium">{s.title}</div>
                      <div className="services_card_description">
                        {s.subtitle}
                      </div>
                    </div>
                    <div className="services_card_list_box two">
                      <div className="services_card_description two">
                        Includes:
                      </div>
                      <ul role="list" className="services_card_list">
                        {s.includes.map((inc, i) => (
                          <li key={i} className="services_card_list_ite">
                            {inc}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="services_card_arrow_two">
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/69e08be4846b1167331e54ef/6a03f179d542caea00e2a92a_multiplication-sign.svg"
                        alt="Close overlay"
                        className="services_card-arrow-image-copy"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
