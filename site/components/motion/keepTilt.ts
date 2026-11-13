/**
 * GSAP folds an element's CSS `rotate` (our hand-placed tilt) into its own transform, and
 * `clearProps: "transform"` then wipes it. Call before a tween and pass the result as onComplete.
 *
 * The original tilt is captured the first time we see an element and kept in a WeakMap, so it
 * survives context reverts (StrictMode re-runs, route changes) that leave `rotate: none` behind.
 */
const original = new WeakMap<HTMLElement, string>();

export function keepTilt(els: ArrayLike<Element>) {
  const list = Array.from(els) as HTMLElement[];
  list.forEach((e) => {
    if (!original.has(e)) original.set(e, e.style.rotate);
  });
  return () =>
    list.forEach((e) => {
      const r = original.get(e);
      if (r && r !== "none") e.style.rotate = r;
    });
}
