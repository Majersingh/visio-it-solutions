import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowLeft, Check } from "lucide-react";
import { PageShell } from "../../components/page-shell";
import { Reveal, Stagger, StaggerItem } from "../../components/reveal";
import { solutionIconMap } from "../../components/solution-icons";
import { softwareSolutions, getSoftwareSolution, site } from "@/lib/site";

export function generateStaticParams() {
  return softwareSolutions.map((s) => ({ slug: s.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSoftwareSolution(slug);
  if (!solution) return {};

  const url = `${site.url}/software-solutions/${solution.slug}`;
  const title = `${solution.name} — ${solution.tagline}`;
  return {
    title,
    description: solution.summary,
    keywords: [...solution.keywords],
    alternates: { canonical: `/software-solutions/${solution.slug}` },
    openGraph: {
      type: "website",
      url,
      title: `${solution.name} · ${site.shortName}`,
      description: solution.summary,
      images: [{ url: solution.image.src, alt: solution.image.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${solution.name} · ${site.shortName}`,
      description: solution.summary,
    },
  };
}

export default async function SolutionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const solution = getSoftwareSolution(slug);
  if (!solution) notFound();

  const Icon = solutionIconMap[solution.icon];

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: solution.name,
    serviceType: solution.name,
    description: solution.summary,
    url: `${site.url}/software-solutions/${solution.slug}`,
    provider: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
      telephone: site.phone,
      email: site.email,
    },
    areaServed: "Worldwide",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${solution.name} features`,
      itemListElement: solution.features.map((f) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: f.title, description: f.body },
      })),
    },
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
      {
        "@type": "ListItem",
        position: 3,
        name: solution.name,
        item: `${site.url}/software-solutions/${solution.slug}`,
      },
    ],
  };

  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 -top-32 -z-10 mx-auto h-[420px] w-[1100px] max-w-[120vw]"
        >
          <div className="absolute inset-0 rounded-[50%] bg-[radial-gradient(closest-side,rgba(0,113,227,0.22),transparent_75%)] blur-3xl" />
        </div>
        <div className="container-x pb-16 pt-4 md:pb-20">
          <Reveal>
            <Link
              href="/software-solutions"
              className="inline-flex items-center gap-1.5 text-[13.5px] font-medium text-white/50 transition-colors hover:text-white"
            >
              <ArrowLeft size={14} />
              All software solutions
            </Link>
          </Reveal>

          <div className="mt-10 grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-16">
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center">
                  <Icon />
                </span>
                <p className="t-caption">{solution.name}</p>
              </div>
              <h1 className="mt-6 text-balance text-[clamp(2rem,5.5vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.035em] accent-text">
                {solution.title}
              </h1>
              <p className="t-lead mt-6 max-w-[52ch]">{solution.tagline}</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  href="/#contact"
                  className="btn-primary inline-flex h-12 items-center gap-2 rounded-full px-7 text-[15px] font-medium text-white"
                >
                  Request a demo
                  <ArrowRight size={16} />
                </Link>
                <a
                  href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}
                  className="inline-flex h-12 items-center rounded-full border border-white/[0.12] bg-white/[0.04] px-7 text-[15px] font-medium text-white/85 transition-colors hover:bg-white/[0.08]"
                >
                  Talk to us
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[24px] border border-white/[0.08]">
                <Image
                  src={solution.image.src}
                  alt={solution.image.alt}
                  fill
                  sizes="(min-width:1024px) 45vw, 100vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="container-x pb-16 md:pb-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <Reveal>
            <p className="t-caption mb-5">Overview</p>
            <h2 className="t-h2">
              <span className="accent-text">Why teams choose</span>
              <br />
              <span className="text-white/55">our {solution.name}.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="space-y-6 text-[15.5px] leading-[1.7] text-white/65">
            {solution.overview.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <ul className="grid gap-x-6 gap-y-3 pt-2 sm:grid-cols-2">
              {solution.highlights.map((h) => (
                <li
                  key={h}
                  className="flex items-start gap-3 text-[14.5px] text-white/75"
                >
                  <Check
                    size={16}
                    className="mt-[3px] shrink-0 text-[#5aa9ff]"
                    strokeWidth={2.25}
                  />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Features */}
      <section className="section-mesh relative isolate overflow-hidden section-pad">
        <div className="container-x">
          <Reveal className="mx-auto mb-14 max-w-[60ch] text-center md:mb-20">
            <p className="t-caption mb-5">Capabilities</p>
            <h2 className="t-h1">
              <span className="accent-text">Everything you need,</span>
              <br />
              <span className="text-white/55">in one platform.</span>
            </h2>
          </Reveal>
          <Stagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {solution.features.map((f) => (
              <StaggerItem key={f.title}>
                <article className="glass card-lift h-full rounded-[24px] p-7">
                  <h3 className="t-h3 mb-3 text-white">{f.title}</h3>
                  <p className="text-[15px] leading-[1.6] text-white/60">{f.body}</p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Audience */}
      <section className="container-x py-24 md:py-32">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <Reveal>
            <p className="t-caption mb-5">Built for</p>
            <h2 className="t-h2">
              <span className="accent-text">Who it&apos;s</span>
              <br />
              <span className="text-white/55">designed for.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid gap-px overflow-hidden rounded-[24px] border border-white/[0.08] bg-white/[0.02] sm:grid-cols-2">
              {solution.audience.map((a) => (
                <div key={a} className="bg-[#050505] p-6">
                  <p className="text-[15px] leading-[1.5] text-white/75">{a}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative section-pad">
        <div className="container-x">
          <Reveal className="glass-strong relative overflow-hidden rounded-[28px] p-1">
            <div className="rounded-[24px] bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))] px-8 py-14 text-center md:px-12 md:py-20">
              <h2 className="t-h1 mx-auto max-w-[20ch]">
                <span className="accent-text">Ready to see</span>{" "}
                <span className="accent-blue-text">{solution.name} in action?</span>
              </h2>
              <p className="t-lead mx-auto mt-6 max-w-[48ch]">
                Book a walkthrough and we&apos;ll show you exactly how it maps to
                your workflows — and what it would take to go live.
              </p>
              <div className="mt-9 flex flex-wrap justify-center gap-3">
                <Link
                  href="/#contact"
                  className="btn-primary inline-flex h-12 items-center gap-2 rounded-full px-7 text-[15px] font-medium text-white"
                >
                  Request a demo
                  <ArrowRight size={16} />
                </Link>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex h-12 items-center rounded-full border border-white/[0.12] bg-white/[0.04] px-7 text-[15px] font-medium text-white/85 transition-colors hover:bg-white/[0.08]"
                >
                  {site.email}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
