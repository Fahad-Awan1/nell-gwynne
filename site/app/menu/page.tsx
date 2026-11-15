import type { Metadata } from "next";
import menu from "@/content/menu.json";
import MotionRoot from "@/components/motion/MotionRoot";
import MenuGrid from "@/components/menu/MenuGrid";
import { PageHero, ClosingBand } from "@/components/page/PageParts";
import { Eyebrow, Watermark } from "@/components/ui/bits";
import Icon from "@/components/ui/Icon";
import TornEdge from "@/components/paper/TornEdge";
import PosterFeature from "@/components/page/PosterFeature";
import s from "./menu.module.css";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "The Nell Gwynne menu: Full English breakfast, Sunday roast, pies, burgers, wings, cocktails and weekly offers. Proper British pub food in Dubai Marina.",
};

export default function MenuPage() {
  return (
    <>
      <PageHero
        crumb="Menu"
        eyebrow="Our Menu"
        title={["A Closer Look", "at the Grub"]}
        sub="Hearty British plates"
        lede="From the Full English to a proper Sunday roast, wings by the stack and cocktails with a British twist. Here’s everything coming out of our kitchen and bar."
        watermark="Menu"
        images={[
          { src: "/images/brand/full-english.webp", alt: "A Full English breakfast", caption: "The Full English", w: 640, h: 427 },
          { src: "/images/menu/traditional-cod-chips.webp", alt: "Traditional cod and chips", caption: "Cod & Chips", w: 900, h: 900 },
        ]}
      />

      <section className={`section section--paper textured ${s.list}`} aria-label="Menu items">
        <TornEdge position="top" color="var(--parchment)" seed={81} />
        <MenuGrid />
      </section>

      <section className={`section section--black textured ${s.pdfs}`} aria-labelledby="pdf-title">
        <TornEdge position="top" color="var(--black)" seed={83} />
        <Watermark style={{ right: "-2%", top: "10%" }}>Print</Watermark>
        <div className="wrap">
          <div className={s.pdfHead}>
            <Eyebrow>Set &amp; Seasonal Menus</Eyebrow>
            <h2 id="pdf-title" className="display display--md" data-reveal="up">
              <span className="line">Take a Menu</span>
              <span className="sub">Download &amp; share</span>
            </h2>
          </div>
          <div className={s.pdfGrid} data-reveal="stagger">
            {menu.pdfMenus.map((p, i) => (
              <a key={p.href} href={p.href} target="_blank" rel="noopener noreferrer" className={s.pdf} style={{ rotate: `${[-1.5, 1, -0.6, 1.4][i % 4]}deg` }}>
                <span className={s.pdfNum}>{String(i + 1).padStart(2, "0")}</span>
                <span className={s.pdfTitle}>{p.label}</span>
                <span className={s.pdfMeta}>
                  PDF <Icon name="download" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery (from the in-venue screen posters) */}
      <PosterFeature
        id="delivery-title"
        eyebrow="Delivered to Your Door"
        title="Craving Nell’s?"
        sub="Pub classics at your doorstep"
        poster="/images/gallery/posters/delivery.webp"
        alt="Delivery poster: order Nell Gwynne on noon Food, talabat and Deliveroo"
        tone="paper"
        seed={113}
        watermark="Delivery"
        flip
      >
        <p className="lede" data-reveal="up" data-delay="0.1">
          Skip the wait. Great food, pub classics and the same great taste at home. Search “Nell Gwynne” on your favourite app.
        </p>
        <ul className={s.apps} data-reveal="stagger">
          <li>noon Food</li>
          <li>talabat</li>
          <li>Deliveroo</li>
        </ul>
      </PosterFeature>

      <ClosingBand title={["Hungry Yet?"]} sub="Kitchen open daily from 9am" />
      <MotionRoot />
    </>
  );
}
