import {
  Headset,
  Monitor,
  Network,
  Radar,
  ShieldCheck,
  Check,
} from "lucide-react";
import { services, type Service } from "@/lib/site";
import { Reveal, Stagger, StaggerItem } from "./reveal";

const iconMap: Record<Service["icon"], typeof Headset> = {
  headset: Headset,
  monitor: Monitor,
  network: Network,
  radar: Radar,
  shield: ShieldCheck,
};

export function ServicesSection() {
  return (
    <section
      id="services"
      className="section-mesh relative isolate section-pad"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
      />
      <div className="container-x">
        <Reveal className="mx-auto mb-16 max-w-[60ch] text-center md:mb-24">
          <p className="t-caption mb-5">What we run</p>
          <h2 className="t-h1 text-balance">
            <span className="accent-text">A single partner for every layer</span>
            <br />
            <span className="text-white/55">of your IT stack.</span>
          </h2>
          <p className="t-lead mt-6">
            Five practices, one escalation path. We staff, tool, and operate the
            services enterprises used to build themselves — at a fraction of the
            cost, and without the single points of failure.
          </p>
        </Reveal>

        <Stagger className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => {
            const Icon = iconMap[service.icon];
            const isFeature = idx === 0 || idx === 3;
            return (
              <StaggerItem
                key={service.id}
                className={isFeature ? "lg:col-span-2" : ""}
              >
                <article className="glass card-lift relative flex h-full flex-col overflow-hidden rounded-[24px] p-7 md:p-8">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[radial-gradient(closest-side,rgba(0,113,227,0.22),transparent_70%)] blur-2xl"
                  />
                  <div className="mb-6 flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]">
                      <Icon size={18} strokeWidth={1.5} />
                    </span>
                    <span className="t-caption">{service.label}</span>
                  </div>
                  <h3 className="t-h3 mb-3 text-white">{service.title}</h3>
                  <p className="t-body text-white/60">{service.tagline}</p>
                  <p className="mt-5 text-[15px] leading-[1.6] text-white/55">
                    {service.description}
                  </p>
                  <ul className="mt-7 space-y-2.5 border-t border-white/[0.08] pt-6">
                    {service.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-3 text-[14.5px] leading-[1.55] text-white/70"
                      >
                        <Check
                          size={15}
                          className="mt-[3px] shrink-0 text-[#5aa9ff]"
                          strokeWidth={2.25}
                        />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
