import Image from "next/image";
import { Eyebrow, Rule, Watermark } from "@/components/ui/bits";
import TornEdge from "@/components/paper/TornEdge";
import s from "./PosterFeature.module.css";

/** A section with one pinned 9:16 poster (shown whole) beside its copy. */
export default function PosterFeature({
  id,
  eyebrow,
  title,
  sub,
  poster,
  alt,
  tone = "black",
  seed,
  watermark,
  flip = false,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  sub?: string;
  poster: string;
  alt: string;
  tone?: "black" | "mahogany" | "paper";
  seed: number;
  watermark?: string;
  flip?: boolean;
  children: React.ReactNode;
}) {
  const color = tone === "paper" ? "var(--parchment)" : `var(--${tone})`;
  return (
    <section className={`section section--${tone} textured`} aria-labelledby={id}>
      <TornEdge position="top" color={color} seed={seed} />
      {watermark && <Watermark style={{ [flip ? "left" : "right"]: "-2%", top: "8%" }}>{watermark}</Watermark>}
      <div className={`wrap ${s.grid} ${flip ? s.flip : ""}`}>
        <figure className={s.poster} data-reveal="print" data-rot={flip ? "6" : "-6"}>
          <span className={s.pin} aria-hidden="true" />
          <Image src={poster} alt={alt} width={1080} height={1920} sizes="(max-width: 760px) 70vw, 340px" />
        </figure>
        <div className={s.copy}>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 id={id} className="display display--md" data-reveal="up">
            <span className="line">{title}</span>
            {sub && <span className="sub">{sub}</span>}
          </h2>
          <Rule />
          {children}
        </div>
      </div>
    </section>
  );
}
