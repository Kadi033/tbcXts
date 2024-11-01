import "./Header.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className="Header">
      <nav>
        <ul className="Header-ul">
          <li>
            <Link className="Link" href="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="Link" href="/products">
              Products
            </Link>
          </li>
          <li>
            <Link className="Link" href="/contact">
              Contact
            </Link>
          </li>
          <li>
            <Link className="Link" href="/blog">
              Blog
            </Link>
          </li>
          <li>
            <Link className="Link" href="/profile">
              Profile
            </Link>
          </li>
        </ul>
        <Link className="Header-logo Link" href="/">
          KD ZONE
        </Link>
      </nav>
      <a href="/api/auth/logout">
        <button className="header-button">Logout</button>
      </a>
    </header>
  );
}
