import type { Metadata } from "next";
import Image from "next/image";
import { EVENTS, GENTLE_POUR, OFFERS, SITE } from "@/content/site";
import MotionRoot from "@/components/motion/MotionRoot";
import WeekPlanner from "@/components/offers/WeekPlanner";
import { PageHero, ClosingBand } from "@/components/page/PageParts";
import { Btn, Eyebrow, Rule, Watermark, Note } from "@/components/ui/bits";
import Icon from "@/components/ui/Icon";
import TornEdge from "@/components/paper/TornEdge";
import s from "./offers.module.css";

export const metadata: Metadata = {
  title: "Special Offers",
  description:
    "Weekly offers at Nell Gwynne Dubai Marina: daily Happy Hour 12–8pm, Taco Monday, Wings Tuesday, Ladies Night, Quiz Night, Sunday roast and festive packages.",
};

export default function OffersPage() {
  return (
    <>
      <PageHero
        crumb="Special Offers"
        eyebrow="Special Offers"
        title={["Deals All Week,", "Not Just Weekends"]}
        sub="Happy Hour daily · 12pm – 8pm"
        lede="Wings Night, Taco Monday, Ladies Night, Quiz Night, Sunday roasts and bucket specials. Great drinks, great value, no catch, just good times."
        watermark="Offers"
        images={[
          { src: "/images/site/offer-happy-hour.webp", alt: "Happy Hour at Nell Gwynne", caption: "Happy Hour · daily" },
          { src: "/images/site/offer-wings-night.webp", alt: "Wings Night poster", caption: "Wings Night" },
        ]}
      >
        <div className="btns" data-reveal="up" data-delay="0.25">
          <Btn href="#week" icon="arrow">
            This Week
          </Btn>
          <Btn href={SITE.booking} variant="dark" iconLeft="calendar">
            Book a Table
          </Btn>
        </div>
      </PageHero>

      {/* Week planner */}
      <section id="week" className={`section section--paper textured ${s.week}`} aria-labelledby="week-title">
        <TornEdge position="top" color="var(--parchment)" seed={101} />
        <Watermark style={{ right: "-2%", top: "4%" }}>Week</Watermark>
        <div className={`wrap ${s.weekGrid}`}>
          <div>
            <Eyebrow>What’s On</Eyebrow>
            <h2 id="week-title" className="display display--md" data-reveal="up">
              <span className="line">Your Week</span>
              <span className="line">at Nell’s</span>
            </h2>
            <Rule />
            <p className="lede" data-reveal="up" data-delay="0.1">
              Every day has its thing. Pick a day to see the deals, then grab a table before your mates do.
            </p>
            <Note className={s.weekNote}>Tap a day</Note>
          </div>
          <WeekPlanner />
        </div>
      </section>

      {/* Offer features */}
      <section className="section section--black textured" aria-labelledby="deals-title">
        <TornEdge position="top" color="var(--black)" seed={103} />
        <div className="wrap">
          <div className={s.center}>
            <Eyebrow>The Regulars</Eyebrow>
            <h2 id="deals-title" className="display display--md" data-reveal="up">
              <span className="line">Six Reasons</span>
              <span className="sub">to come back on a weeknight</span>
            </h2>
          </div>
          <div className={s.deals}>
            {OFFERS.map((o, i) => (
              <article key={o.slug} id={o.slug} className={`${s.deal} ${i % 2 ? s.flip : ""}`}>
                <figure className={`print ${s.dealImg}`} data-reveal="print" data-rot={i % 2 ? "7" : "-7"} style={{ rotate: i % 2 ? "2.5deg" : "-2.5deg" }}>
                  <Image src={o.image} alt={`${o.title} poster`} width={800} height={800} sizes="(max-width: 980px) 90vw, 460px" />
                  <figcaption className="print__cap">{o.when ?? o.title}</figcaption>
                </figure>
                <div className={s.dealText}>
                  <span className={s.dealNum} data-reveal="fade">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="display display--sm" data-reveal="up">
                    {o.title}
                  </h3>
                  {(o.when || o.price) && (
                    <p className={s.when} data-reveal="up" data-delay="0.05">
                      {o.when && (
                        <>
                          <Icon name="clock" /> {o.when}
                        </>
                      )}
                      {o.price && <span className={s.tag}>{o.price}</span>}
                    </p>
                  )}
                  <p className="lede" data-reveal="up" data-delay="0.1">
                    {o.copy}
                  </p>
                  <div className="btns" data-reveal="up" data-delay="0.15">
                    <Btn href={SITE.booking} size="sm" iconLeft="calendar">
                      Book a Table
                    </Btn>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal events */}
      <section className="section section--mahogany textured" aria-labelledby="events-title">
        <TornEdge position="top" color="var(--mahogany)" seed={107} />
        <Watermark style={{ left: "-3%", top: "6%" }}>Festive</Watermark>
        <div className="wrap">
          <div className={s.eventsHead}>
            <div>
              <Eyebrow>Seasonal Events</Eyebrow>
              <h2 id="events-title" className="display display--md" data-reveal="up">
                <span className="line">Celebrate</span>
                <span className="line">at Your Local</span>
              </h2>
            </div>
            <p className="lede" data-reveal="up" data-delay="0.1">
              Christmas Day, Boxing Day, New Year’s Eve and the festive roast turkey. Pre-booking is open now. Call{" "}
              <a href={SITE.phoneHref} className={s.link}>
                {SITE.phone}
              </a>{" "}
              to secure your spot.
            </p>
          </div>
          <div className={s.events} data-reveal="stagger">
            {EVENTS.map((e) => (
              <article key={e.title} className={s.event}>
                <div className={s.eventImg}>
                  <Image src={e.image} alt={`${e.title} at Nell Gwynne`} width={600} height={600} sizes="(max-width: 760px) 90vw, 300px" />
                </div>
                <div className={s.eventBody}>
                  <span className={s.eventDate}>
                    <Icon name="calendar" /> {e.date}
                  </span>
                  <h3 className="h3">{e.title}</h3>
                  <p>{e.copy}</p>
                  <ul className={s.packages}>
                    {e.packages.map((p) => (
                      <li key={p.name}>
                        <span>
                          <strong>{p.name}</strong>
                          <small>{p.detail}</small>
                        </span>
                        <em>{p.price}</em>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Gentle Pour */}
      <section className="section section--paper textured" aria-labelledby="gp-title">
        <TornEdge position="top" color="var(--parchment)" seed={109} />
        <div className={`wrap ${s.gp}`}>
          <figure className={`print print--deckle ${s.gpImg}`} data-reveal="print" data-rot="-6">
            <Image src="/images/site/guinness-pour.webp" alt="A pint of Guinness being poured" width={700} height={990} sizes="(max-width: 980px) 70vw, 420px" />
            <figcaption className="print__cap">Only at Nell Gwynne</figcaption>
          </figure>
          <div>
            <Eyebrow>New on Tap</Eyebrow>
            <h2 id="gp-title" className="display display--md" data-reveal="up">
              <span className="line">{GENTLE_POUR.title}</span>
              <span className="sub">Smoother · lighter · still creamy</span>
            </h2>
            <Rule />
            <p className="lede" data-reveal="up" data-delay="0.1">
              {GENTLE_POUR.copy}
            </p>
            <div className={s.blend} data-reveal="up" data-delay="0.15">
              <div className={s.blendBar} aria-hidden="true">
                <span style={{ width: "60%" }}>60%</span>
                <span style={{ width: "40%" }}>40%</span>
              </div>
              <div className={s.blendLegend}>
                <span>Guinness 0.0</span>
                <span>Guinness 4.2</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ClosingBand title={["Grab the Crew"]} sub="Tables go fast on deal nights" />
      <MotionRoot />
    </>
  );
}
