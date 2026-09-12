"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <>
      <section className="footer">
        <div className="container">
          <div className="footer_main-wrapper">
            <div className="footer_data-wrap">
              {/* Left Col */}
              <div slide-up="" className="footer_left-wrap">
                <div className="footer_card-inner-wrap">
                  <div className="footer_card-top-wrap">
                    <Link
                      href="/"
                      aria-current="page"
                      className="footer_brand w-inline-block w--current"
                    >
                      <div className="footer_barnd_wrapper">
                        <div className="footer_brand_image_wrap">
                          <img
                            loading="lazy"
                            src="/logo.png"
                            alt="Brandicom Logo"
                            className="footer_logo"
                          />
                        </div>
                        <div className="footer_barnd-text">Brandicom</div>
                      </div>
                    </Link>
                    <div className="footer_text-wrap">
                      <p className="text-small text-color-light-dark">
                        We combine content, management, and paid media to help
                        brands grow, engage, and convert — on the platforms that
                        matter most.
                      </p>
                    </div>
                  </div>

                  <div className="footer_social-wrap">
                    <div className="footer_social-text-wrap">
                      <div className="text-size-medium text-colr-black text-weight-medium">
                        Follow Us
                      </div>
                    </div>
                    <div className="footer_social-link-out-wrap">
                      <div className="footer_social-link-wrap">
                        <a
                          href="https://www.facebook.com/"
                          target="_blank"
                          rel="noreferrer"
                          className="footer_social-link w-inline-block"
                        >
                          <div className="social-link-icon-wrap">
                            <img
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/69e08be4846b1167331e54ef/6a27bd80cf011cee58f9e92e_Facebook%20Fill%20(1).svg"
                              alt="logo"
                              className="footer_social-link-icon one"
                            />
                            <img
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/69e08be4846b1167331e54ef/6a27a9f21763f40cc55764c6_Facebook%20Fill.svg"
                              alt="logo"
                              className="footer_social-link-icon two"
                            />
                          </div>
                          <div className="footer_social_link_text">Facebook</div>
                        </a>
                        <a
                          href="https://www.instagram.com/"
                          target="_blank"
                          rel="noreferrer"
                          className="footer_social-link w-inline-block"
                        >
                          <div className="social-link-icon-wrap">
                            <img
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/69e08be4846b1167331e54ef/6a27aae685f932c196fbc431_Instagram%20Fill.svg"
                              alt="logo"
                              className="footer_social-link-icon one"
                            />
                            <img
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/69e08be4846b1167331e54ef/6a27aae685f932c196fbc431_Instagram%20Fill.svg"
                              alt="logo"
                              className="footer_social-link-icon two"
                            />
                          </div>
                          <div className="footer_social_link_text">Instagram</div>
                        </a>
                      </div>
                      <div className="footer_social-link-wrap">
                        <a
                          href="https://www.tiktok.com/"
                          target="_blank"
                          rel="noreferrer"
                          className="footer_social-link w-inline-block"
                        >
                          <div className="social-link-icon-wrap">
                            <img
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/69e08be4846b1167331e54ef/6a27ab17fbb3ec670ff9f978_Tiktok%20Fill%20(1).svg"
                              alt="logo"
                              className="footer_social-link-icon one"
                            />
                            <img
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/69e08be4846b1167331e54ef/6a27ab18965aafb13611b198_Tiktok%20Fill.svg"
                              alt="logo"
                              className="footer_social-link-icon two"
                            />
                          </div>
                          <div className="footer_social_link_text">Tiktok</div>
                        </a>
                        <a
                          href="tel:+123456789"
                          className="footer_social-link w-inline-block"
                        >
                          <div className="social-link-icon-wrap">
                            <img
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/69e08be4846b1167331e54ef/6a27aaadfbb3ec670ff9c5bd_Whatsapp%20Fill.svg"
                              alt="logo"
                              className="footer_social-link-icon one"
                            />
                            <img
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/69e08be4846b1167331e54ef/6a27aac4ce9fc91515c63ef2_Whatsapp%20Fill%20(1).svg"
                              alt="logo"
                              className="footer_social-link-icon two"
                            />
                          </div>
                          <div className="footer_social_link_text">WhatsApp</div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Link Columns */}
              <div slide-up="" className="footer_right-wrap">
                <div className="footer_right-inner-wrap">
                  {/* Main Links */}
                  <div className="footer_link-main-wrap">
                    <div className="footer_link-inner-wrap">
                      <div className="footer_link-text-wrap">
                        <div className="text-size-medium">Main</div>
                      </div>
                      <div className="footer_text-link-wrap">
                        <Link
                          href="#top"
                          aria-current="page"
                          className="footer_text-link w--current"
                        >
                          Home
                        </Link>
                        <Link href="#services" className="footer_text-link">
                          Services
                        </Link>
                        <Link href="#work" className="footer_text-link">
                          Case Studies
                        </Link>
                        <Link href="#testimonials" className="footer_text-link">
                          Blog
                        </Link>
                        <Link href="#contact" className="footer_text-link">
                          Contact
                        </Link>
                      </div>
                    </div>
                    <div className="footer_link-inner-wrap">
                      <div className="footer_link-text-wrap">
                        <div className="text-size-medium">Explore</div>
                      </div>
                      <div className="footer_text-link-wrap">
                        <Link href="#pricing" className="footer_text-link">
                          Pricing
                        </Link>
                        <Link href="#faq" className="footer_text-link">
                          FAQ
                        </Link>
                        <Link href="#partners" className="footer_text-link">
                          Partners
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Other Page */}
                  <div className="footer_link-main-wrap">
                    <div className="footer_link-inner-wrap">
                      <div className="footer_link-text-wrap">
                        <div className="text-size-medium">Contact</div>
                      </div>
                      <div className="footer_text-link-wrap">
                        <Link href="#contact" className="footer_text-link">
                          Book a Call
                        </Link>
                        <Link href="#pricing" className="footer_text-link">
                          Pricing
                        </Link>
                        <Link href="#faq" className="footer_text-link">
                          FAQ
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Get in touch */}
                  <div className="footer_link-main-wrap">
                    <div className="footer_link-inner-wrap">
                      <div className="footer_link-text-wrap">
                        <div className="text-size-medium">Get in touch</div>
                      </div>
                      <div className="footer_text-link-wrap">
                        <a
                          href="mailto:contact@brandicom.com"
                          className="footer_icon-text-wrap w-inline-block"
                        >
                          <div className="footer_icon-wrap">
                            <img
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/69e08be4846b1167331e54ef/69ec94d3f083a386698cb3b7_mail-01.png"
                              alt="logo"
                              className="footer_social-icon"
                            />
                          </div>
                          <div className="text-small text-color-dark">
                            contact@brandicom.com
                          </div>
                        </a>
                        <a
                          href="tel:+123456789"
                          className="footer_icon-text-wrap w-inline-block"
                        >
                          <div className="footer_icon-wrap">
                            <img
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/69e08be4846b1167331e54ef/69ec958a1e688536d9b03a04_Frame%20(12).png"
                              alt="logo"
                              className="footer_social-icon"
                            />
                          </div>
                          <div className="text-small text-color-dark">
                            +123 456 789
                          </div>
                        </a>
                        <a
                          href="https://maps.google.com"
                          target="_blank"
                          rel="noreferrer"
                          className="footer_icon-text-wrap w-inline-block"
                        >
                          <div className="footer_icon-wrap">
                            <img
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/69e08be4846b1167331e54ef/69ec9572385aec7d8aebe729_Frame%20(24).png"
                              alt="logo"
                              className="footer_social-icon"
                            />
                          </div>
                          <div className="text-small text-color-dark">
                            Michigan, US
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
