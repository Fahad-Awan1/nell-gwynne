import type { Metadata } from "next";
import { FAQ } from "@/content/site";
import MotionRoot from "@/components/motion/MotionRoot";
import ContactShell from "@/components/forms/ContactShell";
import Accordion from "@/components/faq/Accordion";
import { Btn, Eyebrow } from "@/components/ui/bits";
import TornEdge from "@/components/paper/TornEdge";
import s from "../book/book.module.css";

export const metadata: Metadata = {
  title: "Support",
  description: "Get in touch with Nell Gwynne Dubai Marina: questions, group bookings, feedback and lost property. WhatsApp +971 52 411 9313.",
};

export default function SupportPage() {
  return (
    <>
      <ContactShell
        crumb="Support"
        eyebrow="Support"
        title={["We’d Love to", "Hear From You"]}
        sub="Questions, feedback, lost property"
        lede="A question, a suggestion, a group booking or simply hello: our team is always happy to hear from you."
        mode="support"
        formTitle="Send us a message"
      />
      <section className="section section--paper textured">
        <TornEdge position="top" color="var(--parchment)" seed={119} />
        <div className={`wrap ${s.faq}`}>
          <div>
            <Eyebrow>Quick Answers</Eyebrow>
            <h2 className="display display--md" data-reveal="up">
              <span className="line">Before You Ask</span>
            </h2>
            <div className="btns" data-reveal="up">
              <Btn href="/faq" variant="dark" icon="arrow">
                All FAQs
              </Btn>
            </div>
          </div>
          <Accordion items={FAQ.slice(2, 7)} defaultOpen={null} />
        </div>
      </section>
      <MotionRoot />
    </>
  );
}
