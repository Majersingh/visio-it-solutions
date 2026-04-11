import { Mail, Phone } from "lucide-react";
import { site } from "@/lib/site";
import { Reveal } from "./reveal";
import { WhatsAppForm } from "./whatsapp-form";

export function CtaSection() {
  return (
    <section id="contact" className="relative section-pad">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-16">
          <Reveal>
            <p className="t-caption mb-5">Talk to an engineer</p>
            <h2 className="t-h1 max-w-[16ch]">
              <span className="accent-text">Ready for IT that</span>
              <br />
              <span className="accent-blue-text">earns its keep?</span>
            </h2>
            <p className="t-lead mt-6 max-w-[48ch]">
              Tell us about your environment. In 30 minutes you&apos;ll leave
              with a map of what we&apos;d run, how fast we&apos;d run it, and
              what it would cost.
            </p>

            <ul className="mt-10 flex flex-col gap-4 text-[14.5px] text-white/65">
              <li className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.1] bg-white/[0.05] text-[#5aa9ff]">
                  <Phone size={15} />
                </span>
                <a
                  href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}
                  className="hover:text-white"
                >
                  {site.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.1] bg-white/[0.05] text-[#5aa9ff]">
                  <Mail size={15} />
                </span>
                <a
                  href={`mailto:${site.email}`}
                  className="hover:text-white"
                >
                  {site.email}
                </a>
              </li>
            </ul>

            <p className="mt-8 text-[12.5px] text-white/40">
              Average reply under 20 minutes · Worldwide coverage
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <WhatsAppForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
