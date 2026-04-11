import { capabilities } from "@/lib/site";
import { Reveal, Stagger, StaggerItem } from "./reveal";

export function CapabilitiesSection() {
  return (
    <section id="capabilities" className="relative section-pad">
      <div className="container-x">
        <div className="mb-16 grid gap-10 md:mb-20 md:grid-cols-[1fr_1.4fr] md:items-end">
          <Reveal>
            <p className="t-caption mb-5">Why Visio IT</p>
            <h2 className="t-h1">
              <span className="accent-text">Enterprise muscle,</span>
              <br />
              <span className="text-white/55">without the enterprise drag.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="t-lead">
              We were built to operate like the in-house ops team of a
              well-funded tech company — with the clarity, tooling, and SLAs
              that come with it — and sell it as a managed service.
            </p>
          </Reveal>
        </div>

        <Stagger
          className="grid grid-cols-1 gap-px overflow-hidden rounded-[28px] border border-white/[0.08] bg-white/[0.02] md:grid-cols-2 lg:grid-cols-3"
          stagger={0.06}
        >
          {capabilities.map((c) => (
            <StaggerItem
              key={c.title}
              className="group relative bg-[#050505] p-8 transition-colors duration-500 hover:bg-white/[0.035] md:p-10"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(400px 200px at var(--x,50%) var(--y,0%), rgba(0,113,227,0.12), transparent 60%)",
                }}
              />
              <h3 className="t-h3 relative mb-3 text-white">{c.title}</h3>
              <p className="relative text-[15.5px] leading-[1.6] text-white/60">
                {c.body}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
