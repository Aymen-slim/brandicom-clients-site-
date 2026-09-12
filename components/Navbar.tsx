"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on Escape / route-hash change / resize to desktop.
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth > 991) setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [mobileMenuOpen]);

  return (
    <div className="hero_navbar-wrap">
      <div className="max-with-medium">
        <div className="w-layout-blockcontainer container w-container">
          <div role="banner" className="navbar w-nav">
            <div className="navbar_container w-container">
              <div className="nav_main-wrapper">
                {/* Brand Logo */}
                <Link
                  href="/"
                  aria-label="Brandicom home"
                  aria-current="page"
                  className="nav_brand w-nav-brand w--current"
                >
                  <div className="nav_barnd_wrapper">
                    <div className="nav_brand_image_wrap">
                      <img
                        loading="lazy"
                        src="/brandicom-mark.png"
                        alt="Brandicom Logo"
                        className="nav_logo"
                        width={42}
                        height={42}
                      />
                    </div>
                  </div>
                </Link>

                {/* Desktop / Mobile Navigation */}
                <nav
                  role="navigation"
                  aria-label="Primary"
                  className={`nav-manue w-nav-menu ${mobileMenuOpen ? "w--nav-menu-open" : ""}`}
                >
                  <div className="nav-manue-in">
                    <Link
                      href="#services"
                      className="nav_link w-inline-block"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <div className="nav_text">Services</div>
                    </Link>
                    <Link
                      href="#work"
                      className="nav_link w-inline-block"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <div className="nav_text">Case Studies</div>
                    </Link>
                    <Link
                      href="#testimonials"
                      className="nav_link w-inline-block"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <div className="nav_text">Blog</div>
                    </Link>
                  </div>
                </nav>

                {/* CTA Button */}
                <div className="nav_button_wrap">
                  <Link
                    href="#contact"
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

                {/* Mobile Menu Button */}
                <button
                  type="button"
                  aria-label="Toggle navigation menu"
                  aria-expanded={mobileMenuOpen}
                  className={`nav_menu-button w-nav-button ${mobileMenuOpen ? "w--open" : ""}`}
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  style={{ background: "transparent", border: "none", cursor: "pointer" }}
                >
                  <div className="w-icon-nav-menu"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
