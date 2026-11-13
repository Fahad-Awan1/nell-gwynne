import type { Metadata } from "next";
import { FAQ, SITE } from "@/content/site";
import MotionRoot from "@/components/motion/MotionRoot";
import ContactShell from "@/components/forms/ContactShell";
import Accordion from "@/components/faq/Accordion";
import { Visit } from "@/components/home/Sections";
import { Btn, Eyebrow } from "@/components/ui/bits";
import TornEdge from "@/components/paper/TornEdge";
import s from "./book.module.css";

export const metadata: Metadata = {
  title: "Book a Table",
  description:
    "Book a table at Nell Gwynne, Marina Byblos Hotel, Dubai Marina. Reserve online with SevenRooms, or message us on WhatsApp on +971 52 411 9313. Open daily 9am–3am.",
};

export default function BookPage() {
  return (
    <>
      <ContactShell
        crumb="Book a Table"
        eyebrow="Book a Table"
        title={["Save Me", "a Seat"]}
        sub="Big games fill up fast"
        lede="Reserve instantly online with SevenRooms, or send us your details on WhatsApp and we’ll sort the rest, from the best screen in the house to a table for the whole squad."
        mode="booking"
        formTitle="Request a table on WhatsApp"
        primary={
          <div className="btns" data-reveal="up" data-delay="0.15">
            <Btn href={SITE.booking} iconLeft="calendar">
              Book Online
            </Btn>
            <Btn href={SITE.phoneHref} variant="dark" iconLeft="phone">
              Call Us
            </Btn>
          </div>
        }
      />
      <Visit />
      <section className="section section--mahogany textured">
        <TornEdge position="top" color="var(--mahogany)" seed={113} />
        <div className={`wrap ${s.faq}`}>
          <div>
            <Eyebrow>Before You Book</Eyebrow>
            <h2 className="display display--md" data-reveal="up">
              <span className="line">Good to Know</span>
            </h2>
            <div className="btns" data-reveal="up">
              <Btn href="/faq" icon="arrow">
                All FAQs
              </Btn>
            </div>
          </div>
          <div className={s.paper} data-reveal="print" data-rot="2">
            <Accordion items={FAQ.slice(0, 5)} />
          </div>
        </div>
      </section>
      <MotionRoot />
    </>
  );
}
