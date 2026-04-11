import { faqs } from "@/lib/site";
import { Reveal, Stagger } from "./reveal";

export function FaqSection() {
  return (
    <section id="faq" className="relative section-pad">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <Reveal>
            <p className="t-caption mb-5">Questions, answered</p>
            <h2 className="t-h1">
              <span className="accent-text">Everything you</span>
              <br />
              <span className="text-white/55">wanted to ask.</span>
            </h2>
            <p className="t-lead mt-6 max-w-[44ch]">
              Don&apos;t see your question? Reach out on WhatsApp and a real
              engineer will get back to you within 20 minutes.
            </p>
          </Reveal>

          <Stagger className="flex flex-col gap-3" stagger={0.06}>
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="faq-item group"
              >
                <summary>
                  <span>{faq.q}</span>
                </summary>
                <div className="faq-body">{faq.a}</div>
              </details>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
