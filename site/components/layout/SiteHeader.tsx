"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV, SITE } from "@/content/site";
import { Wordmark, Monogram } from "@/components/ui/Logo";
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
          <Monogram className={styles.mono} />
          <Wordmark size="md" />
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

      <div className={`${styles.drawer} ${open ? styles.drawerOpen : ""}`} aria-hidden={!open}>
        <nav aria-label="Mobile">
          {[...NAV, { href: "/book", label: "Book a Table" }].map((n, i) => (
            <Link key={n.href} href={n.href} style={{ transitionDelay: open ? `${0.08 + i * 0.05}s` : "0s" }} tabIndex={open ? 0 : -1}>
              <span className={styles.num}>0{i + 1}</span>
              {n.label}
            </Link>
          ))}
        </nav>
        <div className={styles.drawerFoot}>
          <a href={SITE.phoneHref} tabIndex={open ? 0 : -1}>
            <Icon name="phone" /> {SITE.phone}
          </a>
          <span>
            <Icon name="clock" /> {SITE.hours}
          </span>
        </div>
      </div>
    </header>
  );
}
