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
                    Most clients see noticeable growth within the first 30–60
                    days.
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
                    <div
                      key={item.id}
                      slide-up=""
                      className="faq_out-wrap"
                      style={{ cursor: "pointer" }}
                      onClick={() => toggleItem(idx)}
                    >
                      <div className="faq_queston-wrap">
                        <div className="text-size-medium text-colr-black text-weight-medium">
                          {item.question}
                        </div>
                        <div className="faq_queston-icon-wrap">
                          <img
                            loading="lazy"
                            src="https://cdn.prod.website-files.com/69e08be4846b1167331e54ef/69ec6da54fc4a9f13bc3d35b_arrow-up-02%20(1).png"
                            alt="Toggle"
                            className="faq_queston-arrow-icon"
                            style={{
                              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                              transition: "transform 0.3s ease",
                            }}
                          />
                          <img
                            loading="lazy"
                            src="https://cdn.prod.website-files.com/69e08be4846b1167331e54ef/69ec6e9b8159275d0e093170_multiplication-sign.png"
                            alt=""
                            className="faq_queston-icon"
                            style={{
                              transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                              transition: "transform 0.3s ease",
                            }}
                          />
                        </div>
                      </div>

                      <div
                        className="faq_answer-wrap"
                        style={{
                          maxHeight: isOpen ? "300px" : "0px",
                          opacity: isOpen ? 1 : 0,
                          overflow: "hidden",
                          transition:
                            "max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease",
                        }}
                      >
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
