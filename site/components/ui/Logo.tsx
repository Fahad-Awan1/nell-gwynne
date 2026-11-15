import Image from "@/components/ui/Img";
import { MONOGRAM } from "./brandArt";
import styles from "./Logo.module.css";

// The official wordmark from the brand asset PDF: light version for dark backgrounds,
// mahogany ("reverse") version for parchment / light backgrounds.
const LOGO = {
  light: { src: "/images/brand/logo-light.png", w: 949, h: 152 },
  dark: { src: "/images/brand/logo-dark.png", w: 633, h: 101 },
};

/** "NELL GWYNNE" wordmark (brand artwork). `size` sets the rendered height. */
export function Wordmark({
  className = "",
  size = "md",
  tone = "light",
  priority = false,
}: {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  tone?: "light" | "dark";
  priority?: boolean;
}) {
  const l = LOGO[tone];
  return (
    <Image
      src={l.src}
      alt="Nell Gwynne"
      width={l.w}
      height={l.h}
      className={`${styles.word} ${styles[size]} ${className}`}
      preload={priority}
      sizes="(max-width: 760px) 60vw, 360px"
    />
  );
}

/** NG monogram, drawn from the brand PDF's glyph outlines; optionally inside the Copper ring. */
export function Monogram({ ring = true, className = "" }: { ring?: boolean; className?: string }) {
  return (
    <span className={`${styles.mono} ${ring ? styles.ring : ""} ${className}`} aria-hidden="true">
      <svg viewBox={MONOGRAM.viewBox} fill="currentColor" className={styles.monoSvg}>
        {MONOGRAM.glyphs.map((g) => (
          <path key={g.ch} d={g.d} transform={g.transform} />
        ))}
      </svg>
    </span>
  );
}
