const iconBase =
  "h-full w-full rounded-2xl border border-white/[0.12] shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_4px_16px_rgba(0,0,0,0.3)]";

export function HeadsetIcon() {
  return (
    <div className={`${iconBase} bg-gradient-to-br from-[#0071e3] to-[#00c7ff] p-2.5`}>
      <svg viewBox="0 0 32 32" fill="none" className="h-full w-full">
        <path
          d="M8 18v-4a8 8 0 1 1 16 0v4"
          stroke="white"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <rect x="5" y="17" width="4" height="7" rx="2" fill="white" fillOpacity="0.9" />
        <rect x="23" y="17" width="4" height="7" rx="2" fill="white" fillOpacity="0.9" />
        <path
          d="M23 24v1a4 4 0 0 1-4 4h-3"
          stroke="white"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export function MonitorIcon() {
  return (
    <div className={`${iconBase} bg-gradient-to-br from-[#30d158] to-[#00c7be] p-2.5`}>
      <svg viewBox="0 0 32 32" fill="none" className="h-full w-full">
        <rect x="4" y="5" width="24" height="16" rx="2.5" stroke="white" strokeWidth="1.8" />
        <path d="M12 25h8" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M16 21v4" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="16" cy="13" r="2" fill="white" fillOpacity="0.85" />
        <path
          d="M10 17h12"
          stroke="white"
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.4"
        />
      </svg>
    </div>
  );
}

export function NetworkIcon() {
  return (
    <div className={`${iconBase} bg-gradient-to-br from-[#5e5ce6] to-[#bf5af2] p-2.5`}>
      <svg viewBox="0 0 32 32" fill="none" className="h-full w-full">
        <circle cx="16" cy="8" r="3" fill="white" fillOpacity="0.9" />
        <circle cx="8" cy="24" r="3" fill="white" fillOpacity="0.9" />
        <circle cx="24" cy="24" r="3" fill="white" fillOpacity="0.9" />
        <path
          d="M16 11v3l-6.5 7.5M16 14l6.5 7.5"
          stroke="white"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export function RadarIcon() {
  return (
    <div className={`${iconBase} bg-gradient-to-br from-[#ff9f0a] to-[#ff375f] p-2.5`}>
      <svg viewBox="0 0 32 32" fill="none" className="h-full w-full">
        <circle cx="16" cy="16" r="10" stroke="white" strokeWidth="1.4" opacity="0.3" />
        <circle cx="16" cy="16" r="6" stroke="white" strokeWidth="1.4" opacity="0.5" />
        <circle cx="16" cy="16" r="2" fill="white" fillOpacity="0.9" />
        <path
          d="M16 16L22 8"
          stroke="white"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <circle cx="22" cy="8" r="1.8" fill="white" fillOpacity="0.9" />
      </svg>
    </div>
  );
}

export function ShieldIcon() {
  return (
    <div className={`${iconBase} bg-gradient-to-br from-[#ff375f] to-[#ff6482] p-2.5`}>
      <svg viewBox="0 0 32 32" fill="none" className="h-full w-full">
        <path
          d="M16 4L6 9v6c0 6.5 4.3 10.7 10 12.3 5.7-1.6 10-5.8 10-12.3V9L16 4Z"
          stroke="white"
          strokeWidth="1.8"
          strokeLinejoin="round"
          fill="white"
          fillOpacity="0.12"
        />
        <path
          d="M12 16l3 3 5-6"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export const serviceIconMap = {
  headset: HeadsetIcon,
  monitor: MonitorIcon,
  network: NetworkIcon,
  radar: RadarIcon,
  shield: ShieldIcon,
} as const;
