import heroImage from "../../../assets/images/home.png";
import "../css/Home.css";

export default function Home() {
  return (
    <section className="hero">
      <img className="hero-img" src={heroImage} alt="Vibe Summer Collection" />
      <div className="hero-content">
        <span className="hero-eyebrow">Summer 2026 — Dhaka</span>
        <h1 className="hero-headline">
          Dress for
          <br />
          the <em>heat,</em>
          <br />
          not the
          <br />
          moment.
        </h1>
        <p className="hero-sub">
          Light fabrics, easy silhouettes — built for Bangladesh's warmest days.
          Stay effortless when the temperature doesn't.
        </p>
        <a href="#" className="hero-cta">
          Shop the Edit
          <svg viewBox="0 0 24 24">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>
    </section>
  );
}
