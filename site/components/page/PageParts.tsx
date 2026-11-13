import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/content/site";
import { Btn, Eyebrow, Rule, Watermark } from "@/components/ui/bits";
import TornEdge from "@/components/paper/TornEdge";
import s from "./PageParts.module.css";

type HeroImg = { src: string; alt: string; caption?: string };

/** Inner-page hero: dark textured band, big Gemola title, optional photo prints (MH sub-page heroes). */
export function PageHero({
  eyebrow,
  title,
  sub,
  lede,
  images = [],
  watermark,
  crumb,
  children,
}: {
  eyebrow: string;
  title: string[];
  sub?: string;
  lede?: string;
  images?: HeroImg[];
  watermark?: string;
  crumb: string;
  children?: React.ReactNode;
}) {
  return (
    <section className={`${s.hero} textured ${images.length ? s.withImg : ""}`}>
      {watermark && <Watermark style={{ right: "-3%", bottom: "8%" }}>{watermark}</Watermark>}
      <div className={`wrap ${s.grid}`}>
        <div className={s.copy}>
          <nav className={s.crumb} aria-label="Breadcrumb" data-reveal="fade">
            <Link href="/">Home</Link>
            <span aria-hidden="true" />
            <span aria-current="page">{crumb}</span>
          </nav>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="display" data-reveal="up">
            {title.map((t) => (
              <span key={t} className="line">
                {t}
              </span>
            ))}
            {sub && <span className="sub">{sub}</span>}
          </h1>
          <Rule delay={0.6} />
          {lede && (
            <p className="lede" data-reveal="up" data-delay="0.15">
              {lede}
            </p>
          )}
          {children}
        </div>
        {images.length > 0 && (
          <div className={s.prints}>
            {images.slice(0, 2).map((img, i) => (
              <figure
                key={img.src}
                className={`print ${i === 0 ? "print--deckle" : ""} ${i === 0 ? s.p0 : s.p1}`}
                data-reveal="print"
                data-rot={i === 0 ? "-8" : "9"}
                data-delay={(0.15 + i * 0.15).toFixed(2)}
              >
                {i === 1 && <span className="tape" style={{ top: -12, left: "30%", rotate: "-5deg" }} />}
                <Image src={img.src} alt={img.alt} width={700} height={800} sizes="(max-width: 760px) 60vw, 360px" preload={i === 0} />
                {img.caption && <figcaption className="print__cap">{img.caption}</figcaption>}
              </figure>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

/** Closing band with CTA buttons (MH "Ready when you are" / closing band). */
export function ClosingBand({
  title = ["Pull Up a Stool"],
  sub = "There’s always a seat at the bar",
  copy = "Big match, quiz night or just a quiet pint. Book ahead for the busy nights, or simply walk in.",
  tone = "mahogany",
}: {
  title?: string[];
  sub?: string;
  copy?: string;
  tone?: "mahogany" | "black";
}) {
  return (
    <section className={`section section--${tone} textured ${s.band}`}>
      <TornEdge position="top" color={tone === "mahogany" ? "var(--mahogany)" : "var(--black)"} seed={61} />
      <Watermark style={{ left: "50%", top: "50%", translate: "-50% -50%" }}>Cheers</Watermark>
      <div className={`wrap ${s.bandInner}`}>
        <h2 className="display display--md" data-reveal="up">
          {title.map((t) => (
            <span key={t} className="line">
              {t}
            </span>
          ))}
          <span className="sub">{sub}</span>
        </h2>
        <p className="lede" data-reveal="up" data-delay="0.1">
          {copy}
        </p>
        <div className="btns" data-reveal="up" data-delay="0.2">
          <Btn href={SITE.booking} iconLeft="calendar">
            Book a Table
          </Btn>
          <Btn href={SITE.whatsapp} variant="dark" iconLeft="whatsapp">
            WhatsApp Us
          </Btn>
        </div>
      </div>
    </section>
  );
}

/** Parchment sheet for long-form text (legal pages). */
export function PaperSheet({ children, updated }: { children: React.ReactNode; updated?: string }) {
  return (
    <section className={`section section--mahogany textured ${s.sheetSec}`}>
      <TornEdge position="top" color="var(--mahogany)" seed={71} />
      <div className="wrap">
        <article className={`${s.sheet} print--deckle`} data-reveal="print" data-rot="-1.5">
          {updated && <p className={s.updated}>Last updated: {updated}</p>}
          {children}
        </article>
      </div>
    </section>
  );
}
