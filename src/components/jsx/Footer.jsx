import "../css/Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <span className="logo-foot">Vibe</span>
          <div className="social-icons">
            <div className="social-icon" title="Facebook">
              <svg viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </div>
            <div className="social-icon" title="YouTube">
              <svg viewBox="0 0 24 24">
                <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
                <polygon
                  points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"
                  fill="#cccccc"
                />
              </svg>
            </div>
            <div className="social-icon" title="X">
              <svg viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </div>
            <div className="social-icon" title="WhatsApp">
              <svg viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="footer-links-grid">
          <div className="footer-links-col">
            <span className="col-head">Shop</span>
            <a href="#">Men</a>
            <a href="#">Women</a>
            <a href="#">New Arrivals</a>
            <a href="#">Sale</a>
            <a href="#">Gift Cards</a>
          </div>
          <div className="footer-links-col">
            <span className="col-head">Help</span>
            <a href="#">Sizing Guide</a>
            <a href="#">Track Order</a>
            <a href="#">Returns</a>
            <a href="#">Shipping Info</a>
            <a href="#">Contact Us</a>
          </div>
          <div className="footer-links-col">
            <span className="col-head">Company</span>
            <a href="#">Our Story</a>
            <a href="#">Sustainability</a>
            <a href="#">Careers</a>
            <a href="#">Press</a>
            <a href="#">Stockists</a>
          </div>
        </div>

        <div className="footer-right">
          <span className="col-head">Stay in the loop</span>
          <p className="newsletter-note">
            New drops, style notes, and early access — right to your inbox.
          </p>
          <div className="newsletter-form">
            <input type="email" placeholder="your@email.com" />
            <button type="button">Join →</button>
          </div>
          <span className="accept-label">We Accept</span>
          <div className="payment-icons">
            <span className="pay-badge">Visa</span>
            <span className="pay-badge">Mastercard</span>
            <span className="pay-badge">bKash</span>
            <span className="pay-badge">Nagad</span>
            <span className="pay-badge">COD</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Vibe. All rights reserved.</p>
        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
          <a href="#">Cookie Preferences</a>
        </div>
      </div>
    </footer>
  );
}
