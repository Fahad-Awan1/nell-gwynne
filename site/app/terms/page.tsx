import type { Metadata } from "next";
import { SITE } from "@/content/site";
import MotionRoot from "@/components/motion/MotionRoot";
import { PageHero, PaperSheet } from "@/components/page/PageParts";

export const metadata: Metadata = { title: "Terms & Conditions", description: "Terms and conditions for using the Nell Gwynne website, bookings, offers and events." };

export default function TermsPage() {
  return (
    <>
      <PageHero crumb="Terms & Conditions" eyebrow="Legal" title={["Terms &", "Conditions"]} sub="The small print" watermark="Terms" />
      <PaperSheet updated="November 2026">
        <h2>Using this website</h2>
        <p>
          By using this website you agree to these terms. The site is provided by {SITE.fullName} for information about our venue,
          menu, offers and events.
        </p>
        <h2>Bookings</h2>
        <ul>
          <li>Online bookings are made through SevenRooms and are subject to availability and SevenRooms’ terms.</li>
          <li>Tables for major sporting events may be held for a limited time after the booked arrival time.</li>
          <li>Please let us know as early as possible if you need to cancel or change a booking.</li>
          <li>Group, festive and package bookings may require pre-payment or a deposit, which we will confirm in advance.</li>
        </ul>
        <h2>Offers &amp; events</h2>
        <ul>
          <li>Offers, prices and timings are subject to change and may not be combined with other promotions.</li>
          <li>“Buy one, get one” offers apply to the same item, dine-in only, unless stated otherwise.</li>
          <li>Sports schedules depend on broadcasters and may change at short notice.</li>
          <li>All prices are in UAE Dirhams (AED) and include applicable taxes unless stated otherwise.</li>
        </ul>
        <h2>Responsible service</h2>
        <p>
          Alcohol is served only to guests of legal drinking age (21+) in accordance with UAE law. Valid photo ID may be requested.
          We reserve the right to refuse service.
        </p>
        <h2>Content</h2>
        <p>
          All text, images and branding on this site belong to Nell Gwynne or are used with permission. Please don’t copy them
          without our written consent.
        </p>
        <h2>Contact</h2>
        <p>
          Questions about these terms? Call <a href={SITE.phoneHref}>{SITE.phone}</a>.
        </p>
      </PaperSheet>
      <MotionRoot />
    </>
  );
}
