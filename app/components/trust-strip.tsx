import { Reveal } from "./reveal";

const vendors = [
  "Cisco",
  "Microsoft",
  "Fortinet",
  "CrowdStrike",
  "Palo Alto",
  "AWS",
  "Meraki",
  "Jamf",
];

export function TrustStrip() {
  return (
    <section
      aria-label="Trusted vendor partners"
      className="relative overflow-hidden border-y border-white/[0.06] bg-black/60 py-10"
    >
      <Reveal className="container-x">
        <p className="t-caption mb-6 text-center">
          Certified partners · Trusted by teams that can&apos;t go down
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5 md:gap-x-14">
          {vendors.map((v) => (
            <li
              key={v}
              className="text-[15px] font-medium tracking-tight text-white/40 transition-colors duration-300 hover:text-white/80"
            >
              {v}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
