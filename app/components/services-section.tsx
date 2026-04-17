import Image from "next/image";
import { Check } from "lucide-react";
import { services, type Service } from "@/lib/site";
import { Reveal, Stagger, StaggerItem } from "./reveal";
import { serviceIconMap } from "./service-icons";

const serviceImages: Record<string, { src: string; alt: string }> = {
  "it-support": {
    src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80&auto=format&fit=crop",
    alt: "IT support engineer at workstation monitoring systems",
  },
  desktop: {
    src: "https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=800&q=80&auto=format&fit=crop",
    alt: "Technician configuring a laptop for deployment",
  },
  network: {
    src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80&auto=format&fit=crop",
    alt: "Network server rack with fiber optic cables",
  },
  noc: {
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format&fit=crop",
    alt: "Network operations center with multiple monitoring screens",
  },
  soc: {
    src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80&auto=format&fit=crop",
    alt: "Cybersecurity shield and digital lock visualization",
  },
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
            const IconComponent = serviceIconMap[service.icon];
            const img = serviceImages[service.id];
            const isFeature = idx === 0 || idx === 3;
            return (
              <StaggerItem
                key={service.id}
                className={isFeature ? "lg:col-span-2" : ""}
              >
                <article className="glass card-lift group relative flex h-full flex-col overflow-hidden rounded-[24px]">
                  {img && (
                    <div className="relative h-48 w-full overflow-hidden md:h-52">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        sizes={isFeature ? "(min-width:1024px) 66vw, 100vw" : "(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"}
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.85)] via-[rgba(0,0,0,0.3)] to-transparent" />
                      <div className="absolute bottom-4 left-5 flex items-center gap-3">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center">
                          <IconComponent />
                        </span>
                        <span className="t-caption !text-white/90">{service.label}</span>
                      </div>
                    </div>
                  )}

                  <div className="relative flex flex-1 flex-col p-7 md:p-8">
                    <div
                      aria-hidden
                      className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[radial-gradient(closest-side,rgba(0,113,227,0.18),transparent_70%)] blur-2xl"
                    />
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
                  </div>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
