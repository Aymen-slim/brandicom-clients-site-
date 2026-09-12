"use client";

import Link from "next/link";

export default function Pricing() {
  return (
    <section className="section_pricing" id="pricing">
      <div className="container">
        <div className="pricing_main-wrapper">
          <div className="pricing_top-data-wrap">
            <div slide-up="" className="services_text-dot-wrap">
              <div className="services_dot-wrap"></div>
              <div className="text-size-regular">Pricing</div>
            </div>
            <div className="pricing_heading-wrap">
              <h2 slide-up="" className="style-h2">
                Simple pricing. Scalable growth.
              </h2>
            </div>
            <div className="pricing_text-wrap">
              <div slide-up="" className="text-medium">
                Choose a plan that fits your stage — and scale as you grow.
              </div>
            </div>
          </div>

          <div className="pricingt_battom-wrap">
            {/* 1. Starter Card */}
            <div slide-up="" className="pricing_card">
              <div className="pricing_card-top-wrap">
                <div className="pricing_flex-wrap">
                  <div className="text-size-xmedium pricing-two-title">
                    Starter
                  </div>
                  <div className="pricing_card-text-icon-wrap">
                    <div className="pricing_card-icon-wrap">
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/69e08be4846b1167331e54ef/69eb1eb7b56e8d4a25d08a8f_star.png"
                        alt=""
                        className="pricing_icon"
                      />
                    </div>
                    <div className="text-size-regular">Basic</div>
                  </div>
                </div>
                <div className="text-size-small pricing_text">
                  Small businesses beginning to build their social media presence
                </div>
              </div>

              <div className="amount-wrapper">
                <div className="pricing_card-btm-text-wrap">
                  <div className="pricing_card-btm-text">
                    <strong>$500 </strong>
                    <span className="pricing_text-span">
                      <strong>/month</strong>
                    </span>
                  </div>
                </div>
              </div>

              <div className="pricing_card-title-wrap">
                <div className="text-medium text-weight-medium text-color-black">
                  Features included:
                </div>
                <div className="pricing_card-btm-wrap">
                  <div className="pricing_card-flex-wrap">
                    <div className="pricing_card-btm-icon-wrap">
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/69e08be4846b1167331e54ef/6a4722b28b96bf5ba8d5434d_checkmark-badge-01.svg"
                        alt="Checkmark"
                        className="pricing_card-btm-icon"
                      />
                    </div>
                    <div className="text-size-small pricing_text">
                      Social brand audit
                    </div>
                  </div>
                  <div className="pricing_card-flex-wrap">
                    <div className="pricing_card-btm-icon-wrap">
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/69e08be4846b1167331e54ef/6a4722b28b96bf5ba8d5434d_checkmark-badge-01.svg"
                        alt="Checkmark"
                        className="pricing_card-btm-icon"
                      />
                    </div>
                    <div className="text-size-small pricing_text">
                      3–4 posts per week
                    </div>
                  </div>
                  <div className="pricing_card-flex-wrap">
                    <div className="pricing_card-btm-icon-wrap">
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/69e08be4846b1167331e54ef/6a4722b28b96bf5ba8d5434d_checkmark-badge-01.svg"
                        alt="Checkmark"
                        className="pricing_card-btm-icon"
                      />
                    </div>
                    <div className="text-size-small pricing_text">
                      Basic content strategy
                    </div>
                  </div>
                  <div className="pricing_card-flex-wrap">
                    <div className="pricing_card-btm-icon-wrap">
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/69e08be4846b1167331e54ef/6a4722b28b96bf5ba8d5434d_checkmark-badge-01.svg"
                        alt="Checkmark"
                        className="pricing_card-btm-icon"
                      />
                    </div>
                    <div className="text-size-small pricing_text">
                      Platform management (1–2 platforms)
                    </div>
                  </div>
                  <div className="pricing_card-flex-wrap">
                    <div className="pricing_card-btm-icon-wrap">
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/69e08be4846b1167331e54ef/6a4722927c60f63d2d41705f_checkmark-badge-01.png"
                        alt="Checkmark"
                        className="pricing_card-btm-icon"
                      />
                    </div>
                    <div className="text-size-small pricing_text">
                      Email Support
                    </div>
                  </div>
                </div>
              </div>

              <div className="pricing_card-button-wrap">
                <div className="pricing_card_box">
                  <Link
                    href="#contact"
                    className="pricing_card-button w-inline-block"
                  >
                    <div>Start Now</div>
                  </Link>
                </div>
              </div>
            </div>

            {/* 2. Premium / Featured Dark Card */}
            <div slide-up="" className="pricing_right-wrap">
              <div className="pricing_right-card-top-wrap">
                <div className="pricing_right-card-flex-wrap">
                  <div className="text-size-xmedium text-color-white pricing-two-title">
                    Growth
                  </div>
                  <div className="pricing_right-card-text-icon-wrap">
                    <div className="pricing_right-card-icon-wrap">
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/69e08be4846b1167331e54ef/69eb3a7919a1f4a3c974b63b_Frame%20(11).png"
                        alt=""
                        className="pricing_right-icon"
                      />
                    </div>
                    <div className="text-size-regular">Best</div>
                  </div>
                </div>
                <div className="text-size-small pricing-two-text">
                  Growing brands looking to increase engagement, leads, and
                  conversions.
                </div>
              </div>

              <div className="amount-wrapper">
                <div className="pricing_card-btm-text-wrap">
                  <div className="pricing_right-card-btm-text">
                    $999/<span className="pricing_text-span right">month</span>
                  </div>
                </div>
              </div>

              <div className="pricing_right-card-title-wrap">
                <div className="text-medium text-weight-medium text-color-white">
                  Features included:
                </div>
                <div className="pricing_card-btm-wrap">
                  {[
                    "Everything in Starter",
                    "5 Posts Per Week",
                    "Multi-Platform Management",
                    "Advanced Content Strategy",
                    "Community Management",
                    "Paid Ads Management",
                    "Growth Optimization",
                  ].map((feat, idx) => (
                    <div
                      key={idx}
                      className="pricing_right-card-flex-inner-wrap"
                    >
                      <div className="pricing_right-card-btm-icon-wrap">
                        <img
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/69e08be4846b1167331e54ef/6a4726eab47ca390357eae50_elements.svg"
                          alt="Arrow"
                          className="pricing_right-card-btm-icon"
                        />
                      </div>
                      <div className="text-size-small text-color-white">
                        {feat}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pricing_right-card-button-wrap">
                <div className="pricing_card_box">
                  <Link
                    href="#contact"
                    className="pricing_card-button w-variant-6cbbbae5-1190-aa88-bada-8cf198d4a490 w-inline-block"
                  >
                    <div>Start Now</div>
                  </Link>
                </div>
              </div>
            </div>

            {/* 3. Scale Card */}
            <div slide-up="" className="pricing_card">
              <div className="pricing_card-top-wrap">
                <div className="pricing_flex-wrap">
                  <div className="text-size-xmedium pricing-two-title">
                    Scale
                  </div>
                  <div className="pricing_card-text-icon-wrap">
                    <div className="pricing_card-icon-wrap">
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/69e08be4846b1167331e54ef/69eb1eb7b56e8d4a25d08a8f_star.png"
                        alt=""
                        className="pricing_icon"
                      />
                    </div>
                    <div className="text-size-regular">Pro</div>
                  </div>
                </div>
                <div className="text-size-small pricing_text">
                  Established brands ready to scale aggressively.
                </div>
              </div>

              <div className="amount-wrapper">
                <div className="pricing_card-btm-text-wrap">
                  <div className="pricing_card-btm-text">
                    $1,500 <span className="pricing_text-span">/month</span>
                  </div>
                </div>
              </div>

              <div className="pricing_card-title-wrap">
                <div className="text-medium text-weight-medium text-color-black">
                  Features included:
                </div>
                <div className="pricing_card-btm-wrap">
                  {[
                    "Everything in Growth",
                    "Daily Content Management",
                    "Full Paid Media Strategy",
                    "Conversion Funnel Optimization",
                    "Custom Growth Roadmap",
                  ].map((feat, idx) => (
                    <div key={idx} className="pricing_card-flex-wrap">
                      <div className="pricing_card-btm-icon-wrap">
                        <img
                          loading="lazy"
                          src={
                            idx === 4
                              ? "https://cdn.prod.website-files.com/69e08be4846b1167331e54ef/6a4722927c60f63d2d41705f_checkmark-badge-01.png"
                              : "https://cdn.prod.website-files.com/69e08be4846b1167331e54ef/6a4722b28b96bf5ba8d5434d_checkmark-badge-01.svg"
                          }
                          alt="Checkmark"
                          className="pricing_card-btm-icon"
                        />
                      </div>
                      <div className="text-size-small pricing_text">{feat}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pricing_card-button-wrap">
                <div className="pricing_card_box">
                  <Link
                    href="#contact"
                    className="pricing_card-button w-inline-block"
                  >
                    <div>Start Now</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
