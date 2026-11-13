import Link from "next/link";
import { SITE } from "@/content/site";
import Icon from "@/components/ui/Icon";
import { Btn, Eyebrow, Rule, Watermark } from "@/components/ui/bits";
import { Monogram } from "@/components/ui/Logo";
import EnquiryForm from "./EnquiryForm";
import s from "./ContactShell.module.css";

/** MH "Contact" layout: dark headline column with contact info, paper sheet with the form. */
export default function ContactShell({
  crumb,
  eyebrow,
  title,
  sub,
  lede,
  mode,
  formTitle,
  primary,
}: {
  crumb: string;
  eyebrow: string;
  title: string[];
  sub: string;
  lede: string;
  mode: "booking" | "support";
  formTitle: string;
  primary?: React.ReactNode;
}) {
  return (
    <section className={`${s.sec} textured`}>
      <Watermark style={{ left: "-2%", bottom: "6%" }}>Hello</Watermark>
      <div className={`wrap ${s.grid}`}>
        <div className={s.info}>
          <nav className={s.crumb} aria-label="Breadcrumb" data-reveal="fade">
            <Link href="/">Home</Link>
            <span aria-hidden="true" />
            <span aria-current="page">{crumb}</span>
          </nav>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="display display--md" data-reveal="up">
            {title.map((t) => (
              <span key={t} className="line">
                {t}
              </span>
            ))}
            <span className="sub">{sub}</span>
          </h1>
          <Rule delay={0.6} />
          <p className="lede" data-reveal="up" data-delay="0.1">
            {lede}
          </p>
          {primary}
          <ul className={s.list} data-reveal="stagger">
            <li>
              <span className="icon-circle">
                <Icon name="pin" />
              </span>
              <div>
                <small>Address</small>
                <a href={SITE.maps} target="_blank" rel="noopener noreferrer">
                  {SITE.address.line1}, {SITE.address.line2}, {SITE.address.city}
                </a>
              </div>
            </li>
            <li>
              <span className="icon-circle">
                <Icon name="phone" />
              </span>
              <div>
                <small>Phone &amp; WhatsApp</small>
                <a href={SITE.phoneHref}>{SITE.phone}</a>
              </div>
            </li>
            <li>
              <span className="icon-circle">
                <Icon name="clock" />
              </span>
              <div>
                <small>Opening hours</small>
                <span>{SITE.hours}</span>
              </div>
            </li>
          </ul>
          <div className={s.notice} data-reveal="news" data-rot="-2">
            <strong>Heads up</strong>
            <span>{SITE.notice}</span>
          </div>
        </div>

        <div className={s.sheet} data-reveal="print" data-rot="3">
          <span className="tape" style={{ top: -12, left: "42%", rotate: "-4deg" }} />
          <div className={s.sheetHead}>
            <Monogram ring className={s.mono} />
            <div>
              <h2 className="h3">{formTitle}</h2>
              <p>We usually reply within the hour during opening times.</p>
            </div>
          </div>
          <EnquiryForm mode={mode} />
          <div className={s.alt}>
            <span>Prefer social?</span>
            <Btn href={SITE.social.instagram} variant="dark" size="sm" iconLeft="instagram">
              DM on Instagram
            </Btn>
          </div>
        </div>
      </div>
    </section>
  );
}
