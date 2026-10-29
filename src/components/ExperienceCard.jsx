import React from "react";

function ExperienceCard({ experience: role }) {
  return (
    <article className="experience-card">
      <div className="experience-meta">
        <p className="experience-period">{role.period}</p>
        <h3>{role.role}</h3>
        <p className="experience-organization">{role.organization}</p>
      </div>
      <div className="experience-content">
        <p className="experience-project">{role.project}</p>
        <ul className="experience-highlights">
          {role.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
        <ul className="technology-list" aria-label="Technologies">
          {role.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
