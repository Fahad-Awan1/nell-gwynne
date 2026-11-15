"use client";

import { useEffect, useRef } from "react";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  /** Pause between automatic moves to the next card, in ms. */
  interval?: number;
  /** Only auto-advance at or below this viewport width (where the row is a swipe row). */
  maxWidth?: number;
  [key: `data-${string}`]: string | undefined;
};

/**
 * A horizontal swipe row that moves to the next card on its own (mobile only).
 * Runs only while the row is on screen, stops for a few seconds after the visitor
 * touches it, loops back to the first card at the end, and respects reduced motion.
 */
export default function AutoSwipe({ interval = 1000, maxWidth = 760, children, ...rest }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const mq = window.matchMedia(`(max-width: ${maxWidth}px)`);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let visible = false;
    let pausedUntil = 0;
    let timer = 0;

    const next = () => {
      if (!mq.matches || !visible || Date.now() < pausedUntil) return;
      const first = el.firstElementChild as HTMLElement | null;
      if (!first) return;
      const gap = parseFloat(getComputedStyle(el).columnGap || "0") || 0;
      const step = first.offsetWidth + gap;
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 8;
      el.scrollTo({ left: atEnd ? 0 : el.scrollLeft + step, behavior: "smooth" });
    };

    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting), { threshold: 0.4 });
    io.observe(el);
    const pause = () => (pausedUntil = Date.now() + 8000);
    el.addEventListener("pointerdown", pause, { passive: true });
    el.addEventListener("touchstart", pause, { passive: true });
    el.addEventListener("wheel", pause, { passive: true });
    timer = window.setInterval(next, interval);

    return () => {
      window.clearInterval(timer);
      io.disconnect();
      el.removeEventListener("pointerdown", pause);
      el.removeEventListener("touchstart", pause);
      el.removeEventListener("wheel", pause);
    };
  }, [interval, maxWidth]);

  return (
    <div ref={ref} {...rest}>
      {children}
    </div>
  );
}
