import React from "react";
import { profileLinks } from "../data/contactData.js";

const footerSections = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

function SiteFooter() {
  return (
    <footer className="site-footer">
      <a className="footer-brand" href="#home">
        Praveenkumar K.
      </a>
      <nav className="footer-nav" aria-label="Footer navigation">
        {footerSections.map((section) => (
          <a href={section.href} key={section.href}>
            {section.label}
          </a>
        ))}
      </nav>
      <nav className="footer-social-links" aria-label="Professional profiles">
        {profileLinks.map((profile) => (
          <a
            href={profile.href}
            key={profile.id}
            rel="noopener noreferrer"
            target="_blank"
          >
            {profile.label}
          </a>
        ))}
      </nav>
      <p>© {new Date().getFullYear()} Praveenkumar K</p>
      <a className="back-to-top" href="#home">
        Back to top <span aria-hidden="true">↑</span>
      </a>
    </footer>
  );
}

export default SiteFooter;
