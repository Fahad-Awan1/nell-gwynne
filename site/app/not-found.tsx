import { Btn } from "@/components/ui/bits";

export default function NotFound() {
  return (
    <section
      className="section section--black textured"
      style={{ minHeight: "88svh", display: "grid", placeItems: "center", textAlign: "center", paddingTop: "calc(var(--header-h) + 40px)" }}
    >
      <div className="wrap" style={{ display: "grid", justifyItems: "center" }}>
        <span className="eyebrow">Error 404</span>
        <h1 className="display">
          <span className="line">Last Orders</span>
          <span className="sub">This page has left the pub</span>
        </h1>
        <p className="lede" style={{ marginTop: 24 }}>
          The page you’re after isn’t here. Head back to the bar and we’ll pour you something.
        </p>
        <div className="btns" style={{ justifyContent: "center" }}>
          <Btn href="/" icon="arrow">
            Back Home
          </Btn>
          <Btn href="/menu" variant="dark">
            See the Menu
          </Btn>
        </div>
      </div>
    </section>
  );
}
