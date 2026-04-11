"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Activity, Shield } from "lucide-react";
import { Counter } from "./counter";
import { stats } from "@/lib/site";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const blobY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.4]);

  return (
    <section
      ref={ref}
      className="hero-mesh noise relative isolate overflow-hidden pb-16 pt-36 md:pt-44 lg:pb-28 lg:pt-52"
    >
      <motion.div
        style={{ y: blobY }}
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full"
      >
        <div className="orbit-slow absolute inset-0 rounded-full border border-white/[0.06]" />
        <div className="orbit-rev absolute inset-10 rounded-full border border-white/[0.05]" />
        <div className="orbit-slow absolute inset-24 rounded-full border border-white/[0.04]" />
      </motion.div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-24 -z-10 mx-auto h-[560px] w-[1100px] max-w-[120vw]"
      >
        <div className="absolute inset-0 rounded-[50%] bg-[radial-gradient(closest-side,rgba(0,113,227,0.35),transparent_75%)] blur-3xl" />
      </div>

      <motion.div style={{ y, opacity }} className="container-wide relative text-center">
        <div className="rise-in rise-d1 mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="dot-pulse absolute inset-0 rounded-full bg-[#30d158]" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#30d158]" />
          </span>
          <span className="t-caption !text-white/75">
            Operating worldwide · 24/7/365
          </span>
        </div>

        <h1 className="rise-in rise-d2 mx-auto max-w-[16ch] text-balance text-[clamp(2rem,5.5vw,4.25rem)] font-semibold leading-[1.06] tracking-[-0.035em]">
          <span className="accent-text">Infrastructure</span>
          <br />
          <span className="accent-blue-text">that never sleeps.</span>
        </h1>

        <p className="rise-in rise-d3 t-lead mx-auto mt-6 max-w-[48ch] text-balance">
          IT support, network engineering, and 24/7 NOC &amp; SOC operations —
          built for uptime.
        </p>

        <div className="rise-in rise-d4 mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#contact"
            className="btn-primary group inline-flex h-12 items-center gap-2 rounded-full px-7 text-[15px] font-medium text-white"
          >
            Book a strategy call
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </a>
          <a
            href="#services"
            className="btn-glass inline-flex h-12 items-center gap-2 rounded-full px-6 text-[15px] font-medium text-white"
          >
            Explore services
          </a>
        </div>

        <div className="rise-in rise-d5 mx-auto mt-20 w-full max-w-[1000px]">
          <div className="glass-strong relative overflow-hidden rounded-[28px] p-1">
            <div className="rounded-[24px] bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))] p-6 md:p-10">
              <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <Activity size={16} className="text-[#30d158]" />
                  <span className="t-caption !text-white/75">
                    Live operations
                  </span>
                </div>
                <div className="flex items-center gap-2 text-white/50">
                  <Shield size={14} />
                  <span className="text-[12px] font-medium tracking-wide">
                    SOC 2 · ISO 27001 · HIPAA
                  </span>
                </div>
              </div>
              <dl className="grid grid-cols-2 gap-6 sm:grid-cols-4 md:gap-10">
                {stats.map((s) => (
                  <div key={s.label} className="text-left">
                    <dt className="t-caption mb-2 !text-white/50">{s.label}</dt>
                    <dd className="t-h2 !text-[32px] md:!text-[44px]">
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
          </div>
        </div>
      </motion.div>
    </section>
  );
}
