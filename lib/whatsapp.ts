import { site } from "./site";

export function buildWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${site.whatsapp}?text=${encoded}`;
}

export function defaultInquiryMessage(): string {
  return `Hi ${site.name} 👋\n\nI'd like to talk to an engineer about your IT services.`;
}
