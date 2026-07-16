import type { SoftwareSolution } from "@/lib/site";

const iconBase =
  "h-full w-full rounded-2xl border border-white/[0.12] shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_4px_16px_rgba(0,0,0,0.3)]";

const stroke = {
  stroke: "white",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  fill: "none",
};

export function SchoolIcon() {
  return (
    <div className={`${iconBase} bg-gradient-to-br from-[#0071e3] to-[#00c7ff] p-2.5`}>
      <svg viewBox="0 0 32 32" className="h-full w-full">
        <path d="M16 6 4 11l12 5 12-5-12-5Z" {...stroke} />
        <path d="M9 14v6c0 1.5 3.1 3 7 3s7-1.5 7-3v-6" {...stroke} />
        <path d="M28 11v6" {...stroke} />
      </svg>
    </div>
  );
}

export function ErpIcon() {
  return (
    <div className={`${iconBase} bg-gradient-to-br from-[#30d158] to-[#00c7be] p-2.5`}>
      <svg viewBox="0 0 32 32" className="h-full w-full">
        <rect x="5" y="5" width="9" height="9" rx="1.5" {...stroke} />
        <rect x="18" y="5" width="9" height="9" rx="1.5" {...stroke} />
        <rect x="5" y="18" width="9" height="9" rx="1.5" {...stroke} />
        <rect x="18" y="18" width="9" height="9" rx="1.5" {...stroke} />
      </svg>
    </div>
  );
}

export function VisitorIcon() {
  return (
    <div className={`${iconBase} bg-gradient-to-br from-[#5e5ce6] to-[#bf5af2] p-2.5`}>
      <svg viewBox="0 0 32 32" className="h-full w-full">
        <circle cx="16" cy="11" r="4.5" {...stroke} />
        <path d="M7 26c0-4.4 4-8 9-8s9 3.6 9 8" {...stroke} />
        <path d="M20 12.5l2 2 3.5-4" {...stroke} strokeWidth={2} />
      </svg>
    </div>
  );
}

export function HrmsIcon() {
  return (
    <div className={`${iconBase} bg-gradient-to-br from-[#ff9f0a] to-[#ff375f] p-2.5`}>
      <svg viewBox="0 0 32 32" className="h-full w-full">
        <circle cx="11" cy="11" r="4" {...stroke} />
        <path d="M4 26c0-3.9 3.1-7 7-7s7 3.1 7 7" {...stroke} />
        <circle cx="23" cy="13" r="3" {...stroke} />
        <path d="M20 26c0-3.3 1.3-6 3-6s3 2 3.5 4" {...stroke} />
      </svg>
    </div>
  );
}

export function CodeIcon() {
  return (
    <div className={`${iconBase} bg-gradient-to-br from-[#0071e3] to-[#5e5ce6] p-2.5`}>
      <svg viewBox="0 0 32 32" className="h-full w-full">
        <path d="M11 10 5 16l6 6" {...stroke} />
        <path d="M21 10l6 6-6 6" {...stroke} />
        <path d="M18 7 14 25" {...stroke} />
      </svg>
    </div>
  );
}

export function CartIcon() {
  return (
    <div className={`${iconBase} bg-gradient-to-br from-[#ff375f] to-[#ff9f0a] p-2.5`}>
      <svg viewBox="0 0 32 32" className="h-full w-full">
        <path d="M5 6h3l2.2 12.2a2 2 0 0 0 2 1.8h8.7a2 2 0 0 0 2-1.6L27 10H9" {...stroke} />
        <circle cx="13" cy="25" r="1.8" fill="white" />
        <circle cx="23" cy="25" r="1.8" fill="white" />
      </svg>
    </div>
  );
}

export function WorkflowIcon() {
  return (
    <div className={`${iconBase} bg-gradient-to-br from-[#00c7be] to-[#0071e3] p-2.5`}>
      <svg viewBox="0 0 32 32" className="h-full w-full">
        <rect x="5" y="6" width="8" height="6" rx="1.5" {...stroke} />
        <rect x="19" y="20" width="8" height="6" rx="1.5" {...stroke} />
        <circle cx="23" cy="9" r="3" {...stroke} />
        <path d="M13 9h4M23 12v4M9 12v6a2 2 0 0 0 2 2h8" {...stroke} />
      </svg>
    </div>
  );
}

export const solutionIconMap: Record<SoftwareSolution["icon"], () => React.ReactElement> = {
  school: SchoolIcon,
  erp: ErpIcon,
  visitor: VisitorIcon,
  hrms: HrmsIcon,
  code: CodeIcon,
  cart: CartIcon,
  workflow: WorkflowIcon,
};
