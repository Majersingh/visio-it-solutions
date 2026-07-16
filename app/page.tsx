import { SiteNav } from "./components/site-nav";
import { Hero } from "./components/hero";
import { TrustStrip } from "./components/trust-strip";
import { ServicesSection } from "./components/services-section";
import { SoftwareSolutionsSection } from "./components/software-solutions-section";
import { CapabilitiesSection } from "./components/capabilities-section";
import { OperationsSection } from "./components/operations-section";
import { FaqSection } from "./components/faq-section";
import { CtaSection } from "./components/cta-section";
import { SiteFooter } from "./components/site-footer";
import { WhatsAppFab } from "./components/whatsapp-fab";
import { site, services, faqs, softwareSolutions } from "@/lib/site";

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
    streetAddress: "A/102 Dove Deck - NRS Projects, Opp. Pioneer Medical College, Near American School of Baroda, Ajwa Rd",
    addressLocality: "Vadodara",
    addressRegion: "Gujarat",
    postalCode: "390019",
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

const softwareSolutionsJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Software Solutions by Visio IT Solutions",
  itemListElement: softwareSolutions.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: s.name,
    url: `${site.url}/software-solutions/${s.slug}`,
    description: s.summary,
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSolutionsJsonLd) }}
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
        <SoftwareSolutionsSection />
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
