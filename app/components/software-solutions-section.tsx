import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { softwareSolutions } from "@/lib/site";
import { Reveal, Stagger, StaggerItem } from "./reveal";
import { solutionIconMap } from "./solution-icons";

export function SoftwareSolutionsSection() {
  return (
    <section
      id="software-solutions"
      className="relative isolate section-pad"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
      />
      <div className="container-x">
        <Reveal className="mx-auto mb-16 max-w-[62ch] text-center md:mb-20">
          <p className="t-caption mb-5">Software solutions</p>
          <h2 className="t-h1 text-balance">
            <span className="accent-text">Beyond IT support —</span>
            <br />
            <span className="text-white/55">software that runs your business.</span>
          </h2>
          <p className="t-lead mt-6">
            We don&apos;t just keep your infrastructure running. We design and
            build the platforms your teams work in every day — school ERPs, HRMS,
            ecommerce, and custom software engineered around your workflows.
          </p>
        </Reveal>

        <Stagger className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {softwareSolutions.map((solution) => {
            const Icon = solutionIconMap[solution.icon];
            return (
              <StaggerItem key={solution.slug}>
                <Link
                  href={`/software-solutions/${solution.slug}`}
                  className="glass card-lift group relative flex h-full flex-col overflow-hidden rounded-[24px] p-7 md:p-8"
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[radial-gradient(closest-side,rgba(0,113,227,0.16),transparent_70%)] blur-2xl"
                  />
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center">
                      <Icon />
                    </span>
                    <ArrowUpRight
                      size={18}
                      className="text-white/30 transition-colors duration-200 group-hover:text-white"
                    />
                  </div>

                  <h3 className="t-h3 mt-6 text-white">{solution.name}</h3>
                  <p className="mt-2 text-[14.5px] leading-[1.55] text-white/55">
                    {solution.tagline}
                  </p>

                  <ul className="mt-6 space-y-2.5 border-t border-white/[0.08] pt-6">
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
                    Explore {solution.name}
                    <ArrowRight
                      size={14}
                      className="transition-transform duration-200 group-hover:translate-x-0.5"
                    />
                  </span>
                </Link>
              </StaggerItem>
            );
          })}
        </Stagger>

        <Reveal className="mt-12 text-center" delay={0.1}>
          <Link
            href="/software-solutions"
            className="btn-primary inline-flex h-12 items-center gap-2 rounded-full px-7 text-[15px] font-medium text-white"
          >
            View all software solutions
            <ArrowRight size={16} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
