import Hero from "@/components/Hero";
import LogoPartners from "@/components/LogoPartners";
import Services from "@/components/Services";
import CaseStudies from "@/components/CaseStudies";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import BrandCTA from "@/components/BrandCTA";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="page-wrapper">
      <main id="main-content" className="main-wrapper">
        <Hero />
        <LogoPartners />
        <Services />
        <CaseStudies />
        <Pricing />
        <Testimonials />
        <FAQ />
        <BrandCTA />
      </main>
      <Footer />
    </div>
  );
}
