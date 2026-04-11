export const site = {
  name: "Visio IT Solutions",
  shortName: "Visio IT",
  domain: "visioitsolutions.com",
  url: "https://visioitsolutions.com",
  phone: "+91 63558 85240",
  whatsapp: "916355885240", // digits only — used for wa.me links
  whatsappDisplay: "+91 63558 85240",
  email: "support@visioitsolutions.com",
  address: "Delhi, India",
  tagline: "Infrastructure that never sleeps.",
  description:
    "Enterprise IT support, network engineering, and 24/7 NOC & SOC operations — engineered for uptime, designed for resilience.",
} as const;

export const faqs = [
  {
    q: "What's actually included in your IT support contract?",
    a: "24/7 ticket intake (phone, email, chat), SLA-backed response, certified Tier 1–3 engineers, full asset and lifecycle management, automated patching, MDM, monthly reporting, and a named Customer Success Manager. Everything is fixed-fee — no surprise advisory hours.",
  },
  {
    q: "How fast do you respond to incidents?",
    a: "P1 (production-down) incidents are acknowledged in under 10 minutes, 24/7/365. Our SOC targets a 15-minute MTTR for security events. Every SLA is contractually backed and reported on every month.",
  },
  {
    q: "Do you support remote, hybrid, and onsite teams?",
    a: "Yes — all three under one contract. Remote support runs from our NOC; onsite dispatch covers North America with next-business-day SLAs and break-fix coverage in major metros.",
  },
  {
    q: "What's the difference between your NOC and SOC?",
    a: "The NOC keeps your infrastructure running — monitoring uptime, capacity, and performance, and remediating outages. The SOC keeps it secure — running MDR, threat hunting, SIEM, and incident response. Most clients buy both because they answer different questions.",
  },
  {
    q: "How do you price your services?",
    a: "Flat-rate per-seat or per-device for support, fixed-fee for NOC/SOC. We share pricing on the discovery call once we understand environment size and complexity. No per-incident fees, no overages, no hidden line items.",
  },
  {
    q: "Are you compliant with SOC 2, HIPAA, ISO 27001, PCI?",
    a: "Yes. We operate as a SOC 2 Type II audited organization with ISO 27001 certification, and we're aligned to HIPAA and PCI DSS. We can also help your team prepare for and pass the same audits.",
  },
  {
    q: "How quickly can you onboard us?",
    a: "Standard onboarding takes 2–4 weeks: discovery, tooling deployment, asset inventory, runbook handover, and a soft launch. Emergency takeovers can be live within 72 hours.",
  },
  {
    q: "Can we keep our existing tools and vendors?",
    a: "Almost always, yes. We integrate with the major MDM, RMM, SIEM, ticketing, and observability platforms — we'll meet you where you are rather than force a forklift migration.",
  },
] as const;

export const nav = [
  { label: "Services", href: "/#services" },
  { label: "Operations", href: "/#operations" },
  { label: "FAQ", href: "/#faq" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact" },
] as const;

export type Service = {
  id: string;
  label: string;
  title: string;
  tagline: string;
  description: string;
  bullets: readonly string[];
  icon: "headset" | "monitor" | "network" | "radar" | "shield";
};

export const services: readonly Service[] = [
  {
    id: "it-support",
    label: "Managed IT Support",
    title: "Always-on IT support",
    tagline: "White-glove help desk. Real engineers. Zero scripts.",
    description:
      "Tiered help desk staffed by certified engineers who own the ticket end to end — not a call-center rotation. ITIL-aligned, measured on first-touch resolution.",
    bullets: [
      "24/7/365 ticket intake across phone, email, chat",
      "SLA-backed response under 10 minutes for P1 incidents",
      "Full ITAM, patching, and lifecycle automation",
      "Quarterly business reviews with a named CSM",
    ],
    icon: "headset",
  },
  {
    id: "desktop",
    label: "Desktop Support",
    title: "Endpoint, resolved.",
    tagline: "From onboarding to retirement — every device, in every office.",
    description:
      "Onsite and remote desktop engineers keep your workforce productive. Windows, macOS, and Linux covered under one contract, one dashboard, one number to call.",
    bullets: [
      "Zero-touch provisioning with Intune, Jamf, Workspace ONE",
      "Break-fix dispatch anywhere in North America",
      "MDM, compliance, and hardening baselines",
      "Hardware depot + next-business-day replacements",
    ],
    icon: "monitor",
  },
  {
    id: "network",
    label: "Network Support",
    title: "Networks engineered to stay up.",
    tagline: "LAN, WAN, SD-WAN, wireless — built and run by network engineers.",
    description:
      "From campus switching to global SD-WAN fabrics, our network practice designs, deploys, and operates infrastructure for enterprises where seconds of downtime matter.",
    bullets: [
      "Cisco, Meraki, Fortinet, Palo Alto, Juniper certified",
      "Zero-trust segmentation and NAC rollouts",
      "Wireless surveys, heatmaps, and capacity planning",
      "24/7 incident response and change management",
    ],
    icon: "network",
  },
  {
    id: "noc",
    label: "NOC Services",
    title: "NOC that watches every packet.",
    tagline: "24/7 proactive monitoring. Resolved before anyone notices.",
    description:
      "A true Network Operations Center — not a dashboard. Engineers monitor, triage, and remediate infrastructure events around the clock from redundant, geo-diverse facilities.",
    bullets: [
      "Proactive threshold and anomaly detection",
      "Runbook-driven remediation in under 5 minutes",
      "Observability stack: Grafana, Datadog, LogicMonitor",
      "Monthly uptime and capacity reporting",
    ],
    icon: "radar",
  },
  {
    id: "soc",
    label: "SOC Services",
    title: "SOC that stops threats cold.",
    tagline: "Tier 1–3 security analysts. MDR, SIEM, and threat hunting.",
    description:
      "Our Security Operations Center delivers managed detection and response built on a MITRE ATT&CK-aligned playbook. Human eyes, AI enrichment, and a 15-minute MTTR target.",
    bullets: [
      "24/7 MDR with 15-minute mean time to respond",
      "SIEM tuning, UEBA, and threat hunting retainers",
      "Incident response and forensics on demand",
      "Compliance mapping: SOC 2, HIPAA, PCI, ISO 27001",
    ],
    icon: "shield",
  },
] as const;

export const stats = [
  { value: 99.99, suffix: "%", label: "Monitored uptime", format: "decimal" },
  { value: 247, suffix: "", label: "Engineers on duty", format: "int" },
  { value: 10, suffix: " min", label: "P1 response SLA", format: "int" },
  { value: 15, suffix: " min", label: "SOC MTTR target", format: "int" },
] as const;

export const capabilities = [
  {
    title: "Hybrid by design",
    body: "Remote-first tooling with onsite dispatch across North America. One contract, one escalation path, one experience.",
  },
  {
    title: "Certified by the best",
    body: "Cisco, Fortinet, Microsoft Gold, CrowdStrike, and AWS Advanced. Our engineers hold what the vendors build.",
  },
  {
    title: "Observable everything",
    body: "Every device, every circuit, every log. Unified telemetry flows into a single pane you and your team can audit.",
  },
  {
    title: "Compliance first",
    body: "SOC 2 Type II, ISO 27001, and HIPAA-aligned operations with continuous evidence collection baked in.",
  },
  {
    title: "Transparent pricing",
    body: "Flat-rate per-seat and per-device models. No surprise overages, no “advisory hours” you didn’t approve.",
  },
  {
    title: "Built for scale",
    body: "From 50 seats to 50,000. Our run-books, tooling, and hiring pipeline were designed around growth.",
  },
] as const;
