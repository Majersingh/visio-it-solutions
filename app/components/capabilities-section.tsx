import Image from "next/image";
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

        <Reveal className="mb-8 overflow-hidden rounded-[24px]">
          <div className="relative h-56 w-full md:h-72">
            <Image
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1400&q=80&auto=format&fit=crop"
              alt="Modern office with engineers collaborating on infrastructure"
              fill
              sizes="(min-width:1200px) 1200px, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
              <p className="t-caption mb-2 !text-white/70">Built different</p>
              <p className="text-[18px] font-medium text-white">
                The tools, discipline, and SLAs of a tech company — as a managed service.
              </p>
            </div>
          </div>
        </Reveal>

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
