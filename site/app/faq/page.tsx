import type { Metadata } from "next";
import { FAQ } from "@/content/site";
import MotionRoot from "@/components/motion/MotionRoot";
import Accordion from "@/components/faq/Accordion";
import { PageHero, ClosingBand } from "@/components/page/PageParts";
import { Btn, Note } from "@/components/ui/bits";
import TornEdge from "@/components/paper/TornEdge";
import s from "../book/book.module.css";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers to common questions about Nell Gwynne Dubai Marina: bookings, opening hours, sports, location, entrance, group parties and dietary needs.",
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function FaqPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <PageHero
        crumb="FAQ"
        eyebrow="FAQ"
        title={["Questions?", "We’ve Got Answers"]}
        sub="Everything before your first pint"
        lede="Bookings, big matches, the temporary entrance and everything in between. Can’t find it here? Message us on WhatsApp and a real human will reply."
        watermark="Ask"
      />
      <section className="section section--paper textured">
        <TornEdge position="top" color="var(--parchment)" seed={117} />
        <div className={`wrap ${s.faq}`}>
          <div style={{ position: "relative" }}>
            <p className="lede" data-reveal="up">
              Still stuck? Our team is around from 9am to 3am every day.
            </p>
            <div className="btns" data-reveal="up" data-delay="0.1">
              <Btn href="/support" variant="dark" icon="arrow">
                Contact Support
              </Btn>
            </div>
            <Note style={{ left: 20, top: 220 }}>Most asked first</Note>
          </div>
          <Accordion items={FAQ} />
        </div>
      </section>
      <ClosingBand />
      <MotionRoot />
    </>
  );
}
