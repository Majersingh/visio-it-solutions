import { buildWhatsAppUrl, defaultInquiryMessage } from "@/lib/whatsapp";

export function WhatsAppFab() {
  const href = buildWhatsAppUrl(defaultInquiryMessage());
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_rgba(37,211,102,0.45),inset_0_1px_0_rgba(255,255,255,0.35)] transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(37,211,102,0.55)] md:bottom-7 md:right-7 md:h-15 md:w-15"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/35" />
      <svg
        viewBox="0 0 32 32"
        className="h-7 w-7"
        fill="currentColor"
        aria-hidden
      >
        <path d="M19.11 17.21c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.96 1.18-.18.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.89-.79-1.49-1.77-1.67-2.07-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.68-1.65-.93-2.26-.25-.6-.5-.52-.68-.53l-.58-.01c-.2 0-.52.08-.8.38-.27.3-1.05 1.02-1.05 2.5s1.07 2.9 1.22 3.1c.15.2 2.1 3.21 5.1 4.5.71.3 1.27.49 1.7.62.71.23 1.36.2 1.87.12.57-.08 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.07-.13-.27-.2-.57-.35Z" />
        <path d="M27.32 4.68A15.92 15.92 0 0 0 16.04 0C7.27 0 .14 7.13.14 15.9c0 2.81.74 5.55 2.13 7.96L0 32l8.34-2.18a15.94 15.94 0 0 0 7.7 1.96h.01c8.77 0 15.9-7.13 15.9-15.9 0-4.25-1.65-8.24-4.63-11.2ZM16.04 29.1h-.01a13.2 13.2 0 0 1-6.74-1.85l-.48-.29-4.95 1.3 1.32-4.83-.31-.5a13.2 13.2 0 0 1-2.03-7.04c0-7.3 5.94-13.24 13.25-13.24 3.54 0 6.86 1.38 9.36 3.88a13.16 13.16 0 0 1 3.88 9.37c0 7.3-5.94 13.24-13.25 13.24Z" />
      </svg>
    </a>
  );
}
