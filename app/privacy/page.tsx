import type { Metadata } from "next";
import { PageShell, PageHeader, Prose } from "../components/page-shell";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} collects, uses, and protects your information.`,
  alternates: { canonical: "/privacy" },
};

const lastUpdated = "April 11, 2026";

export default function PrivacyPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        description={`Last updated · ${lastUpdated}`}
      />
      <Prose>
        <p>
          {site.name} (&quot;Visio IT&quot;, &quot;we&quot;, &quot;us&quot;)
          respects your privacy. This Privacy Policy explains what information
          we collect when you visit {site.domain} or engage our services, how
          we use it, and the choices you have.
        </p>

        <h2>1. Information We Collect</h2>
        <h3>Information you give us</h3>
        <p>
          When you fill out a contact form, message us on WhatsApp, email us,
          or sign a Service Agreement, you may share your name, company,
          email, phone number, and details about your IT environment.
        </p>
        <h3>Information collected automatically</h3>
        <p>
          We log basic technical information such as IP address, browser type,
          device, pages visited, and referring URL. We use a privacy-respecting
          analytics tool to measure aggregate traffic; we do not sell this
          data.
        </p>

        <h2>2. How We Use Your Information</h2>
        <ul>
          <li>To respond to your inquiries and deliver requested services.</li>
          <li>To operate, maintain, and improve {site.domain} and our services.</li>
          <li>
            To send service-related communications (e.g. incident
            notifications, scheduled maintenance, account updates).
          </li>
          <li>To comply with legal obligations and enforce our agreements.</li>
        </ul>

        <h2>3. WhatsApp Submissions</h2>
        <p>
          Our website includes a contact form that, on submission, opens
          WhatsApp on your device with your details pre-filled. The message is
          only sent when you tap &quot;Send&quot; inside WhatsApp. Once sent,
          the message is delivered through Meta&apos;s WhatsApp infrastructure
          and is subject to{" "}
          <a
            href="https://www.whatsapp.com/legal/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp&apos;s Privacy Policy
          </a>
          .
        </p>

        <h2>4. Cookies</h2>
        <p>
          We use a minimal set of cookies and similar technologies to remember
          your preferences and measure traffic. You can disable cookies in your
          browser settings; some features of the site may not work as
          expected.
        </p>

        <h2>5. How We Share Information</h2>
        <p>
          We do not sell your personal information. We share information only
          with:
        </p>
        <ul>
          <li>
            Service providers who help us operate the site (hosting, analytics,
            email, CRM) — bound by confidentiality and data-protection
            obligations.
          </li>
          <li>
            Authorities when required by law, regulation, or valid legal
            process.
          </li>
          <li>
            A successor entity in connection with a merger, acquisition, or
            sale of assets.
          </li>
        </ul>

        <h2>6. Data Retention</h2>
        <p>
          We retain your personal information only for as long as necessary to
          provide our services, comply with legal obligations, resolve
          disputes, and enforce our agreements. Inquiry submissions are
          typically retained for up to 24 months.
        </p>

        <h2>7. Your Rights</h2>
        <p>
          Depending on your jurisdiction, you may have the right to access,
          correct, delete, or port your personal information, and to object to
          or restrict certain processing. To exercise these rights, contact{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>

        <h2>8. Security</h2>
        <p>
          Visio IT operates as a SOC 2 Type II audited organisation aligned
          to ISO 27001. We apply administrative, technical, and physical
          safeguards designed to protect your information. No method of
          transmission or storage is 100% secure, and we cannot guarantee
          absolute security.
        </p>

        <h2>9. Children&apos;s Privacy</h2>
        <p>
          Our services are intended for businesses, not children. We do not
          knowingly collect personal information from anyone under 16.
        </p>

        <h2>10. International Transfers</h2>
        <p>
          We may process and store information in countries other than the one
          in which you reside. Where required by law, we use appropriate
          safeguards (e.g. Standard Contractual Clauses) for such transfers.
        </p>

        <h2>11. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Material changes
          will be reflected by an updated &quot;Last updated&quot; date at the
          top of this page.
        </p>

        <h2>12. Contact</h2>
        <p>
          Questions about this Privacy Policy? Reach out at{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a> or {site.phone}.
        </p>
      </Prose>
    </PageShell>
  );
}
