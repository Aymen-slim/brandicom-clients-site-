"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  // Close mobile menu on Escape / route-hash change / resize to desktop.
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    const onResize = () => {
      if (window.innerWidth > 991) setMobileMenuOpen(false);
    };
    const onHashChange = () => setMobileMenuOpen(false);
    const onPointerDown = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setMobileMenuOpen(false);
    };
    const onFocusIn = (event: FocusEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    window.addEventListener("hashchange", onHashChange);
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("focusin", onFocusIn);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("hashchange", onHashChange);
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("focusin", onFocusIn);
    };
  }, [mobileMenuOpen]);

  return (
    <div ref={headerRef} className="hero_navbar-wrap">
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
                        loading="eager"
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
                  id="primary-navigation"
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
                      <div className="nav_text">Testimonials</div>
                    </Link>
                  </div>
                </nav>

                {/* CTA Button */}
                <div className="nav_button_wrap">
                  <Link
                    href="#contact"
                    className="hero_secondary-button w-variant-5d42a8e4-7468-2db5-2e7a-c9038385df4e w-inline-block"
                    onClick={() => setMobileMenuOpen(false)}
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
                  ref={menuButtonRef}
                  type="button"
                  aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                  aria-expanded={mobileMenuOpen}
                  aria-controls="primary-navigation"
                  className={`nav_menu-button w-nav-button ${mobileMenuOpen ? "w--open" : ""}`}
                  onClick={() => setMobileMenuOpen((open) => !open)}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                    <path d={mobileMenuOpen ? "M6 6l12 12M6 18L18 6" : "M4 6h16M4 12h16M4 18h16"} />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
