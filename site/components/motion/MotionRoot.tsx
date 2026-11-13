"use client";

import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { keepTilt } from "./keepTilt";

gsap.registerPlugin(ScrollTrigger);
// Mobile address bars show/hide while scrolling and resize the viewport; without this every
// show/hide triggers a full ScrollTrigger refresh, which makes sticky bars visibly jump.
ScrollTrigger.config({ ignoreMobileResize: true });

/**
 * One motion engine for the whole site. Server components opt in with data attributes:
 *
 *  data-reveal="up | print | stamp | news | fade | clip | stagger"
 *  data-delay="0.2"              extra delay (s)
 *  data-rot="-4"                 starting extra rotation for print / news
 *  data-drift="0.15"             scrub parallax (fraction of element height)
 *  data-draw                     on an <svg>: strokes draw in when scrolled into view
 *  data-count="5000"             number counts up when visible
 *
 * Timings follow the reference: reveals run once at ~85% viewport, power3.out, 0.6–0.9s.
 */
export default function MotionRoot() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      document.documentElement.classList.remove("js-motion");
      return;
    }
    document.documentElement.classList.add("js-motion");

    const ctx = gsap.context(() => {
      const once = (el: Element, start = "top 86%") => ({ trigger: el, start, once: true });

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        const type = el.dataset.reveal;
        const delay = parseFloat(el.dataset.delay || "0");
        const rot = parseFloat(el.dataset.rot || "0");

        if (type === "stagger") {
          gsap.set(el, { opacity: 1 });
          const kids = Array.from(el.children);
          const restore = keepTilt(kids);
          gsap.from(kids, {
            y: 36,
            opacity: 0,
            duration: 0.75,
            delay,
            stagger: Math.min(0.09, 0.6 / Math.max(kids.length, 1)),
            ease: "power3.out",
            scrollTrigger: once(el),
            clearProps: "transform",
            onComplete: restore,
          });
          return;
        }

        const base = { opacity: 0, delay, scrollTrigger: once(el), clearProps: "transform", onComplete: keepTilt([el]) } as gsap.TweenVars;
        gsap.set(el, { opacity: 1 });

        switch (type) {
          case "print":
            gsap.from(el, { ...base, y: 52, scale: 0.97, rotation: rot || 5, duration: 0.9, ease: "power3.out" });
            break;
          case "news":
            gsap.from(el, { ...base, y: 30, rotation: rot || -3, duration: 0.75, ease: "power2.out" });
            break;
          case "stamp":
            gsap.from(el, { ...base, scale: 1.7, rotation: rot || -24, duration: 0.6, ease: "back.out(1.8)" });
            break;
          case "fade":
            gsap.from(el, { ...base, duration: 0.9, ease: "power1.out" });
            break;
          case "clip":
            gsap.fromTo(
              el,
              { clipPath: "inset(0% 0% 100% 0%)" },
              { clipPath: "inset(0% 0% 0% 0%)", duration: 1.1, delay, ease: "power3.inOut", scrollTrigger: once(el) },
            );
            break;
          default:
            gsap.from(el, { ...base, y: 34, duration: 0.8, ease: "power3.out" });
        }
      });

      // Scrub parallax drift (watermarks, notes, clippings)
      gsap.utils.toArray<HTMLElement>("[data-drift]").forEach((el) => {
        const speed = parseFloat(el.dataset.drift || "0.15");
        const trigger = el.closest("section") || el;
        gsap.fromTo(
          el,
          { yPercent: -speed * 100 },
          {
            yPercent: speed * 100,
            ease: "none",
            scrollTrigger: { trigger, start: "top bottom", end: "bottom top", scrub: 0.6 },
          },
        );
      });

      // Hand-drawn strokes
      gsap.utils.toArray<SVGSVGElement>("[data-draw]").forEach((svg) => {
        const paths = svg.querySelectorAll<SVGGeometryElement>("path, line, polyline, circle");
        paths.forEach((p) => {
          const len = p.getTotalLength?.() || 400;
          gsap.set(p, { strokeDasharray: len, strokeDashoffset: len });
        });
        gsap.to(paths, {
          strokeDashoffset: 0,
          duration: 1.1,
          delay: parseFloat(svg.dataset.delay || "0.2"),
          stagger: 0.12,
          ease: "power2.inOut",
          scrollTrigger: once(svg, "top 90%"),
        });
      });

      // Count-up numbers
      gsap.utils.toArray<HTMLElement>("[data-count]").forEach((el) => {
        const end = parseFloat(el.dataset.count || "0");
        const obj = { v: 0 };
        el.textContent = "0";
        gsap.to(obj, {
          v: end,
          duration: 1.8,
          ease: "power2.out",
          scrollTrigger: once(el, "top 90%"),
          onUpdate: () => {
            el.textContent = Math.round(obj.v).toLocaleString("en-GB");
          },
        });
      });
    });

    const refresh = () => ScrollTrigger.refresh();
    const t = window.setTimeout(refresh, 600);
    window.addEventListener("load", refresh);

    return () => {
      window.clearTimeout(t);
      window.removeEventListener("load", refresh);
      ctx.revert();
    };
  }, [pathname]);

  return null;
}
