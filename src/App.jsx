import React from "react";
import Button from "./components/Button.jsx";
import ContactSection from "./components/ContactSection.jsx";
import ExperienceCard from "./components/ExperienceCard.jsx";
import ProjectCard from "./components/ProjectCard.jsx";
import RevealSection from "./components/RevealSection.jsx";
import SectionHeading from "./components/SectionHeading.jsx";
import SiteFooter from "./components/SiteFooter.jsx";
import SiteHeader from "./components/SiteHeader.jsx";
import { profileLinks } from "./data/contactData.js";
import { experience, projects, skills } from "./data/portfolioData.js";

const sections = [
  { id: "about", title: "About", eyebrow: "A little about me" },
  { id: "skills", title: "Skills", eyebrow: "Tools of the trade" },
  { id: "projects", title: "Featured Projects", eyebrow: "Selected work" },
  { id: "experience", title: "Experience", eyebrow: "Professional experience" },
  { id: "contact", title: "Contact", eyebrow: "Let’s connect" },
];

function SectionIntro({ section, children }) {
  return (
    <>
      <div className="section-topline">
        <span className="section-index">{section.number}</span>
        <span className="section-rule" aria-hidden="true" />
      </div>
      <SectionHeading
        id={`${section.id}-title`}
        eyebrow={section.eyebrow}
        title={section.title}
      />
      {children}
    </>
  );
}

function App() {
  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content">
        <section className="hero" id="home" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="eyebrow-line" aria-hidden="true" />
              Python full-stack developer
            </p>
            <h1 id="hero-title">
              Praveenkumar K
              <br />
              {/* <span>K</span> */}
            </h1>
            <p className="hero-description">
              Computer Science Engineering graduate building responsive,
              data-driven web applications with React, Django, and Python.
            </p>
            <div className="hero-actions">
              <Button href="#projects">Explore projects</Button>
              <Button href="#contact" variant="secondary">
                Get in touch <span aria-hidden="true">↗</span>
              </Button>
            </div>
            <nav className="hero-profile-links" aria-label="Professional profiles">
              {profileLinks.map((profile) => (
                <a
                  href={profile.href}
                  key={profile.id}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {profile.label} <span aria-hidden="true">↗</span>
                </a>
              ))}
            </nav>
          </div>
          <aside className="hero-aside" aria-label="Professional focus">
            {/* <p className="aside-label">CAREER GOAL</p>
            <p className="aside-value">Full-stack development</p>
            <div className="aside-divider" /> */}
            <p className="aside-label">TARGET ROLES</p>
            <ul className="role-list">
              <li>Python Full-Stack Developer</li>
              <li>Junior Software Developer</li>
            </ul>
            <span className="aside-index" aria-hidden="true">
              01 / 06
            </span>
          </aside>
          <a className="scroll-cue" href="#about">
            <span className="scroll-cue-line" aria-hidden="true" />
            Scroll to explore
          </a>
        </section>

        <RevealSection
          className="content-section"
          id="about"
          aria-labelledby="about-title"
        >
          <SectionIntro section={{ ...sections[0], number: "02" }}>
            <div className="about-copy">
              <p>
                I’m a Computer Science Engineering graduate seeking a
                full-stack developer role. I build web applications from
                responsive interfaces through backend APIs, using React,
                Django, and Python.
              </p>
              <p>
                My project work includes a photo-sharing platform in progress,
                a rule-based stock screening system, and a weather application
                integrated with a public API.
              </p>
            </div>
          </SectionIntro>
        </RevealSection>

        <RevealSection
          className="content-section"
          id="skills"
          aria-labelledby="skills-title"
        >
          <SectionIntro section={{ ...sections[1], number: "03" }}>
            <div className="skill-grid">
              {skills.map((group) => (
                <article className="skill-group" key={group.title}>
                  <h3>{group.title}</h3>
                  <ul className="technology-list">
                    {group.items.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </SectionIntro>
        </RevealSection>

        <RevealSection
          className="content-section"
          id="projects"
          aria-labelledby="projects-title"
        >
          <SectionIntro section={{ ...sections[2], number: "04" }}>
            <p className="section-lead">
              Completed projects and work currently in progress.
            </p>
            <div className="project-grid">
              {projects.map((project, index) => (
                <ProjectCard
                  index={index + 1}
                  key={project.title}
                  project={project}
                />
              ))}
            </div>
          </SectionIntro>
        </RevealSection>

        <RevealSection
          className="content-section"
          id="experience"
          aria-labelledby="experience-title"
        >
          <SectionIntro section={{ ...sections[3], number: "05" }}>
            <ExperienceCard experience={experience} />
          </SectionIntro>
        </RevealSection>

        <RevealSection
          className="content-section contact-section"
          id="contact"
          aria-labelledby="contact-title"
        >
          <SectionIntro section={{ ...sections[4], number: "06" }}>
            <ContactSection />
          </SectionIntro>
        </RevealSection>
      </main>
      <SiteFooter />
    </div>
  );
}

export default App;
