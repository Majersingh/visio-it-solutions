import Image from "next/image";
import Link from "next/link";
import { site, services } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-white/[0.08] bg-[#030303]">
      <div className="container-x py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/visiologo.png"
                alt={site.name}
                width={36}
                height={36}
                className="h-9 w-9 rounded-lg object-contain"
              />
              <span className="t-body font-semibold tracking-tight">
                Visio<span className="text-white/60">IT</span>
              </span>
            </Link>
            <p className="mt-5 max-w-[42ch] text-[14px] leading-[1.6] text-white/55">
              {site.description}
            </p>
            <p className="mt-5 text-[13px] text-white/40">{site.domain}</p>
          </div>

          <FooterColumn title="Services">
            {services.map((s) => (
              <FooterLink key={s.id} href={`/#services`}>
                {s.label}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Company">
            <FooterLink href="/about">About</FooterLink>
            <FooterLink href="/#operations">Operations</FooterLink>
            <FooterLink href="/#faq">FAQ</FooterLink>
            <FooterLink href="/#contact">Contact</FooterLink>
          </FooterColumn>

          <FooterColumn title="Contact">
            <FooterLink href={`mailto:${site.email}`}>{site.email}</FooterLink>
            <FooterLink href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}>
              {site.phone}
            </FooterLink>
            <span className="text-[13.5px] text-white/50">{site.address}</span>
            <span className="text-[13.5px] text-white/50">
              24/7 NOC &amp; SOC
            </span>
          </FooterColumn>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/[0.06] pt-8 md:flex-row md:items-center">
          <p className="text-[12.5px] text-white/40">
            © {year} {site.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-[12.5px] text-white/40">
            <FooterLink href="/terms">Terms</FooterLink>
            <FooterLink href="/privacy">Privacy</FooterLink>
            <span>SOC 2 Type II</span>
            <span>ISO 27001</span>
            <span>HIPAA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="t-caption mb-5">{title}</p>
      <ul className="flex flex-col gap-3">{children}</ul>
    </div>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <a
        href={href}
        className="text-[13.5px] text-white/60 transition-colors duration-200 hover:text-white"
      >
        {children}
      </a>
    </li>
  );
}
