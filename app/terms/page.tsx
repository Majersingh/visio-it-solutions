import type { Metadata } from "next";
import { PageShell, PageHeader, Prose } from "../components/page-shell";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `The terms and conditions that govern your use of ${site.name} services and ${site.domain}.`,
  alternates: { canonical: "/terms" },
};

const lastUpdated = "April 11, 2026";

export default function TermsPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Legal"
        title="Terms & Conditions"
        description={`Last updated · ${lastUpdated}`}
      />
      <Prose>
        <p>
          These Terms &amp; Conditions (&quot;Terms&quot;) govern your access to
          and use of the website at {site.domain} and the services provided by
          {" "}{site.name} (&quot;Visio IT&quot;, &quot;we&quot;, &quot;us&quot;, or
          &quot;our&quot;). By accessing the site or engaging our services you
          agree to be bound by these Terms.
        </p>

        <h2>1. Services</h2>
        <p>
          Visio IT provides managed IT support, desktop support, network
          support, NOC (Network Operations Center), and SOC (Security
          Operations Center) services. The exact scope of services delivered to
          you is defined in your individual Service Agreement, Statement of
          Work, or order form. In case of any conflict, the terms of your
          Service Agreement prevail over these general Terms.
        </p>

        <h2>2. Eligibility</h2>
        <p>
          You must be at least 18 years old and legally able to enter into a
          binding contract to use our services. By engaging us, you represent
          that any information you provide is accurate and that you are
          authorised to act on behalf of your organisation.
        </p>

        <h2>3. Acceptable Use</h2>
        <p>
          You agree not to use the site or our services to:
        </p>
        <ul>
          <li>Violate any applicable law, regulation, or third-party right.</li>
          <li>Infringe intellectual property, trademarks, or trade secrets.</li>
          <li>
            Distribute malware, conduct unauthorised security testing, or
            interfere with the operation of the services.
          </li>
          <li>
            Attempt to gain unauthorised access to systems, accounts, or data
            you do not own or have permission to access.
          </li>
        </ul>

        <h2>4. Service Levels &amp; Availability</h2>
        <p>
          Service Level Agreements (SLAs), uptime targets, and response time
          commitments are defined in your individual Service Agreement.
          Visio IT does not guarantee that the public website at {site.domain}{" "}
          will be uninterrupted or error-free.
        </p>

        <h2>5. Fees &amp; Payment</h2>
        <p>
          Fees, billing cycles, and payment terms are set out in your Service
          Agreement. Unless otherwise stated, invoices are due net 30 from the
          invoice date. Late payments may accrue interest at the lesser of
          1.5% per month or the maximum rate permitted by law.
        </p>

        <h2>6. Confidentiality</h2>
        <p>
          Each party agrees to protect the other&apos;s confidential information
          using the same degree of care it uses to protect its own confidential
          information of similar importance — and never less than reasonable
          care. Confidentiality obligations survive termination of any
          agreement between us.
        </p>

        <h2>7. Intellectual Property</h2>
        <p>
          All content on {site.domain} — including text, graphics, logos, and
          software — is the property of Visio IT or its licensors and is
          protected by intellectual property laws. You may not reproduce,
          distribute, or create derivative works without our prior written
          consent. Custom deliverables produced under a Service Agreement are
          governed by that agreement.
        </p>

        <h2>8. Warranties &amp; Disclaimers</h2>
        <p>
          The site is provided on an &quot;as is&quot; and &quot;as available&quot;
          basis. To the maximum extent permitted by law, Visio IT disclaims
          all warranties, express or implied, including warranties of
          merchantability, fitness for a particular purpose, and non-infringement.
        </p>

        <h2>9. Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by law, Visio IT&apos;s total
          aggregate liability arising out of or relating to these Terms or your
          use of the site shall not exceed the greater of (a) the fees paid to
          Visio IT in the twelve months preceding the claim, or (b) USD $100.
          In no event will Visio IT be liable for any indirect, incidental,
          consequential, special, or punitive damages.
        </p>

        <h2>10. Indemnification</h2>
        <p>
          You agree to indemnify and hold harmless Visio IT and its officers,
          directors, employees, and agents from and against any claims,
          liabilities, damages, losses, and expenses arising out of your use of
          the site or violation of these Terms.
        </p>

        <h2>11. Termination</h2>
        <p>
          Visio IT may suspend or terminate your access to the site at any
          time, with or without cause or notice. Termination of any Service
          Agreement is governed by that agreement.
        </p>

        <h2>12. Governing Law</h2>
        <p>
          These Terms are governed by and construed in accordance with the laws
          of the jurisdiction in which Visio IT is incorporated, without
          regard to its conflict of laws principles. Any disputes shall be
          resolved exclusively in the courts of that jurisdiction.
        </p>

        <h2>13. Changes to These Terms</h2>
        <p>
          We may update these Terms from time to time. Material changes will
          be reflected by an updated &quot;Last updated&quot; date at the top
          of this page. Your continued use of the site after such changes
          constitutes your acceptance of the revised Terms.
        </p>

        <h2>14. Contact</h2>
        <p>
          Questions about these Terms? Reach out at{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a> or {site.phone}.
        </p>
      </Prose>
    </PageShell>
  );
}
