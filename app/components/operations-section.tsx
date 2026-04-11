import { Activity, Cpu, Globe, Lock, Wifi, Zap } from "lucide-react";
import { Reveal } from "./reveal";

const telemetry = [
  { label: "Tickets resolved today", value: "1,284", delta: "+12%" },
  { label: "Endpoints under management", value: "128,942", delta: "+2.1k" },
  { label: "Network circuits observed", value: "4,318", delta: "live" },
  { label: "Threats contained (7d)", value: "92", delta: "auto" },
];

export function OperationsSection() {
  return (
    <section
      id="operations"
      className="section-mesh relative isolate overflow-hidden section-pad"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
      />
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-16">
          <Reveal>
            <p className="t-caption mb-5">Inside the operation</p>
            <h2 className="t-h1 mb-6">
              <span className="accent-text">A living map</span>
              <br />
              <span className="text-white/55">of your infrastructure.</span>
            </h2>
            <p className="t-lead mb-10 max-w-[54ch]">
              Every packet, every endpoint, every ticket — streamed into one
              unified view. Our NOC and SOC engineers act on telemetry the
              moment it arrives, so you find out incidents are over, not that
              they&apos;ve begun.
            </p>

            <ul className="grid gap-5 sm:grid-cols-2">
              {[
                { icon: Activity, title: "Proactive remediation", body: "Runbooks trigger in under 30 seconds." },
                { icon: Lock, title: "Zero-trust by default", body: "Segmentation, NAC, MDM on day one." },
                { icon: Globe, title: "Geo-diverse facilities", body: "Redundant NOC sites, full DR." },
                { icon: Zap, title: "10-minute SLA", body: "Priority incidents, every tier." },
              ].map((f) => (
                <li key={f.title} className="flex gap-3">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-[#5aa9ff]">
                    <f.icon size={16} strokeWidth={1.5} />
                  </span>
                  <div>
                    <p className="text-[15px] font-medium text-white">
                      {f.title}
                    </p>
                    <p className="text-[14px] leading-[1.55] text-white/55">
                      {f.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="glass-strong relative overflow-hidden rounded-[28px] p-1">
              <div className="relative rounded-[24px] bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))] p-6 md:p-8">
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="flex h-2 w-2 rounded-full bg-[#30d158] shadow-[0_0_12px_rgba(48,209,88,0.7)]" />
                    <span className="font-mono text-[11px] tracking-widest text-white/60">
                      NOC-01 / LIVE
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-white/20" />
                    <span className="h-2 w-2 rounded-full bg-white/20" />
                    <span className="h-2 w-2 rounded-full bg-white/20" />
                  </div>
                </div>

                <div className="mb-6 grid grid-cols-2 gap-3">
                  {telemetry.map((t) => (
                    <div
                      key={t.label}
                      className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4"
                    >
                      <p className="mb-1.5 text-[11px] font-medium uppercase tracking-wider text-white/45">
                        {t.label}
                      </p>
                      <p className="font-mono text-[20px] font-medium tabular-nums text-white">
                        {t.value}
                      </p>
                      <p className="mt-1 text-[11px] font-medium text-[#5aa9ff]">
                        {t.delta}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="rounded-2xl border border-white/[0.08] bg-black/40 p-5">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-[12px] font-medium text-white/55">
                      Global latency · 60s window
                    </span>
                    <span className="font-mono text-[11px] text-white/40">
                      ms
                    </span>
                  </div>
                  <Sparkline />
                  <div className="mt-4 flex items-center gap-5 text-[11px] text-white/50">
                    <LegendDot color="#5aa9ff" label="US-East" />
                    <LegendDot color="#7c3aed" label="EU-West" />
                    <LegendDot color="#30d158" label="APAC" />
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-3 gap-3 text-center">
                  {[
                    { icon: Cpu, label: "CPU 34%" },
                    { icon: Wifi, label: "PKT 0.01%" },
                    { icon: Activity, label: "RTT 42ms" },
                  ].map((m) => (
                    <div
                      key={m.label}
                      className="flex items-center justify-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.02] py-2.5 font-mono text-[11px] text-white/60"
                    >
                      <m.icon size={12} />
                      {m.label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function LegendDot({ color, label }: { color: string; label: string }) {
  return (
    <span className="flex items-center gap-1.5">
      <span
        className="h-1.5 w-1.5 rounded-full"
        style={{ background: color }}
      />
      {label}
    </span>
  );
}

function Sparkline() {
  // Static SSR-friendly SVG trio
  const paths = [
    {
      d: "M0 36 L20 34 L40 30 L60 32 L80 28 L100 24 L120 30 L140 22 L160 20 L180 26 L200 18 L220 22 L240 16 L260 20 L280 14 L300 18 L320 12 L340 16 L360 10 L380 14 L400 8",
      stroke: "#5aa9ff",
    },
    {
      d: "M0 44 L20 42 L40 46 L60 40 L80 44 L100 38 L120 42 L140 36 L160 40 L180 34 L200 38 L220 32 L240 34 L260 30 L280 32 L300 26 L320 30 L340 24 L360 28 L380 22 L400 26",
      stroke: "#7c3aed",
    },
    {
      d: "M0 52 L20 50 L40 54 L60 48 L80 52 L100 46 L120 50 L140 44 L160 48 L180 42 L200 46 L220 40 L240 42 L260 36 L280 40 L300 34 L320 38 L340 32 L360 36 L380 30 L400 34",
      stroke: "#30d158",
    },
  ];
  return (
    <svg
      viewBox="0 0 400 60"
      preserveAspectRatio="none"
      className="h-20 w-full"
      aria-hidden
    >
      <defs>
        <linearGradient id="fade" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#5aa9ff" stopOpacity="0.25" />
          <stop offset="1" stopColor="#5aa9ff" stopOpacity="0" />
        </linearGradient>
      </defs>
      {paths.map((p, i) => (
        <path
          key={i}
          d={p.d}
          fill="none"
          stroke={p.stroke}
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity={i === 0 ? 1 : 0.55}
        />
      ))}
    </svg>
  );
}
