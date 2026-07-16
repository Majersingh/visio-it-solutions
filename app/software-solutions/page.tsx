import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { PageShell, PageHeader } from "../components/page-shell";
import { Reveal, Stagger, StaggerItem } from "../components/reveal";
import { solutionIconMap } from "../components/solution-icons";
import { softwareSolutions, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Software Solutions — School ERP, HRMS, Ecommerce & Custom Software",
  description:
    "Beyond IT support, Visio IT builds software: school management systems, ERP, visitor management, HRMS & payroll, custom software, ecommerce, and workflow automation.",
  keywords: [
    "software solutions",
    "school management system",
    "ERP software",
    "visitor management system",
    "HRMS software",
    "custom software development",
    "ecommerce development",
    "workflow automation",
    "Visio IT Solutions",
  ],
  alternates: { canonical: "/software-solutions" },
  openGraph: {
    type: "website",
    url: `${site.url}/software-solutions`,
    title: "Software Solutions — Visio IT Solutions",
    description:
      "School ERP, HRMS, visitor management, ecommerce, custom software, and workflow automation — engineered around how your business actually works.",
  },
};

const itemListJsonLd = {
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

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: site.url },
    {
      "@type": "ListItem",
      position: 2,
      name: "Software Solutions",
      item: `${site.url}/software-solutions`,
    },
  ],
};

export default function SoftwareSolutionsPage() {
  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <PageHeader
        eyebrow="Software Solutions"
        title="Software that runs your business."
        description="We're more than a managed IT partner. Visio IT designs and builds the platforms your teams work in every day — from school ERPs and HRMS to ecommerce, custom software, and workflow automation."
      />

      <section className="container-x pb-24 md:pb-32">
        <Stagger className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {softwareSolutions.map((solution) => {
            const Icon = solutionIconMap[solution.icon];
            return (
              <StaggerItem key={solution.slug}>
                <Link
                  href={`/software-solutions/${solution.slug}`}
                  className="glass card-lift group relative flex h-full flex-col overflow-hidden rounded-[24px]"
                >
                  <div className="relative h-44 w-full overflow-hidden">
                    <Image
                      src={solution.image.src}
                      alt={solution.image.alt}
                      fill
                      sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.9)] via-[rgba(0,0,0,0.35)] to-transparent" />
                    <div className="absolute bottom-4 left-5 flex items-center gap-3">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center">
                        <Icon />
                      </span>
                      <span className="t-caption !text-white/90">{solution.name}</span>
                    </div>
                  </div>

                  <div className="relative flex flex-1 flex-col p-7">
                    <p className="text-[14.5px] leading-[1.55] text-white/60">
                      {solution.tagline}
                    </p>
                    <ul className="mt-5 space-y-2.5 border-t border-white/[0.08] pt-5">
                      {solution.highlights.slice(0, 3).map((h) => (
                        <li
                          key={h}
                          className="flex items-start gap-3 text-[14px] leading-[1.5] text-white/70"
                        >
                          <Check
                            size={15}
                            className="mt-[3px] shrink-0 text-[#5aa9ff]"
                            strokeWidth={2.25}
                          />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                    <span className="mt-6 inline-flex items-center gap-1.5 text-[13.5px] font-medium text-[#5aa9ff]">
                      Learn more
                      <ArrowRight
                        size={14}
                        className="transition-transform duration-200 group-hover:translate-x-0.5"
                      />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </Stagger>

        <Reveal className="mt-16 text-center">
          <p className="t-lead mx-auto max-w-[52ch]">
            Not sure which fits? Tell us what you&apos;re trying to solve and
            we&apos;ll map it to the right build.
          </p>
          <Link
            href="/#contact"
            className="btn-primary mt-8 inline-flex h-12 items-center gap-2 rounded-full px-7 text-[15px] font-medium text-white"
          >
            Talk to an engineer
            <ArrowRight size={16} />
          </Link>
        </Reveal>
      </section>
    </PageShell>
  );
}
