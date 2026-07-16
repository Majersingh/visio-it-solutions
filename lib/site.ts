export const site = {
  name: "Visio IT Solutions",
  shortName: "Visio IT",
  domain: "visioitsolutions.com",
  url: "https://visioitsolutions.com",
  phone: "+91 95375 94397",
  whatsapp: "919537594397", // digits only — used for wa.me links
  whatsappDisplay: "+91 95375 94397",
  email: "support@visioitsolutions.com",
  address: "A/102 Dove Deck - NRS Projects, Opp. Pioneer Medical College, Near American School of Baroda, Ajwa Rd, Vadodara, Gujarat 390019",
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
  { label: "IT Services", href: "/#services" },
  { label: "Software Solutions", href: "/software-solutions" },
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

export type SoftwareSolution = {
  slug: string;
  name: string;
  title: string;
  tagline: string;
  /** Short one-liner used on cards and meta descriptions. */
  summary: string;
  /** Longer intro paragraphs for the dedicated page. */
  overview: readonly string[];
  /** Quick capability bullets shown on cards. */
  highlights: readonly string[];
  /** Detailed feature blocks for the dedicated page. */
  features: readonly { title: string; body: string }[];
  /** Who the product is built for. */
  audience: readonly string[];
  icon:
    | "school"
    | "erp"
    | "visitor"
    | "hrms"
    | "code"
    | "cart"
    | "workflow";
  image: { src: string; alt: string };
  keywords: readonly string[];
};

export const softwareSolutions: readonly SoftwareSolution[] = [
  {
    slug: "school-management-system",
    name: "School Management System",
    title: "Run the whole school from one system.",
    tagline: "Admissions to report cards — every workflow, one platform.",
    summary:
      "A cloud school management system that unifies admissions, attendance, fees, exams, timetables, and parent communication in one place.",
    overview: [
      "Our School Management System (SMS) replaces the tangle of spreadsheets, registers, and disconnected apps that most institutions run on. Administrators, teachers, students, and parents each get a role-based portal, so everyone sees exactly what they need — and nothing they don't.",
      "Built for schools, colleges, and coaching institutes, the platform scales from a single campus to multi-branch groups. It runs in the cloud with automated backups, so there is nothing to install and nothing to lose.",
    ],
    highlights: [
      "Online admissions & student information system",
      "Biometric / RFID attendance with parent alerts",
      "Automated fee collection, invoicing & receipts",
      "Exam, grading & report-card automation",
    ],
    features: [
      {
        title: "Admissions & enrolment",
        body: "Online application forms, document collection, merit lists, and one-click enrolment that flows straight into the student record.",
      },
      {
        title: "Attendance & timetable",
        body: "Biometric, RFID, or app-based attendance with instant SMS/WhatsApp alerts to parents, plus a clash-free timetable builder.",
      },
      {
        title: "Fees & finance",
        body: "Configurable fee heads, online payment gateways, auto-reminders, receipts, and real-time collection dashboards for accounts.",
      },
      {
        title: "Exams & report cards",
        body: "Grade books, CBSE/ICSE/state-board templates, weighted assessments, and printable report cards generated in seconds.",
      },
      {
        title: "Parent & teacher portals",
        body: "Mobile apps and web portals for homework, circulars, results, and two-way messaging that keeps parents in the loop.",
      },
      {
        title: "Transport & library",
        body: "GPS bus tracking, route management, and a full library issue-return catalogue baked into the same system.",
      },
    ],
    audience: [
      "K-12 schools & CBSE/ICSE institutions",
      "Colleges & universities",
      "Coaching & tuition centres",
      "Multi-branch education groups",
    ],
    icon: "school",
    image: {
      src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&q=80&auto=format&fit=crop",
      alt: "Students collaborating in a modern classroom",
    },
    keywords: [
      "school management system",
      "school management software",
      "student information system",
      "school ERP",
      "online school administration software",
    ],
  },
  {
    slug: "erp",
    name: "ERP Software",
    title: "One ERP for the whole business.",
    tagline: "Finance, inventory, sales, and operations — finally in sync.",
    summary:
      "Custom ERP software that connects finance, inventory, sales, procurement, and manufacturing into a single real-time source of truth.",
    overview: [
      "Our ERP (Enterprise Resource Planning) platform ties every department to one database, so a sale updates inventory, accounting, and dispatch the moment it happens. No re-keying, no reconciliation nightmares, no month-end surprises.",
      "We tailor modules to how your business actually runs — whether that's manufacturing, distribution, retail, or services — and deploy on the cloud or on-premise with role-based access and audit trails throughout.",
    ],
    highlights: [
      "Real-time finance & accounting ledger",
      "Inventory, procurement & warehouse control",
      "Sales, CRM & order-to-cash workflows",
      "Production planning & GST-ready reporting",
    ],
    features: [
      {
        title: "Finance & accounting",
        body: "General ledger, payables, receivables, bank reconciliation, and GST/tax-compliant invoicing with real-time P&L and balance sheets.",
      },
      {
        title: "Inventory & warehouse",
        body: "Multi-warehouse stock, batch and serial tracking, reorder points, and barcode-driven goods-in/goods-out control.",
      },
      {
        title: "Sales & CRM",
        body: "Quotations, sales orders, dispatch, and a built-in CRM so pipeline, orders, and revenue all live in one place.",
      },
      {
        title: "Procurement",
        body: "Purchase requisitions, vendor management, PO approvals, and three-way matching that stops over-payment before it happens.",
      },
      {
        title: "Manufacturing",
        body: "Bill of materials, work orders, production planning, and shop-floor tracking with accurate costing per unit.",
      },
      {
        title: "Dashboards & analytics",
        body: "Role-based dashboards and drill-down reports that turn transactional data into decisions leadership can act on.",
      },
    ],
    audience: [
      "Manufacturers & distributors",
      "Wholesale & retail chains",
      "Trading & import-export firms",
      "Growing SMEs outgrowing spreadsheets",
    ],
    icon: "erp",
    image: {
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80&auto=format&fit=crop",
      alt: "Business analytics dashboard with charts and metrics",
    },
    keywords: [
      "ERP software",
      "enterprise resource planning",
      "custom ERP development",
      "ERP for manufacturing",
      "cloud ERP solution",
    ],
  },
  {
    slug: "visitor-management-system",
    name: "Visitor Management System",
    title: "Every visitor, logged and secured.",
    tagline: "Paperless check-in, instant host alerts, full audit trail.",
    summary:
      "A digital visitor management system with self-service check-in, ID capture, host notifications, and a complete visitor audit trail.",
    overview: [
      "Replace the paper visitor register with a fast, contactless check-in kiosk. Visitors sign in on a tablet, capture a photo and ID, accept your policies, and print a badge — while the host is notified instantly by SMS, email, or WhatsApp.",
      "Every entry and exit is time-stamped and searchable, giving security and facilities teams a complete, exportable audit trail for compliance and emergency roll-calls.",
    ],
    highlights: [
      "Contactless self-service kiosk check-in",
      "Photo & ID capture with badge printing",
      "Instant host notifications",
      "Pre-registration & QR-code fast entry",
    ],
    features: [
      {
        title: "Self-service kiosk",
        body: "Tablet or kiosk check-in with your branding, custom fields, and multi-language support for a professional first impression.",
      },
      {
        title: "Host notifications",
        body: "The moment a visitor arrives, their host gets an instant alert via SMS, email, or WhatsApp with the visitor's photo and purpose.",
      },
      {
        title: "Pre-registration & QR",
        body: "Invite guests in advance; they arrive with a QR code that clears them in seconds — ideal for interviews and scheduled meetings.",
      },
      {
        title: "Badges & ID capture",
        body: "Capture a live photo and scan government ID, then auto-print a time-bound visitor badge for clear on-site identification.",
      },
      {
        title: "Watchlist & compliance",
        body: "Screen against blocklists, capture NDAs and safety declarations on sign-in, and stay audit-ready by design.",
      },
      {
        title: "Reports & evacuation",
        body: "Real-time on-site headcount, exportable logs, and a one-tap evacuation list for emergency roll-calls.",
      },
    ],
    audience: [
      "Corporate offices & IT parks",
      "Factories & warehouses",
      "Schools, hospitals & clinics",
      "Gated communities & co-working spaces",
    ],
    icon: "visitor",
    image: {
      src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=80&auto=format&fit=crop",
      alt: "Modern office reception and check-in area",
    },
    keywords: [
      "visitor management system",
      "visitor management software",
      "digital visitor check-in",
      "reception management system",
      "gate pass system",
    ],
  },
  {
    slug: "hrms",
    name: "HRMS & Payroll",
    title: "HR and payroll on autopilot.",
    tagline: "Hire, manage, pay — the whole employee lifecycle in one app.",
    summary:
      "A complete HRMS covering attendance, leave, payroll, performance, and self-service across the full employee lifecycle.",
    overview: [
      "Our HRMS (Human Resource Management System) automates the paperwork that eats up HR teams — from onboarding a new hire to running error-free payroll on the last day of the month. Employees get a self-service portal for leave, payslips, and documents, so HR stops being a helpdesk.",
      "Attendance, leave, and payroll are tightly integrated, so approved leave and clocked hours flow straight into salary calculation with statutory PF, ESI, TDS, and professional-tax handled automatically.",
    ],
    highlights: [
      "Attendance & leave management",
      "Automated payroll with PF/ESI/TDS",
      "Employee self-service portal & app",
      "Performance reviews & onboarding",
    ],
    features: [
      {
        title: "Core HR & onboarding",
        body: "A single employee database with digital onboarding, document management, and configurable org structure and policies.",
      },
      {
        title: "Attendance & leave",
        body: "Biometric, geo-fenced, and app-based attendance with shift management and a rules-driven leave workflow.",
      },
      {
        title: "Payroll & compliance",
        body: "One-click payroll with automatic PF, ESI, TDS, and professional tax, plus payslips and statutory reports ready to file.",
      },
      {
        title: "Employee self-service",
        body: "Staff apply for leave, download payslips, update details, and raise requests from a mobile-friendly self-service portal.",
      },
      {
        title: "Performance & appraisals",
        body: "Goals, KPIs, 360° reviews, and appraisal cycles that give managers a clear, fair basis for decisions.",
      },
      {
        title: "Expenses & assets",
        body: "Reimbursement claims with approvals and asset allocation tracking, all tied back to the employee record.",
      },
    ],
    audience: [
      "Startups & scaling SMEs",
      "IT & services companies",
      "Manufacturing & field workforces",
      "Any team tired of manual payroll",
    ],
    icon: "hrms",
    image: {
      src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80&auto=format&fit=crop",
      alt: "HR team collaborating in a bright office",
    },
    keywords: [
      "HRMS software",
      "HR management system",
      "payroll software",
      "attendance and leave management",
      "employee self-service portal",
    ],
  },
  {
    slug: "custom-software-development",
    name: "Custom Software Development",
    title: "Software built around your business.",
    tagline: "Web, mobile, and cloud apps engineered to fit — not force-fit.",
    summary:
      "Bespoke web, mobile, and cloud application development — from discovery and UX to build, launch, and ongoing support.",
    overview: [
      "When off-the-shelf software can't model how you actually work, we build it for you. From internal tools and customer portals to full SaaS products, our engineers design, build, and ship applications tailored to your exact workflows.",
      "We work in tight, transparent sprints with modern stacks — React, Next.js, Node, and cloud-native infrastructure — so you see working software early and own clean, documented code at the end.",
    ],
    highlights: [
      "Web & mobile app development",
      "SaaS product & MVP engineering",
      "API integration & legacy modernisation",
      "UI/UX design and prototyping",
    ],
    features: [
      {
        title: "Discovery & UX",
        body: "We start with your problem, not a feature list — mapping workflows, wireframing, and prototyping before a line of code is written.",
      },
      {
        title: "Web applications",
        body: "Fast, scalable web apps and dashboards built with React, Next.js, and modern back-ends, deployed on resilient cloud infrastructure.",
      },
      {
        title: "Mobile apps",
        body: "Native-quality iOS and Android apps from a single codebase, with offline support and store submission handled for you.",
      },
      {
        title: "APIs & integrations",
        body: "We connect your tools — payment gateways, ERPs, CRMs, and third-party APIs — into one coherent system.",
      },
      {
        title: "Cloud & DevOps",
        body: "CI/CD pipelines, containerised deployments, and observability so your software ships safely and stays up.",
      },
      {
        title: "Support & scale",
        body: "Post-launch maintenance, feature iteration, and performance tuning under a clear SLA as your product grows.",
      },
    ],
    audience: [
      "Startups building an MVP or SaaS",
      "Enterprises modernising legacy apps",
      "Teams needing bespoke internal tools",
      "Businesses integrating disparate systems",
    ],
    icon: "code",
    image: {
      src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80&auto=format&fit=crop",
      alt: "Software development team working together",
    },
    keywords: [
      "custom software development",
      "bespoke software development company",
      "web application development",
      "mobile app development",
      "SaaS product development",
    ],
  },
  {
    slug: "ecommerce",
    name: "Ecommerce Solutions",
    title: "Storefronts that sell around the clock.",
    tagline: "High-converting online stores, built to scale and integrate.",
    summary:
      "End-to-end ecommerce development — online stores, marketplaces, payments, and inventory built for conversion and scale.",
    overview: [
      "We design and build online stores that load fast, look premium, and convert visitors into customers. Whether you need a Shopify build, a headless commerce experience, or a fully custom marketplace, we handle catalogue, checkout, payments, and shipping end to end.",
      "Every store is integrated with your inventory, accounting, and marketing stack, so orders flow automatically and you spend time growing — not copying data between systems.",
    ],
    highlights: [
      "Custom & headless storefronts",
      "Secure multi-gateway checkout",
      "Inventory, orders & shipping sync",
      "SEO, speed & conversion optimisation",
    ],
    features: [
      {
        title: "Storefront design",
        body: "Conversion-focused, mobile-first storefronts with premium UX — custom-built or on Shopify, WooCommerce, or a headless stack.",
      },
      {
        title: "Payments & checkout",
        body: "Frictionless, secure checkout with multiple gateways, UPI, wallets, cards, and one-click and guest checkout options.",
      },
      {
        title: "Catalogue & inventory",
        body: "Rich product catalogues, variants, and real-time stock sync with your ERP or POS so you never oversell.",
      },
      {
        title: "Marketplaces",
        body: "Multi-vendor marketplace platforms with seller onboarding, commissions, and payouts handled end to end.",
      },
      {
        title: "Marketing & SEO",
        body: "Technical SEO, structured data, coupons, abandoned-cart recovery, and analytics wired in from day one.",
      },
      {
        title: "Fulfilment & shipping",
        body: "Courier integrations, real-time rates, order tracking, and returns management that keep customers informed.",
      },
    ],
    audience: [
      "Retail & D2C brands",
      "Wholesalers going online",
      "Multi-vendor marketplaces",
      "Businesses replatforming for scale",
    ],
    icon: "cart",
    image: {
      src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80&auto=format&fit=crop",
      alt: "Online shopping and ecommerce checkout on a laptop",
    },
    keywords: [
      "ecommerce development",
      "ecommerce website development",
      "online store development",
      "Shopify development",
      "marketplace development",
    ],
  },
  {
    slug: "workflow-automation",
    name: "Workflow Automation",
    title: "Automate the busywork away.",
    tagline: "Turn manual, repetitive processes into reliable workflows.",
    summary:
      "Business process and workflow automation that connects your apps, eliminates manual data entry, and enforces approvals.",
    overview: [
      "Every business runs on repetitive tasks — copying data between apps, chasing approvals, sending the same emails. We identify those bottlenecks and automate them, so your team spends time on work that actually needs a human.",
      "From no-code workflow builders to fully custom automation and integrations, we connect the tools you already use and layer on approvals, notifications, and audit trails — reducing errors and freeing up hours every week.",
    ],
    highlights: [
      "App-to-app integration & data sync",
      "Approval & document workflows",
      "Automated notifications & reminders",
      "Custom triggers, rules & dashboards",
    ],
    features: [
      {
        title: "Process mapping",
        body: "We map your current process, find the friction, and design an automation that removes manual steps without breaking what works.",
      },
      {
        title: "App integrations",
        body: "Connect CRMs, ERPs, spreadsheets, email, and hundreds of SaaS tools so data flows automatically between systems.",
      },
      {
        title: "Approval workflows",
        body: "Multi-stage approvals for purchases, leave, expenses, and documents — with escalation, reminders, and a full audit trail.",
      },
      {
        title: "Document automation",
        body: "Auto-generate quotes, invoices, contracts, and reports from your data, then route them for e-signature.",
      },
      {
        title: "Notifications & alerts",
        body: "Trigger SMS, email, and WhatsApp alerts on the events that matter, so nothing falls through the cracks.",
      },
      {
        title: "RPA & scheduled jobs",
        body: "Bots and scheduled tasks that handle recurring work — reconciliations, exports, and reporting — around the clock.",
      },
    ],
    audience: [
      "Ops & finance teams drowning in manual work",
      "Companies stitching together many SaaS tools",
      "Businesses standardising approvals",
      "Teams scaling without adding headcount",
    ],
    icon: "workflow",
    image: {
      src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80&auto=format&fit=crop",
      alt: "Team reviewing an automated business process on screen",
    },
    keywords: [
      "workflow automation",
      "business process automation",
      "process automation software",
      "approval workflow software",
      "RPA solutions",
    ],
  },
] as const;

export function getSoftwareSolution(slug: string) {
  return softwareSolutions.find((s) => s.slug === slug);
}
