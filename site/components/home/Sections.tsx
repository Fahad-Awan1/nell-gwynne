import Image from "next/image";
import Link from "next/link";
import { OFFERS, SITE, STATS, TESTIMONIALS } from "@/content/site";
import { Btn, Eyebrow, Rule, Watermark, Note } from "@/components/ui/bits";
import Icon from "@/components/ui/Icon";
import TornEdge from "@/components/paper/TornEdge";
import AutoSwipe from "@/components/ui/AutoSwipe";
import { Monogram } from "@/components/ui/Logo";
import s from "./Sections.module.css";

/* ------------------------------------------------------------------ */
/* About teaser: paper sheet with photo collage (MH "It all started")  */
/* ------------------------------------------------------------------ */
export function AboutTeaser() {
  return (
    <section className={`section section--paper textured ${s.about}`} aria-labelledby="about-title">
      <TornEdge position="top" color="var(--parchment)" seed={7} height={54} />
      <Watermark style={{ right: "-2%", top: "8%" }}>2011</Watermark>
      <div className={`wrap ${s.split}`}>
        <div className={s.collage}>
          <span className={s.started} data-reveal="fade">
            Where it
            <br />
            all happens…
          </span>
          <figure className={`print print--deckle ${s.cA}`} data-reveal="print" data-rot="-7">
            <Image src="/images/site/pub-interior.webp" alt="The bar at Nell Gwynne with flags and big screens" width={760} height={1024} sizes="(max-width: 760px) 70vw, 380px" />
            <figcaption className="print__cap">Al Hubob St, Dubai Marina</figcaption>
          </figure>
          <figure className={`print ${s.cB}`} data-reveal="print" data-rot="9" data-delay="0.15">
            <span className="tape" style={{ top: -10, right: 20, rotate: "8deg" }} />
            <Image src="/images/menu/full-english-breakfast.webp" alt="Full English breakfast" width={600} height={600} sizes="240px" />
            <figcaption className="print__cap">The Full English</figcaption>
          </figure>
          <figure className={`print ${s.cC}`} data-reveal="print" data-rot="-10" data-delay="0.3">
            <Image src="/images/site/guinness-pour.webp" alt="A pint of Guinness being poured" width={600} height={850} sizes="200px" />
            <figcaption className="print__cap">Pints poured right</figcaption>
          </figure>
          <div className={`stamp ${s.cStamp}`} data-reveal="stamp" data-delay="0.5">
            <span>
              <small>Over</small>
              <strong>13</strong>
              <small>Years</small>
            </span>
          </div>
        </div>

        <div className={s.text}>
          <Eyebrow>About Us</Eyebrow>
          <h2 id="about-title" className="display display--md" data-reveal="up">
            <span className="line">A Pub That Knows</span>
            <span className="line">Why You’re Here</span>
            <span className="sub">Your local in Dubai Marina</span>
          </h2>
          <Rule />
          <p className="lede" data-reveal="up" data-delay="0.1">
            Nell Gwynne is your laid-back local in Dubai Marina: live sports, ice-cold pints, hearty pub food and no ego. Just
            good vibes, great deals and a crowd that feels like home.
          </p>
          <ul className={s.ticks} data-reveal="stagger">
            <li>
              <Icon name="sports" /> Every big game on the big screens
            </li>
            <li>
              <Icon name="cue" /> Pool, darts &amp; live music
            </li>
            <li>
              <Icon name="food" /> Proper British plates, all day
            </li>
          </ul>
          <div className="btns" data-reveal="up" data-delay="0.2">
            <Btn href="/about" variant="dark" icon="arrow">
              Our Story
            </Btn>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Weekly offers: poster wall with centre-out stagger                  */
/* ------------------------------------------------------------------ */
export function OffersWall() {
  return (
    <section className={`section section--paper textured ${s.offers}`} aria-labelledby="offers-title">
      <TornEdge position="top" color="var(--parchment)" seed={23} />
      <Watermark style={{ left: "-3%", top: "4%" }}>Cheers</Watermark>
      <div className="wrap">
        <div className={s.head}>
          <div>
            <Eyebrow>Weekly Offers</Eyebrow>
            <h2 id="offers-title" className="display display--md" data-reveal="up">
              <span className="line">Something On</span>
              <span className="line">Every Night</span>
            </h2>
            <Rule />
          </div>
          <p className="lede" data-reveal="up" data-delay="0.1">
            Why wait until the weekend? Wings Night, Happy Hour, Bucket Specials, Ladies’ Night, Quiz Night and more. Great
            drinks, great value, no catch.
          </p>
        </div>

        <AutoSwipe className={s.posters} data-reveal="stagger" interval={1200}>
          {OFFERS.map((o, i) => (
            <Link key={o.slug} href={`/special-offers#${o.slug}`} className={s.poster} style={{ rotate: `${[-2.5, 1.5, -1, 2, -1.8, 1.2][i % 6]}deg` }}>
              <div className={s.posterImg}>
                <Image src={o.image} alt={`${o.title} poster`} width={600} height={600} sizes="(max-width: 760px) 80vw, 360px" />
                {o.price && <span className={s.price}>{o.price}</span>}
              </div>
              <div className={s.posterBody}>
                {o.when && (
                  <span className={s.when}>
                    <Icon name="clock" /> {o.when}
                  </span>
                )}
                <h3 className="h3">{o.title}</h3>
                <p>{o.copy}</p>
                <span className={s.more}>
                  Details <Icon name="arrow" />
                </span>
              </div>
            </Link>
          ))}
        </AutoSwipe>
        <div className={s.center} data-reveal="up">
          <Btn href="/special-offers" variant="dark" icon="arrow">
            See the Full Week
          </Btn>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Stats band                                                          */
/* ------------------------------------------------------------------ */
export function StatsBand() {
  return (
    <section className={`section section--black ${s.stats}`} aria-label="Nell Gwynne in numbers">
      <TornEdge position="top" color="var(--black)" seed={29} />
      <div className={`wrap ${s.statsGrid}`} data-reveal="stagger">
        {STATS.map((st) => (
          <div key={st.label} className={s.stat}>
            <span className={s.statNum}>
              <span data-count={st.value}>{st.value.toLocaleString("en-GB")}</span>
              {st.suffix}
            </span>
            <span className={s.statLabel}>{st.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Testimonials: pinned review notes (MH "Loved by locals")            */
/* ------------------------------------------------------------------ */
export function Testimonials() {
  return (
    <section className={`section section--mahogany textured ${s.reviews}`} aria-labelledby="reviews-title">
      <TornEdge position="top" color="var(--mahogany)" seed={31} />
      <Watermark style={{ right: "-4%", bottom: "6%" }}>Locals</Watermark>
      <div className="wrap">
        <div className={s.headCenter}>
          <Eyebrow>Our Testimonials</Eyebrow>
          <h2 id="reviews-title" className="display display--md" data-reveal="up">
            <span className="line">Loved by Locals</span>
            <span className="sub">What our guests are saying</span>
          </h2>
        </div>
        <AutoSwipe className={s.notes} interval={1000}>
          {TESTIMONIALS.map((t, i) => (
            <figure key={t.name} className={s.review} data-reveal="news" data-rot={i % 2 ? "4" : "-4"} data-delay={(i * 0.08).toFixed(2)} style={{ rotate: `${[-2, 1.5, -1, 2.2][i]}deg` }}>
              <span className={s.pin} aria-hidden="true" />
              <div className={s.starsRow} aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Icon key={k} name="star" />
                ))}
              </div>
              <blockquote>“{t.quote}”</blockquote>
              <figcaption>
                <Monogram ring className={s.reviewMono} />
                <span>
                  <strong>{t.name}</strong>
                  <small>Guest review</small>
                </span>
              </figcaption>
            </figure>
          ))}
        </AutoSwipe>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Book CTA + Visit (MH store locator → single venue)                  */
/* ------------------------------------------------------------------ */
export function Visit() {
  return (
    <section className={`section section--paper textured ${s.visit}`} aria-labelledby="visit-title">
      <TornEdge position="top" color="var(--parchment)" seed={37} />
      <Watermark style={{ right: "-2%", bottom: "2%" }}>Marina</Watermark>
      <div className={`wrap ${s.visitGrid}`}>
        <div>
          <Eyebrow>Book Your Spot</Eyebrow>
          <h2 id="visit-title" className="display display--md" data-reveal="up">
            <span className="line">We Fill Up</span>
            <span className="line">Fast!</span>
          </h2>
          <Rule />
          <p className="lede" data-reveal="up" data-delay="0.1">
            Big games mean big crowds. Whether you’re coming solo or with a full crew, booking ahead guarantees you don’t miss
            out.
          </p>

          <div className={`${s.card}`} data-reveal="print" data-rot="-3" data-delay="0.15">
            <div className={s.cardRow}>
              <Icon name="pin" />
              <div>
                <small>Find us</small>
                <a href={SITE.maps} target="_blank" rel="noopener noreferrer">
                  {SITE.address.line1}, {SITE.address.line2}
                </a>
              </div>
            </div>
            <div className={s.cardRow}>
              <Icon name="clock" />
              <div>
                <small>Opening hours</small>
                <span>{SITE.hours}</span>
              </div>
            </div>
            <div className={s.cardRow}>
              <Icon name="phone" />
              <div>
                <small>Call or WhatsApp</small>
                <a href={SITE.phoneHref}>{SITE.phone}</a>
              </div>
            </div>
            <div className="btns" style={{ marginTop: 22 }}>
              <Btn href={SITE.booking} variant="dark" iconLeft="calendar">
                Book a Table
              </Btn>
              <Btn href={SITE.whatsapp} variant="copper" iconLeft="whatsapp">
                WhatsApp
              </Btn>
            </div>
          </div>
        </div>

        <div className={s.mapWrap} data-reveal="print" data-rot="4" data-delay="0.2">
          <span className="tape" style={{ top: -12, left: 40, rotate: "-6deg" }} />
          <span className="tape" style={{ bottom: -10, right: 40, rotate: "5deg" }} />
          <div className={s.mapLabel}>
            <span className={s.ring} aria-hidden="true" />
            <span>Nell Gwynne · Marina Byblos Hotel</span>
          </div>
          <iframe
            title="Map showing Nell Gwynne at Marina Byblos Hotel, Dubai Marina"
            src={SITE.mapEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <Note className={s.mapNote}>Temporary entrance during lobby works</Note>
        </div>
      </div>
    </section>
  );
}
