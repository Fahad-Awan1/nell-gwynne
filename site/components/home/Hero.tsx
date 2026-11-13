"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { SITE } from "@/content/site";
import { Btn, Rule } from "@/components/ui/bits";
import styles from "./Hero.module.css";

export default function Hero() {
  const root = useRef<HTMLElement>(null);
  const stage = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from("[data-h='kicker']", { y: 10, opacity: 0, duration: 0.5 })
        .from("[data-h='line']", { y: 46, opacity: 0, duration: 0.85, stagger: 0.12 }, "-=0.2")
        .from("[data-h='rest']", { y: 18, opacity: 0, duration: 0.6, stagger: 0.09 }, "-=0.45")
        // collage rises from below, slightly turned, then settles
        .from("[data-h='stage']", { yPercent: 54, scale: 0.94, rotation: 1.6, opacity: 0.9, duration: 1.65 }, 0.15)
        .from("[data-h='print']", { y: 60, rotation: (i) => (i % 2 ? 8 : -8), opacity: 0, duration: 0.9, stagger: 0.14 }, 0.6)
        .from("[data-h='stamp']", { scale: 1.8, rotation: -30, opacity: 0, duration: 0.6, ease: "back.out(1.8)" }, 1.25)
        .from("[data-h='note']", { opacity: 0, x: -14, duration: 0.6, stagger: 0.15 }, 1.4);

      // idle bob once landed
      gsap.to("[data-h='float']", { y: 13, duration: 3.6, ease: "sine.inOut", yoyo: true, repeat: -1, delay: 1.8 });
    }, root);

    // pointer tilt (desktop only)
    const el = stage.current;
    const fine = window.matchMedia("(pointer: fine)").matches;
    let cleanup = () => {};
    if (el && fine) {
      const rx = gsap.quickTo(el, "rotationX", { duration: 0.9, ease: "power3" });
      const ry = gsap.quickTo(el, "rotationY", { duration: 0.9, ease: "power3" });
      const onMove = (e: PointerEvent) => {
        const x = e.clientX / window.innerWidth - 0.5;
        const y = e.clientY / window.innerHeight - 0.5;
        ry(x * 8);
        rx(-y * 6);
      };
      window.addEventListener("pointermove", onMove);
      cleanup = () => window.removeEventListener("pointermove", onMove);
    }
    return () => {
      cleanup();
      ctx.revert();
    };
  }, []);

  return (
    <section ref={root} className={`${styles.hero} textured`} aria-labelledby="hero-title">
      <div className={`wrap ${styles.grid}`}>
        <div className={styles.copy}>
          <p className={styles.kicker} data-h="kicker">
            <span /> Welcome to Nell Gwynne · Dubai Marina
          </p>
          <h1 id="hero-title" className="display">
            <span className="line" data-h="line">Live Sports</span>
            <span className="line" data-h="line">
              <span className="accent">&amp;</span> Proper
            </span>
            <span className="line" data-h="line">Pints</span>
            <span className="sub" data-h="line">
              Since {SITE.since}
            </span>
          </h1>
          <div data-h="rest">
            <Rule delay={1.1} />
          </div>
          <p className="lede" data-h="rest">
            Looking for a proper Dubai pub where you can cheer for your team, enjoy a cold pint and tuck into good British food?
            You’ve found it.
          </p>
          <div className="btns" data-h="rest">
            <Btn href="/menu" icon="arrow">
              View Menu
            </Btn>
            <Btn href={SITE.booking} variant="dark" iconLeft="calendar">
              Book a Table
            </Btn>
          </div>
        </div>

        <div className={styles.stageWrap}>
          <div ref={stage} className={styles.stage} data-h="stage">
            <div data-h="float" className={styles.float}>
              <figure className={`print print--deckle ${styles.main}`} data-h="print">
                <span className="tape" style={{ top: -12, left: "38%", rotate: "-3deg" }} />
                <Image
                  src="/images/site/pub-interior.webp"
                  alt="Guests watching football on the big screens at Nell Gwynne"
                  width={760}
                  height={1024}
                  preload
                  sizes="(max-width: 760px) 80vw, 520px"
                />
                <figcaption className="print__cap">Match night · Dubai Marina</figcaption>
              </figure>
              <figure className={`print ${styles.second}`} data-h="print">
                <Image src="/images/site/guinness-pour.webp" alt="A bartender pouring a pint of Guinness" width={600} height={850} sizes="260px" />
                <figcaption className="print__cap">The perfect pour</figcaption>
              </figure>
              <div className={`stamp ${styles.stamp}`} data-h="stamp">
                <span>
                  <small>Est.</small>
                  <strong>{SITE.since}</strong>
                  <small>Dubai Marina</small>
                </span>
              </div>
            </div>
          </div>
          <span className={`${styles.note} ${styles.noteA}`} data-h="note">
            Every match.
            <br />
            Every pint.
          </span>
          <span className={`${styles.note} ${styles.noteB}`} data-h="note">
            Open daily
            <br />
            {SITE.hoursShort}
          </span>
        </div>
      </div>

      <div className={styles.scroll} aria-hidden="true">
        <span>Scroll</span>
        <i />
      </div>
    </section>
  );
}
