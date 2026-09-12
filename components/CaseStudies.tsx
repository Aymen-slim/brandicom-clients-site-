"use client";

import Link from "next/link";

interface StudyCard {
  id: number;
  tag: string;
  title: string;
  description: string;
  image: string;
  href: string;
}

const CASE_STUDIES: StudyCard[] = [
  {
    id: 1,
    tag: "Beauty",
    title: "Radiance",
    description:
      "Helped a growing beauty brand increase engagement, strengthen its identity, and turn social media attention into sales.",
    image:
      "https://cdn.prod.website-files.com/69e08be4846b1167331e54f3/6a4b9eed7e7e01d646f95277_Frame%2020.avif",
    href: "#contact",
  },
  {
    id: 2,
    tag: "Fitness",
    title: "Radiance Active",
    description:
      "Built a content-driven growth strategy that boosted community engagement and attracted new fitness enthusiasts.",
    image:
      "https://cdn.prod.website-files.com/69e08be4846b1167331e54f3/6a4b9f018bc2500ccff95326_Frame%2021.avif",
    href: "#contact",
  },
  {
    id: 3,
    tag: "Hospitality",
    title: "BrewHouse",
    description:
      "Expanded local reach through targeted content and campaigns that increased awareness and customer visits.",
    image:
      "https://cdn.prod.website-files.com/69e08be4846b1167331e54f3/6a4b9f0c9160988294eb732d_Frame%2022.avif",
    href: "#contact",
  },
  {
    id: 4,
    tag: "E-Commerce",
    title: "The Challenge",
    description:
      "Elevated brand visibility with trend-focused content that increased engagement and drove more online purchases.",
    image:
      "https://cdn.prod.website-files.com/69e08be4846b1167331e54f3/6a4b9f790194d64a1754ae04_Frame%2020.avif",
    href: "#contact",
  },
  {
    id: 5,
    tag: "FinTech",
    title: "FinCore",
    description:
      "Implemented a performance-focused strategy that generated qualified leads and improved conversion rates.",
    image:
      "https://cdn.prod.website-files.com/69e08be4846b1167331e54f3/6a4b9f83f655217982be55b1_Frame%2021.avif",
    href: "#contact",
  },
  {
    id: 6,
    tag: "Tech",
    title: "NovaTech",
    description:
      "Combined organic content and paid media to increase product awareness, trial sign-ups, and user acquisition.",
    image:
      "https://cdn.prod.website-files.com/69e08be4846b1167331e54f3/6a4b9f8f7e4d158d7a496871_Frame%2022.avif",
    href: "#contact",
  },
];

export default function CaseStudies() {
  return (
    <section className="section_studies" id="work">
      <div className="container">
        <div className="studies_main-wrapper">
          <div className="studies_top-data-wrap">
            <div slide-up="" className="services_text-dot-wrap">
              <div className="services_dot-wrap"></div>
              <div className="text-size-regular">Case Studies</div>
            </div>
            <div className="studies_heading-wrap">
              <h2 slide-up="" className="style-h2">
                Growth you can actually measure
              </h2>
            </div>
            <div className="studies_text-wrap">
              <div slide-up="" className="text-medium">
                We focus on what matters — engagement, leads, and revenue.
              </div>
            </div>
          </div>

          <div className="studies_battom-wrap">
            <div className="studies_collection w-dyn-list">
              <div role="list" className="studies_collection-list w-dyn-items">
                {CASE_STUDIES.map((study) => (
                  <div key={study.id} slide-up="" role="listitem" className="studies_collection-item w-dyn-item">
                    <Link
                      aria-label={study.title}
                      href={study.href}
                      className="studies_collection-link w-inline-block"
                    >
                      <div className="studies_collection_wrap">
                        <div className="studies_collection-image-wrap">
                          <img
                            src={study.image}
                            loading="lazy"
                            alt={study.title}
                            className="studies_collection-image"
                          />
                        </div>
                        <div className="studies_collection-btm-wrap">
                          <div className="studies_btm-inner-wrap">
                            <div className="studies_collection-tag-wrap">
                              <div className="text-size-regular text-color-black text-weight-semibold">
                                {study.tag}
                              </div>
                            </div>
                            <div className="studies_btm-title-wrap">
                              <div className="text-size-medium text-weight-medium white">
                                {study.title}
                              </div>
                              <div className="case_studies_descripton">
                                {study.description}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
