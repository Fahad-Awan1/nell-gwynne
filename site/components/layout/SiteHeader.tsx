"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV, SITE } from "@/content/site";
import { Wordmark } from "@/components/ui/Logo";
import Icon from "@/components/ui/Icon";
import styles from "./SiteHeader.module.css";

export default function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  // the drawer is open only for the route it was opened on, so navigating closes it
  const [openFor, setOpenFor] = useState<string | null>(null);
  const open = openFor === pathname;
  const setOpen = (v: boolean | ((o: boolean) => boolean)) =>
    setOpenFor((cur) => ((typeof v === "function" ? v(cur === pathname) : v) ? pathname : null));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenFor(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className={`${styles.hdr} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo} aria-label="Nell Gwynne home">
          <Wordmark size="md" priority />
        </Link>

        <nav className={styles.nav} aria-label="Main">
          {NAV.map((n, i) => (
            <span key={n.href} className={styles.item}>
              {i > 0 && <span className={styles.dot} aria-hidden="true" />}
              <Link href={n.href} className={isActive(n.href) ? styles.active : undefined} aria-current={isActive(n.href) ? "page" : undefined}>
                {n.label}
              </Link>
            </span>
          ))}
        </nav>

        <div className={styles.actions}>
          <a className={`btn btn--sm ${styles.book}`} href={SITE.booking} target="_blank" rel="noopener noreferrer">
            <Icon name="calendar" />
            <span>Book a Table</span>
          </a>
          <button className={styles.burger} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen((o) => !o)}>
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
      </div>

      {/* Mobile drawer: textured mahogany sheet in the site's own style (eyebrow, printed button, stamp) */}
      <div className={`textured ${styles.drawer} ${open ? styles.drawerOpen : ""}`} aria-hidden={!open}>
        <span className={styles.drawerMark} aria-hidden="true">
          Nell
        </span>
        <div className={styles.drawerTop}>
          <span className="eyebrow">Menu</span>
          <nav aria-label="Mobile">
            {NAV.map((n, i) => (
              <Link
                key={n.href}
                href={n.href}
                className={isActive(n.href) ? styles.drawerOn : undefined}
                aria-current={isActive(n.href) ? "page" : undefined}
                style={{ transitionDelay: open ? `${0.08 + i * 0.05}s` : "0s" }}
                tabIndex={open ? 0 : -1}
              >
                <span className={styles.num}>0{i + 1}</span>
                <span className={styles.label}>{n.label}</span>
                <Icon name="arrow" className={styles.go} />
              </Link>
            ))}
          </nav>
          <Link
            href="/book"
            className={`btn ${styles.drawerBook}`}
            aria-current={isActive("/book") ? "page" : undefined}
            style={{ transitionDelay: open ? "0.4s" : "0s" }}
            tabIndex={open ? 0 : -1}
          >
            <Icon name="calendar" />
            <span>Book a Table</span>
          </Link>
        </div>
        <div className={styles.drawerFoot}>
          <div className={styles.footInfo}>
            <a href={SITE.phoneHref} tabIndex={open ? 0 : -1}>
              <Icon name="phone" /> {SITE.phone}
            </a>
            <span>
              <Icon name="clock" /> {SITE.hours}
            </span>
            <div className={styles.socials}>
              <a href={SITE.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" tabIndex={open ? 0 : -1}>
                <Icon name="instagram" />
              </a>
              <a href={SITE.social.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok" tabIndex={open ? 0 : -1}>
                <Icon name="tiktok" />
              </a>
              <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" tabIndex={open ? 0 : -1}>
                <Icon name="whatsapp" />
              </a>
            </div>
          </div>
          <div className={`stamp ${styles.drawerStamp}`} aria-hidden="true">
            <span>
              <small>Est.</small>
              <strong>{SITE.since}</strong>
              <small>Dubai Marina</small>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
