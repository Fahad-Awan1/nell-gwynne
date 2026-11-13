import styles from "./Logo.module.css";

/** "NELL GWYNNE" wordmark: Gemola with oversized N / G capitals, as in the brand asset. */
export function Wordmark({ className = "", size = "md" }: { className?: string; size?: "sm" | "md" | "lg" | "xl" }) {
  return (
    <span className={`${styles.word} ${styles[size]} ${className}`} aria-label="Nell Gwynne">
      <span aria-hidden="true">
        <span className={styles.cap}>N</span>
        <span className={styles.raised}>ELL</span>
        <span className={styles.gap} />
        <span className={styles.cap}>G</span>
        <span className={styles.raised}>WYNN</span>
        <span className={styles.capE}>E</span>
      </span>
    </span>
  );
}

/** NG monogram, optionally inside the Copper ring. */
export function Monogram({ ring = true, className = "" }: { ring?: boolean; className?: string }) {
  return (
    <span className={`${styles.mono} ${ring ? styles.ring : ""} ${className}`} aria-hidden="true">
      NG
    </span>
  );
}
