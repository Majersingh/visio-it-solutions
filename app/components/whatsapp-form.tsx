"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { site } from "@/lib/site";

const services = [
  "Managed IT Support",
  "Desktop Support",
  "Network Support",
  "NOC Services",
  "SOC Services",
  "Not sure yet",
];

export function WhatsAppForm() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState(services[0]);
  const [message, setMessage] = useState("");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const lines = [
      `Hi ${site.name} 👋`,
      "",
      `*Name:* ${name || "—"}`,
      `*Company:* ${company || "—"}`,
      `*Email:* ${email || "—"}`,
      `*Interested in:* ${service}`,
      "",
      `*Message:*`,
      message || "I'd like to learn more about your services.",
    ];
    const url = buildWhatsAppUrl(lines.join("\n"));
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <form
      onSubmit={onSubmit}
      className="glass-strong relative overflow-hidden rounded-[28px] p-6 text-left md:p-10"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[radial-gradient(closest-side,rgba(0,113,227,0.22),transparent_70%)] blur-2xl"
      />
      <div className="relative">
        <div className="mb-6 flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-[#25D366]">
            <MessageCircle size={16} strokeWidth={1.6} />
          </span>
          <div>
            <p className="text-[15px] font-medium text-white">
              Send via WhatsApp
            </p>
            <p className="text-[12.5px] text-white/50">
              Your details open in WhatsApp — no inbox roundtrip.
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Field
            label="Name"
            value={name}
            onChange={setName}
            placeholder="Jane Doe"
            required
          />
          <Field
            label="Company"
            value={company}
            onChange={setCompany}
            placeholder="Acme Corp"
          />
          <Field
            label="Work email"
            type="email"
            value={email}
            onChange={setEmail}
            placeholder="jane@acme.com"
          />
          <Select
            label="I'm interested in"
            value={service}
            onChange={setService}
            options={services}
          />
        </div>

        <div className="mt-4">
          <Label>How can we help?</Label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            placeholder="Tell us about your environment, team size, or current pain points."
            className="mt-1.5 w-full resize-none rounded-2xl border border-white/[0.1] bg-white/[0.04] px-4 py-3 text-[14.5px] text-white placeholder:text-white/35 focus:border-white/20 focus:bg-white/[0.06] focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className="btn-primary group mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full text-[15px] font-medium text-white sm:w-auto sm:px-7"
        >
          Open in WhatsApp
          <ArrowUpRight
            size={16}
            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </button>

        <p className="mt-4 text-[12px] text-white/40">
          By submitting you agree to be contacted via WhatsApp at{" "}
          {site.whatsappDisplay}.
        </p>
      </div>
    </form>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="text-[11px] font-medium uppercase tracking-[0.08em] text-white/50">
      {children}
    </label>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <Label>{label}</Label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="mt-1.5 h-12 w-full rounded-2xl border border-white/[0.1] bg-white/[0.04] px-4 text-[14.5px] text-white placeholder:text-white/35 focus:border-white/20 focus:bg-white/[0.06] focus:outline-none"
      />
    </div>
  );
}

function Select({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: readonly string[];
}) {
  return (
    <div>
      <Label>{label}</Label>
      <div className="relative mt-1.5">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="h-12 w-full appearance-none rounded-2xl border border-white/[0.1] bg-white/[0.04] px-4 pr-10 text-[14.5px] text-white focus:border-white/20 focus:bg-white/[0.06] focus:outline-none"
        >
          {options.map((o) => (
            <option key={o} value={o} className="bg-[#0a0a0a] text-white">
              {o}
            </option>
          ))}
        </select>
        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/40">
          ▾
        </span>
      </div>
    </div>
  );
}
