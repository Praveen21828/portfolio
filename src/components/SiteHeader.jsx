import React, { useEffect, useState } from "react";

const navigationItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

function SiteHeader() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("main section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (first, second) =>
              Math.abs(first.boundingClientRect.top) -
              Math.abs(second.boundingClientRect.top),
          );
        if (visibleSections[0]) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      { rootMargin: "-15% 0px -70% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined;
    }

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Praveenkumar K, home">
        <span className="brand-mark" aria-hidden="true">
          P
        </span>
        <span className="brand-name">Praveenkumar K</span>
      </a>
      <button
        className="menu-toggle"
        type="button"
        aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
        aria-controls="site-navigation"
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
      >
        <span className="menu-toggle-lines" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
      </button>
      <nav
        className={`site-nav${isMenuOpen ? " is-open" : ""}`}
        id="site-navigation"
        aria-label="Main navigation"
      >
        {navigationItems.map((item) => (
          <a
            aria-current={
              activeSection === item.href.slice(1) ? "location" : undefined
            }
            className="nav-link"
            href={item.href}
            key={item.href}
            onClick={() => {
              setActiveSection(item.href.slice(1));
              setIsMenuOpen(false);
            }}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default SiteHeader;
