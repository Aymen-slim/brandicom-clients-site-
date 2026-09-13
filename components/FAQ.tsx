"use client";

import { useState } from "react";
import Link from "next/link";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    id: 1,
    question: "How long before I see results?",
    answer: "Most clients see noticeable growth within the first 30–60 days.",
  },
  {
    id: 2,
    question: "Do you work with all industries?",
    answer: "Yes — we adapt strategies based on your niche and audience.",
  },
  {
    id: 3,
    question: "Do I need a big budget?",
    answer: "No — we scale based on your budget and goals.",
  },
  {
    id: 4,
    question: "What platforms do you manage?",
    answer: "Instagram, Facebook, TikTok, and more.",
  },
  {
    id: 5,
    question: "Can I cancel anytime?",
    answer: "Yes — flexible plans with no long-term lock-in.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section_faq" id="faq">
      <div className="container">
        <div className="faq_main-wrapper">
          {/* Header */}
          <div className="faq_top-wrap">
            <div className="faq_title-wrap">
              <div slide-up="" className="services_text-dot-wrap">
                <div className="services_dot-wrap"></div>
                <div className="text-size-regular">FAQ</div>
              </div>
              <div className="faq_heading-wrap">
                <h2 slide-up="" className="style-h2">
                  Frequently Asked Questions
                </h2>
              </div>
              <div className="faq_text-wrap">
                <div slide-up="" className="text-medium">
                  Everything you need to know about Brandicom
                </div>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="faq_battom-wrap">
            <div className="faq_btm-inner-wrap">
              {/* Left Contact Card */}
              <div slide-up="" className="faq_card">
                <div className="faq_card-image-wrap">
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/69e08be4846b1167331e54ef/69ec69bcceb5d4aa93094508_73e95e56ca1fd378acf4c8705431f2b19e3219f5.avif"
                    alt="Speech bubble icon"
                    className="faq_card-image"
                  />
                </div>
                <div className="faq_card-title-wrap">
                  <div className="text-size-medium text-weight-medium">
                    Have questions?
                  </div>
                  <p className="text-size-small text-color-dark-gray">
                    Tell us about your goals. We’ll help you find the right plan
                    for your brand.
                  </p>
                  <div className="faq_button-wrap">
                    <Link
                      href="#contact"
                      className="pricing_card-button w-variant-690902c6-958f-bb26-82fa-dced697a6015 w-inline-block"
                    >
                      <div>Contact Us</div>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right Accordion */}
              <div className="faq_right-wrap">
                {FAQS.map((item, idx) => {
                  const isOpen = openIndex === idx;
                  return (
                    <div key={item.id} slide-up="" className={`faq_out-wrap${isOpen ? " is-open" : ""}`}>
                      <h3 className="faq_question-heading">
                        <button type="button" id={`faq-question-${item.id}`} className="faq_queston-wrap" aria-expanded={isOpen} aria-controls={`faq-answer-${item.id}`} onClick={() => toggleItem(idx)}>
                          <span className="text-size-medium text-colr-black text-weight-medium">{item.question}</span>
                          <span className="faq_queston-icon-wrap" aria-hidden="true">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                              <path d="M5 12h14" />
                              {!isOpen && <path d="M12 5v14" />}
                            </svg>
                          </span>
                        </button>
                      </h3>
                      <div id={`faq-answer-${item.id}`} role="region" aria-labelledby={`faq-question-${item.id}`} className="faq_answer-wrap" hidden={!isOpen}>
                        <p className="text-small faq-ans">{item.answer}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
