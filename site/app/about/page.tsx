import type { Metadata } from "next";
import Image from "next/image";
import { FEATURES, SITE } from "@/content/site";
import MotionRoot from "@/components/motion/MotionRoot";
import Timeline from "@/components/about/Timeline";
import { PageHero, ClosingBand } from "@/components/page/PageParts";
import { Btn, Eyebrow, Rule, Watermark, Note } from "@/components/ui/bits";
import Icon, { type IconName } from "@/components/ui/Icon";
import TornEdge from "@/components/paper/TornEdge";
import PosterFeature from "@/components/page/PosterFeature";
import s from "./about.module.css";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Since 2011, Nell Gwynne has been Dubai Marina’s English local: live sports, proper pints, pub food, pool, darts and live music inside the Marina Byblos Hotel.",
};

const ICONS: Record<string, IconName> = { beer: "beer", sports: "sports", food: "food", music: "music", football: "cue" };

// Photography from the brand asset PDF
const GALLERY = [
  { src: "/images/brand/bar-interior.webp", alt: "The wood-panelled bar at Nell Gwynne", cap: "The bar", w: 630, h: 350 },
  { src: "/images/brand/match-crowd.webp", alt: "A packed crowd watching the match", cap: "Match night", w: 640, h: 427 },
  { src: "/images/brand/pint-and-burger.webp", alt: "A pint and a burger raised in cheers", cap: "Pints & burgers", w: 519, h: 519 },
  { src: "/images/brand/full-english.webp", alt: "A Full English breakfast", cap: "The Full English", w: 640, h: 427 },
  { src: "/images/brand/pool-and-food.webp", alt: "Pub food by the pool table", cap: "Pool & plates", w: 600, h: 400 },
  { src: "/images/brand/bar-wide.webp", alt: "The bar and its stone pillar", cap: "Your local", w: 567, h: 378 },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumb="About Us"
        eyebrow="Our Story"
        title={["A British Local", "in Dubai Marina"]}
        sub={`Since ${SITE.since}`}
        lede="Live sports, ice-cold pints, hearty pub food and no ego. Nell Gwynne is the laid-back local where the crowd feels like home."
        watermark="Since 2011"
        images={[
          { src: "/images/brand/bar-interior.webp", alt: "The wood-panelled bar at Nell Gwynne", caption: "Your local since 2011", w: 630, h: 350 },
          { src: "/images/brand/match-crowd.webp", alt: "A packed crowd watching the match at Nell Gwynne", caption: "Match night", w: 640, h: 427 },
        ]}
      />

      {/* Story */}
      <section className={`section section--paper textured`} aria-labelledby="story-title">
        <TornEdge position="top" color="var(--parchment)" seed={91} />
        <Watermark style={{ left: "-2%", top: "6%" }}>Nell</Watermark>
        <div className={`wrap ${s.story}`}>
          <div className={s.storyText}>
            <Eyebrow>The Name</Eyebrow>
            <h2 id="story-title" className="display display--md" data-reveal="up">
              <span className="line">Who Was</span>
              <span className="line">Nell Gwynne?</span>
              <span className="sub">London, 1650 – 1687</span>
            </h2>
            <Rule />
            <p className="lede" data-reveal="up" data-delay="0.1">
              Our pub takes its name from Nell Gwynne, the London orange-seller who became one of the most celebrated comic
              actresses of the Restoration stage, and a favourite of King Charles II.
            </p>
            <p className={s.p} data-reveal="up" data-delay="0.15">
              Quick-witted, warm and famously down-to-earth, Nell was loved by the people. That’s the spirit we pour into every
              pint: a proper British welcome with no airs and graces. Whether it’s the big match, quiz night or a Sunday roast,
              everyone gets a seat at the bar.
            </p>
            <div className="btns" data-reveal="up" data-delay="0.2">
              <Btn href="/menu" variant="dark" icon="arrow">
                See the Menu
              </Btn>
            </div>
          </div>
          <div className={s.storyArt}>
            <div className={s.portrait} data-reveal="print" data-rot="-6">
              <span className={s.frame}>
                <span className={s.monoBig}>NG</span>
                <span className={s.frameCap}>Est. {SITE.since}</span>
              </span>
            </div>
            <figure className={`print ${s.storyPhoto}`} data-reveal="print" data-rot="8" data-delay="0.15">
              <span className="tape" style={{ top: -12, left: 24, rotate: "-6deg" }} />
              <Image src="/images/brand/full-english.webp" alt="A Full English breakfast" width={640} height={427} sizes="300px" />
              <figcaption className="print__cap">The Full English</figcaption>
            </figure>
            <div className={`stamp ${s.storyStamp}`} data-reveal="stamp" data-delay="0.4">
              <span>
                <small>Open</small>
                <strong>7</strong>
                <small>Days a week</small>
              </span>
            </div>
            <Note className={s.storyNote}>A proper British welcome</Note>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section section--black textured" aria-labelledby="tl-title">
        <TornEdge position="top" color="var(--black)" seed={93} />
        <Watermark style={{ right: "-3%", top: "4%" }}>Legacy</Watermark>
        <div className="wrap">
          <div className={s.center}>
            <Eyebrow>Our Journey</Eyebrow>
            <h2 id="tl-title" className="display display--md" data-reveal="up">
              <span className="line">A Local That Stuck</span>
              <span className="sub">Thirteen years &amp; counting</span>
            </h2>
          </div>
          <Timeline />
        </div>
      </section>

      {/* What we do */}
      <section className="section section--mahogany textured" aria-labelledby="feat-title">
        <TornEdge position="top" color="var(--mahogany)" seed={95} />
        <div className="wrap">
          <div className={s.featHead}>
            <div>
              <Eyebrow>Why People Stay</Eyebrow>
              <h2 id="feat-title" className="display display--md" data-reveal="up">
                <span className="line">Pick Your Game,</span>
                <span className="line">Grab a Pint</span>
              </h2>
            </div>
            <p className="lede" data-reveal="up" data-delay="0.1">
              Whether it’s Premier League, F1, rugby or a late-night fight card: if it’s live, it’s on. Big screens, cold pints and
              full volume.
            </p>
          </div>
          <div className={s.feats} data-reveal="stagger">
            {FEATURES.map((f) => (
              <div key={f.title} className={s.feat}>
                <span className="icon-circle">
                  <Icon name={ICONS[f.icon] ?? "beer"} />
                </span>
                <h3 className="h3">{f.title}</h3>
                <p>{f.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nell's Garden (from the in-venue screen posters) */}
      <PosterFeature
        id="garden-title"
        eyebrow="Outdoor Dining"
        title="Nell’s Garden"
        sub="Pet friendly"
        poster="/images/gallery/posters/nells-garden.webp"
        alt="Nell’s Garden poster: outdoor dining, pet friendly"
        tone="black"
        seed={96}
        watermark="Garden"
      >
        <p className="lede" data-reveal="up" data-delay="0.1">
          Take the roast outside. Nell’s Garden is our outdoor dining spot, and four-legged friends are welcome to join you.
        </p>
        <ul data-reveal="stagger">
          <li>
            <Icon name="food" /> Outdoor dining
          </li>
          <li>
            <Icon name="beer" /> Pints in the fresh air
          </li>
          <li>
            <Icon name="star" /> Pet friendly
          </li>
        </ul>
        <div className="btns" data-reveal="up" data-delay="0.2">
          <Btn href={SITE.booking} iconLeft="calendar">
            Book a Table
          </Btn>
        </div>
      </PosterFeature>

      {/* A closer look inside */}
      <section className="section section--paper textured" aria-labelledby="gal-title">
        <TornEdge position="top" color="var(--parchment)" seed={97} />
        <div className="wrap">
          <div className={s.center}>
            <Eyebrow>A Closer Look Inside</Eyebrow>
            <h2 id="gal-title" className="display display--md" data-reveal="up">
              <span className="line">Pints, Plates</span>
              <span className="sub">&amp; good company</span>
            </h2>
          </div>
          <div className={s.gallery} data-reveal="stagger">
            {GALLERY.map((g, i) => (
              <figure key={g.src} className={`print ${s.gItem}`} style={{ rotate: `${[-3, 2, -1.5, 2.5, -2, 1.5][i]}deg` }}>
                <Image src={g.src} alt={g.alt} width={g.w} height={g.h} sizes="(max-width: 760px) 45vw, 360px" />
                <figcaption className="print__cap">{g.cap}</figcaption>
              </figure>
            ))}
          </div>
          <div className={s.center} style={{ marginTop: 56, marginBottom: 0 }}>
            <div className="btns" style={{ justifyContent: "center" }}>
              <Btn href="/gallery" variant="dark" icon="arrow">
                See the Gallery
              </Btn>
              <Btn href={SITE.social.instagram} variant="dark" iconLeft="instagram">
                More on Instagram
              </Btn>
            </div>
          </div>
        </div>
      </section>

      <ClosingBand />
      <MotionRoot />
    </>
  );
}
