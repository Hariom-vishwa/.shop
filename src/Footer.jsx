import { Link } from "react-router-dom";
import "./Styles/App.css";

export function Footer() {
  return (
    <>
      <footer>
        <div class="footer-container">
          <div class="footer-logo">
            <h1 class="logo">.Shop</h1>
          </div>

          <div class="footer-links">
            <h2>Quick Links</h2>
            <ul>
              <li>
                <Link className="footer-link" href="/about">About Us</Link>
              </li>
              <li>
                <Link className="footer-link" href="/shop">Shop</Link>
              </li>
              <li>
                <Link className="footer-link" href="/faq">FAQ</Link>
              </li>
              <li>
                <Link className="footer-link" href="/contact">Contact Us</Link>
              </li>
              <li>
                <Link className="footer-link" href="/privacy-policy">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          <div class="footer-newsletter">
            <h2>Subscribe to our Newsletter</h2>
            <p>Get the latest updates on new products and upcoming sales.</p>
            <form action="/subscribe" method="POST">
              <input type="email" placeholder="Enter your email" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>

          <div class="footer-contact">
            <h2>Contact Us</h2>
            <p>Email: support@dotshop.com</p>
            <p>Phone: +1 (555) 123-4567</p>
            <div class="social-icons">
              <a href="https://facebook.com">
                <i class="fab fa-facebook"></i>
              </a>
              <a href="https://twitter.com">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com">
                <i class="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <p>&copy; 2024 .Shop. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
}
