import type { Metadata } from "next";
import { SITE } from "@/content/site";
import MotionRoot from "@/components/motion/MotionRoot";
import { PageHero, PaperSheet } from "@/components/page/PageParts";

export const metadata: Metadata = { title: "Privacy Policy", description: "How Nell Gwynne Dubai Marina collects, uses and protects your information." };

export default function PrivacyPage() {
  return (
    <>
      <PageHero crumb="Privacy Policy" eyebrow="Legal" title={["Privacy Policy"]} sub="Your data, handled properly" watermark="Privacy" />
      <PaperSheet updated="November 2026">
        <h2>Who we are</h2>
        <p>
          This website is operated by {SITE.fullName}, {SITE.address.line1}, {SITE.address.line2}, {SITE.address.city} (“Nell
          Gwynne”, “we”, “us”). This policy explains what information we collect when you use this website, and how we use it.
        </p>
        <h2>What we collect</h2>
        <ul>
          <li>
            <strong>Booking and enquiry details</strong>: when you book through Play At Your Table or message us on WhatsApp, those services
            process your name, contact details and booking information under their own privacy policies.
          </li>
          <li>
            <strong>Website forms</strong>: our enquiry forms do not store anything on this website. They open WhatsApp with your
            message pre-filled, and you choose whether to send it.
          </li>
          <li>
            <strong>Usage data</strong>: we may use analytics (such as Google Tag Manager / Google Analytics) to understand how the
            site is used. This can include your device type, pages viewed and approximate location.
          </li>
        </ul>
        <h2>How we use it</h2>
        <ul>
          <li>To manage table bookings, group enquiries and event reservations.</li>
          <li>To reply to your questions and feedback.</li>
          <li>To improve our website, menu and offers.</li>
        </ul>
        <p>We never sell your personal information.</p>
        <h2>Cookies</h2>
        <p>
          We use essential cookies to make the site work and, where enabled, analytics cookies to measure traffic. Embedded content
          (Google Maps, Instagram, Play At Your Table) may set its own cookies. You can block or delete cookies in your browser settings.
        </p>
        <h2>Third-party services</h2>
        <p>
          Links to Play At Your Table, WhatsApp, Instagram, TikTok, Facebook and Google Maps take you to services with their own privacy
          policies. Please review them before sharing information.
        </p>
        <h2>Your rights</h2>
        <p>
          You can ask us what information we hold about you, ask us to correct it, or ask us to delete it. Contact us on{" "}
          <a href={SITE.phoneHref}>{SITE.phone}</a> or via <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp</a>.
        </p>
        <h2>Changes</h2>
        <p>We may update this policy from time to time. The date at the top shows when it last changed.</p>
      </PaperSheet>
      <MotionRoot />
    </>
  );
}
