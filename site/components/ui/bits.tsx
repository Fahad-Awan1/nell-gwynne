import Link from "next/link";
import Icon, { type IconName } from "./Icon";

type BtnProps = {
  href: string;
  children: React.ReactNode;
  variant?: "light" | "dark" | "copper";
  size?: "md" | "sm";
  icon?: IconName;
  iconLeft?: IconName;
  className?: string;
};

const isExternal = (href: string) => /^(https?:|tel:|mailto:)/.test(href);

/** Printed button: offset ink shadow, inner frame, presses down on click. */
export function Btn({ href, children, variant = "light", size = "md", icon, iconLeft, className = "" }: BtnProps) {
  const cls = `btn ${variant === "dark" ? "btn--dark" : variant === "copper" ? "btn--copper" : ""} ${size === "sm" ? "btn--sm" : ""} ${className}`;
  const inner = (
    <>
      {iconLeft && <Icon name={iconLeft} />}
      <span>{children}</span>
      {icon && <Icon name={icon} className={icon === "arrow" ? "arrow" : undefined} />}
    </>
  );
  if (isExternal(href)) {
    const blank = href.startsWith("http");
    return (
      <a href={href} className={cls} {...(blank ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}

export function Eyebrow({ children, reveal = true }: { children: React.ReactNode; reveal?: boolean }) {
  return (
    <span className="eyebrow" {...(reveal ? { "data-reveal": "stamp", "data-rot": "-6" } : {})}>
      {children}
    </span>
  );
}

/** Hand-ruled copper underline that draws itself in. */
export function Rule({ className = "", delay = 0.4 }: { className?: string; delay?: number }) {
  return (
    <svg className={`rule ${className}`} viewBox="0 0 320 18" fill="none" data-draw data-delay={delay} aria-hidden="true">
      <path d="M3 12C60 6 140 4 205 7c40 2 78 4 112-1" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M250 15c22-2 44-3 66-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" opacity=".7" />
    </svg>
  );
}

export function Watermark({ children, style, drift = 0.18 }: { children: React.ReactNode; style?: React.CSSProperties; drift?: number }) {
  return (
    <span className="watermark" style={style} data-drift={drift} aria-hidden="true">
      {children}
    </span>
  );
}

/** Small hand-written note with an arrow stroke, used beside photos (the reference's scribbles). */
export function Note({ children, className = "", style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  return (
    <span className={`note ${className}`} style={style} data-reveal="fade" data-delay="0.6">
      {children}
      <svg viewBox="0 0 80 40" fill="none" data-draw aria-hidden="true">
        <path d="M4 6c18 2 40 10 56 26" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M50 30l11 3-2-11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    </span>
  );
}
