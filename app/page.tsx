import { SiteNav } from "./components/site-nav";
import { Hero } from "./components/hero";
import { TrustStrip } from "./components/trust-strip";
import { ServicesSection } from "./components/services-section";
import { CapabilitiesSection } from "./components/capabilities-section";
import { OperationsSection } from "./components/operations-section";
import { FaqSection } from "./components/faq-section";
import { CtaSection } from "./components/cta-section";
import { SiteFooter } from "./components/site-footer";
import { WhatsAppFab } from "./components/whatsapp-fab";
import { site, services, faqs } from "@/lib/site";

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  description: site.description,
  email: site.email,
  telephone: site.phone,
  logo: `${site.url}/favicon.ico`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Delhi",
    addressCountry: "IN",
  },
  sameAs: [] as string[],
  areaServed: "Worldwide",
  makesOffer: services.map((s) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: s.label,
      description: s.tagline,
    },
  })),
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <SiteNav />
      <main id="main" className="relative">
        <Hero />
        <TrustStrip />
        <ServicesSection />
        <CapabilitiesSection />
        <OperationsSection />
        <FaqSection />
        <CtaSection />
      </main>
      <SiteFooter />
      <WhatsAppFab />
    </>
  );
}
