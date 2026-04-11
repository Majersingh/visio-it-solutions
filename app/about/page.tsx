import type { Metadata } from "next";
import { PageShell, PageHeader } from "../components/page-shell";
import { Reveal, Stagger } from "../components/reveal";
import { stats, capabilities, site } from "@/lib/site";
import { Counter } from "../components/counter";

export const metadata: Metadata = {
  title: "About",
  description:
    "Visio IT Solutions is the operational backbone for enterprises that can't afford downtime. Meet the team, the principles, and the engineering culture behind our 24/7 operations.",
  alternates: { canonical: "/about" },
};

const principles = [
  {
    title: "Engineers, not call centers.",
    body: "Every ticket touches a certified engineer. No rotating offshore queues, no scripts, no escalation purgatory.",
  },
  {
    title: "Run what you sell.",
    body: "Our internal infrastructure is the same kind we sell. We use our own NOC, SOC, and runbooks every day.",
  },
  {
    title: "Transparency by default.",
    body: "Flat-rate pricing, monthly performance reports, and full access to your own telemetry dashboards.",
  },
  {
    title: "Boring, on purpose.",
    body: "We optimise for predictable outcomes — fewer fires, fewer surprises, fewer late-night calls.",
  },
];

export default function AboutPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="About Visio IT"
        title="The team behind your uptime."
        description="We started Visio IT Solutions because the IT services industry was overdue for a rebuild — fewer call centers, more engineers; fewer surprise invoices, more accountability."
      />

      <section className="container-x pb-16 md:pb-24">
        <Reveal className="glass-strong relative overflow-hidden rounded-[28px] p-1">
          <div className="rounded-[24px] bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))] p-8 md:p-12">
            <dl className="grid grid-cols-2 gap-8 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="t-caption mb-2 !text-white/50">{s.label}</dt>
                  <dd className="t-h2 !text-[28px] md:!text-[40px]">
                    <Counter
                      value={s.value}
                      suffix={s.suffix}
                      format={s.format as "int" | "decimal"}
                    />
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </section>

      <section className="container-x pb-24 md:pb-32">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <Reveal>
            <p className="t-caption mb-5">Our story</p>
            <h2 className="t-h2">
              <span className="accent-text">Built to operate</span>
              <br />
              <span className="text-white/55">like a tech company.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="space-y-6 text-[15.5px] leading-[1.7] text-white/65">
            <p>
              {site.name} was founded by a group of network and security engineers
              who&apos;d spent a decade running the in-house operations of
              fast-growing tech companies — and grew tired of watching their
              friends in less technical industries get short-changed by managed
              service providers built around upsells and contract minimums.
            </p>
            <p>
              We package the tooling, hiring discipline, and SLAs of a
              well-funded internal IT org, and sell it as a managed service.
              The pitch is simple: pay for outcomes, not advisory hours; get a
              named engineer, not a rotating queue; and own your own data.
            </p>
            <p>
              Today we run the IT support, network engineering, and 24/7
              operations behind organisations across healthcare, finance,
              manufacturing, and the public sector — anywhere downtime is
              measured in dollars, not inconvenience.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-mesh relative isolate overflow-hidden section-pad">
        <div className="container-x">
          <Reveal className="mx-auto mb-14 max-w-[60ch] text-center md:mb-20">
            <p className="t-caption mb-5">Principles</p>
            <h2 className="t-h1">
              <span className="accent-text">How we work</span>
              <br />
              <span className="text-white/55">— and why it sticks.</span>
            </h2>
          </Reveal>
          <Stagger className="grid gap-5 md:grid-cols-2">
            {principles.map((p) => (
              <article
                key={p.title}
                className="glass card-lift rounded-[24px] p-8"
              >
                <h3 className="t-h3 mb-3 text-white">{p.title}</h3>
                <p className="text-[15px] leading-[1.6] text-white/60">
                  {p.body}
                </p>
              </article>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="container-x py-24 md:py-32">
        <Reveal className="mx-auto max-w-[960px]">
          <div className="grid gap-px overflow-hidden rounded-[24px] border border-white/[0.08] bg-white/[0.02] md:grid-cols-3">
            {capabilities.slice(0, 3).map((c) => (
              <div key={c.title} className="bg-[#050505] p-7">
                <h3 className="text-[16px] font-medium text-white">{c.title}</h3>
                <p className="mt-2 text-[14px] leading-[1.6] text-white/55">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>
    </PageShell>
  );
}
