import { useState } from "react";

const NAV_LINKS = [
  { label: "Home",    href: "#hero" },
  { label: "About",   href: "#about" },
  { label: "Skills",  href: "#skills" },
  { label: "Works",   href: "#works" },
  { label: "Contact", href: "#contact" },
];

function Navbar({ darkMode, setDarkMode }) {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (label) => {
    setActive(label);
    setMenuOpen(false); // close mobile menu on click
  };

  return (
    <nav
      style={{
        width: "90%",
        maxWidth: "1200px",
        margin: "20px auto",
        padding: "15px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: "15px",
        backdropFilter: "blur(15px)",
        background: darkMode
          ? "rgba(34, 40, 49, 0.7)"
          : "rgba(238, 238, 238, 0.7)",
        color: darkMode ? "#EEE" : "#222831",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
        position: "sticky",
        top: 20,
        zIndex: 1000,
        transition: "all 0.5s ease",
      }}
    >
      {/* Logo */}
      <div style={{ fontWeight: "bold", fontSize: "1.5rem", fontFamily: "'Playfair Display', serif" }}>
        Rijoana
      </div>

      {/* Desktop Links */}
      <div className="nav-links-desktop" style={{ display: "flex", gap: "20px" }}>
        {NAV_LINKS.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            className="nav-link"
            onClick={() => handleNavClick(label)}
            style={{
              color: active === label ? "#76ABAE" : "inherit",
              fontWeight: active === label ? 700 : "bold",
              borderBottom: active === label ? "2px solid #76ABAE" : "2px solid transparent",
              paddingBottom: "2px",
              transition: "all 0.2s ease",
            }}
          >
            {label}
          </a>
        ))}
      </div>

      {/* Right side: toggle + hamburger */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        {/* Dark/Light Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          style={{
            background: darkMode ? "#76ABAE" : "#31363F",
            color: "#EEE",
            border: "none",
            borderRadius: "20px",
            padding: "8px 16px",
            cursor: "pointer",
            fontWeight: "bold",
            transition: "all 0.3s ease",
            whiteSpace: "nowrap",
          }}
        >
          {darkMode ? "Light" : "Dark"}
        </button>

        {/* Hamburger button */}
        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Slide-down Menu */}
      <div
        className={`mobile-menu ${menuOpen ? "open" : ""} ${darkMode ? "dark-menu" : ""}`}
        style={{ color: darkMode ? "#EEE" : "#222831" }}
      >
        {NAV_LINKS.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            className={active === label ? "active-link" : ""}
            onClick={() => handleNavClick(label)}
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;