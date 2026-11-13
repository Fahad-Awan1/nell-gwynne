import Link from "next/link";
import { FOOTER_LINKS, SITE } from "@/content/site";
import { Wordmark, Monogram } from "@/components/ui/Logo";
import Icon from "@/components/ui/Icon";
import TornEdge from "@/components/paper/TornEdge";
import styles from "./SiteFooter.module.css";

export default function SiteFooter() {
  const year = SITE.copyrightYear;
  return (
    <footer className={`${styles.ft} textured`}>
      <TornEdge position="top" color="var(--black)" seed={42} />
      <div className={`wrap ${styles.grid}`}>
        <div className={styles.brand}>
          <Link href="/" aria-label="Nell Gwynne home" className={styles.logo}>
            <Monogram className={styles.mono} />
            <Wordmark size="lg" />
          </Link>
          <p className={styles.tag}>{SITE.tagline}</p>
          <div className={styles.social}>
            <a className="btn btn--dark btn--sm" href={SITE.social.instagram} target="_blank" rel="noopener noreferrer">
              <Icon name="instagram" />
              <span>Instagram</span>
            </a>
            <a className="btn btn--dark btn--sm" href={SITE.social.tiktok} target="_blank" rel="noopener noreferrer">
              <Icon name="tiktok" />
              <span>TikTok</span>
            </a>
            <a className="btn btn--dark btn--sm" href={SITE.social.facebook} target="_blank" rel="noopener noreferrer">
              <Icon name="facebook" />
              <span>Facebook</span>
            </a>
          </div>
        </div>

        <nav aria-label="Quick links">
          <h2 className={styles.h}>Quick Links</h2>
          <ul>
            {FOOTER_LINKS.quick.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Useful links">
          <h2 className={styles.h}>Useful Links</h2>
          <ul>
            {FOOTER_LINKS.useful.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className={styles.h}>Get in Touch</h2>
          <ul className={styles.contact}>
            <li>
              <Icon name="pin" />
              <a href={SITE.maps} target="_blank" rel="noopener noreferrer">
                {SITE.address.line1}
                <br />
                {SITE.address.line2}, Dubai
              </a>
            </li>
            <li>
              <Icon name="phone" />
              <a href={SITE.phoneHref}>{SITE.phone}</a>
            </li>
            <li>
              <Icon name="whatsapp" />
              <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer">
                WhatsApp us
              </a>
            </li>
            <li>
              <Icon name="clock" />
              <span>{SITE.hours}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.big} aria-hidden="true">
        <Wordmark size="xl" />
      </div>

      <div className={`wrap ${styles.bar}`}>
        <p>
          © {year} {SITE.fullName}. All rights reserved.
        </p>
        <a href="#top" className="btn btn--dark btn--sm">
          <span>Back to top</span>
          <Icon name="arrow" className={styles.up} />
        </a>
      </div>
    </footer>
  );
}
