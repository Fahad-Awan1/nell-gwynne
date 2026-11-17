import type { Metadata } from "next";
import MotionRoot from "@/components/motion/MotionRoot";
import { PageHero, ClosingBand } from "@/components/page/PageParts";
import GalleryView from "@/components/gallery/GalleryView";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Reels, photos and posters from Nell Gwynne in Dubai Marina: match nights, live bands, quiz nights, roasts and every offer on our screens.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        crumb="Gallery"
        eyebrow="The Pub Wall"
        title={["Life at", "Nell’s"]}
        sub="Reels, photos & posters"
        lede="Match nights, live bands, quiz winners and Sunday roasts. Everything from our screens, pinned up in one place."
        watermark="Gallery"
        images={[
          { src: "/images/brand/pool-and-food.webp", alt: "Pub food by the pool table at Nell Gwynne", caption: "Pool & plates", w: 600, h: 400 },
          { src: "/images/brand/pint-and-burger.webp", alt: "A pint and a burger raised in cheers", caption: "Cheers!", w: 519, h: 519 },
        ]}
      />
      <GalleryView />
      <ClosingBand tone="black" title={["See You at the Bar"]} sub="Your table is waiting" />
      <MotionRoot />
    </>
  );
}
