import { type ReactNode } from "react";
import { SiteNav } from "./site-nav";
import { SiteFooter } from "./site-footer";
import { WhatsAppFab } from "./whatsapp-fab";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteNav />
      <main className="relative pt-32 md:pt-40">{children}</main>
      <SiteFooter />
      <WhatsAppFab />
    </>
  );
}

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
}) {
  return (
    <header className="relative isolate overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-32 -z-10 mx-auto h-[420px] w-[1100px] max-w-[120vw]"
      >
        <div className="absolute inset-0 rounded-[50%] bg-[radial-gradient(closest-side,rgba(0,113,227,0.22),transparent_75%)] blur-3xl" />
      </div>
      <div className="container-x pb-16 pt-8 text-center md:pb-24">
        <p className="t-caption mb-5">{eyebrow}</p>
        <h1 className="mx-auto max-w-[20ch] text-balance text-[clamp(2rem,6vw,4.5rem)] font-semibold leading-[1.05] tracking-[-0.035em] accent-text">
          {title}
        </h1>
        {description && (
          <p className="t-lead mx-auto mt-6 max-w-[60ch] text-balance">
            {description}
          </p>
        )}
      </div>
    </header>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="container-x pb-32">
      <div className="prose-glass mx-auto max-w-[720px] space-y-8 text-[15.5px] leading-[1.7] text-white/70">
        {children}
      </div>
    </div>
  );
}
