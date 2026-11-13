import styles from "./TornEdge.module.css";

type Props = {
  /** Which edge of the parent section the tear sits on. */
  position?: "top" | "bottom";
  /** Fill colour = the colour of the section that owns this edge. */
  color?: string;
  /** Changes the tear shape so neighbouring edges don't repeat. */
  seed?: number;
  /** Height of the tear band in px (desktop). */
  height?: number;
  /** Show the lighter paper-fibre strip along the tear. */
  fibre?: boolean;
};

// Small deterministic PRNG so the server and client render the same tear.
function rng(seed: number) {
  let s = seed * 9301 + 49297;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

function tearPath(seed: number, w = 1440, h = 60, steps = 90) {
  const r = rng(seed);
  const pts: string[] = [];
  let y = h * 0.5;
  for (let i = 0; i <= steps; i++) {
    const x = (i / steps) * w;
    // mix of slow wave + jagged noise, like hand-torn paper
    const wave = Math.sin(i / 7 + seed) * h * 0.14;
    y = Math.min(h * 0.92, Math.max(h * 0.12, y + (r() - 0.5) * h * 0.38));
    const yy = Math.min(h * 0.95, Math.max(h * 0.05, y + wave));
    pts.push(`${x.toFixed(1)},${yy.toFixed(1)}`);
    if (r() > 0.72 && i < steps) {
      // occasional sharp notch
      const nx = x + w / steps / 2;
      pts.push(`${nx.toFixed(1)},${Math.min(h * 0.98, yy + h * (0.15 + r() * 0.25)).toFixed(1)}`);
    }
  }
  return pts;
}

export default function TornEdge({ position = "top", color = "var(--parchment)", seed = 1, height = 46, fibre = true }: Props) {
  const w = 1440;
  const h = 60;
  const pts = tearPath(seed, w, h);
  // Shape filled from the tear line to the section edge.
  const main = `M0,${h} L${pts.join(" L")} L${w},${h} Z`;
  const fib = tearPath(seed + 17, w, h, 120).map((p) => {
    const [x, y] = p.split(",").map(Number);
    return `${x},${Math.max(0, y - 6)}`;
  });
  const fibrePath = `M0,${h} L${fib.join(" L")} L${w},${h} Z`;

  return (
    <div
      aria-hidden="true"
      className={`${styles.edge} ${position === "top" ? styles.top : styles.bottom}`}
      style={{ height, color }}
    >
      <svg viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" width="100%" height="100%">
        {fibre && <path d={fibrePath} fill="rgba(243,233,220,0.28)" />}
        <path d={main} fill="currentColor" />
      </svg>
    </div>
  );
}
