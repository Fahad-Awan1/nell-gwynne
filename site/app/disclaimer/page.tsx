import type { Metadata } from "next";
import { SITE } from "@/content/site";
import MotionRoot from "@/components/motion/MotionRoot";
import { PageHero, PaperSheet } from "@/components/page/PageParts";

export const metadata: Metadata = { title: "Disclaimer", description: "Disclaimer for the Nell Gwynne Dubai Marina website." };

export default function DisclaimerPage() {
  return (
    <>
      <PageHero crumb="Disclaimer" eyebrow="Legal" title={["Disclaimer"]} sub="Please read" watermark="Note" />
      <PaperSheet updated="November 2026">
        <h2>General information</h2>
        <p>
          The information on this website is provided in good faith for general information about {SITE.fullName}. While we try to
          keep everything accurate and up to date, menus, prices, offers, opening hours and sports schedules can change without
          notice.
        </p>
        <h2>Menu &amp; allergens</h2>
        <p>
          Dish photos are for illustration and serving presentation may vary. Allergen information is a guide only: our kitchen
          handles gluten, dairy, eggs, nuts, seafood and other allergens, so we cannot guarantee any dish is free from traces.
          Please speak to your server about any allergies or dietary needs before ordering.
        </p>
        <h2>Sports broadcasts</h2>
        <p>
          Fixtures listed on this site depend on broadcaster schedules and rights. We will always try to show the games we list, but
          cannot guarantee a specific match, screen or sound.
        </p>
        <h2>External links</h2>
        <p>
          This website links to third-party services (SevenRooms, WhatsApp, Instagram, TikTok, Facebook, Google Maps). We are not
          responsible for their content or availability.
        </p>
        <h2>Drink responsibly</h2>
        <p>Alcohol is served to guests aged 21 and over only. Please drink responsibly and never drink and drive.</p>
      </PaperSheet>
      <MotionRoot />
    </>
  );
}
