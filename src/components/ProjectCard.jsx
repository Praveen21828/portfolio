import React from "react";

function ProjectCard({ project, index }) {
  return (
    <article
      className="project-card"
      aria-label={`Featured project ${index}: ${project.title}`}
    >
      <div
        className="project-visual-placeholder"
        role="img"
        aria-label={`Screenshot not provided for ${project.title}`}
      >
        <span className="placeholder-frame" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
        <span className="placeholder-title">Screenshot unavailable</span>
        <span className="placeholder-caption">
          Authentic project screenshot not provided
        </span>
      </div>
      <div className="project-card-content">
        <div className="project-title-row">
          <h3>{project.title}</h3>
          <span className={`status-badge status-badge--${project.statusType}`}>
            <span aria-hidden="true" />
            {project.status}
          </span>
        </div>
        <p className="project-copy">{project.description}</p>
        <div className="project-links" aria-label={`${project.title} links`}>
          <div className="project-link-item">
            <span className="project-link-label">Source Code</span>
            {project.sourceUrl && !project.sourceUrlIsPlaceholder ? (
              <a
                href={project.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repository <span aria-hidden="true">↗</span>
              </a>
            ) : (
              <span className="project-link-unavailable">
                Repository coming soon
              </span>
            )}
          </div>
          <div className="project-link-item">
            <span className="project-link-label">Live Demo</span>
            {project.demoUrl && !project.demoUrlIsPlaceholder ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open Demo <span aria-hidden="true">↗</span>
              </a>
            ) : (
              <span className="project-link-unavailable">
                Demo coming soon
              </span>
            )}
          </div>
        </div>
        <details className="project-details">
          <summary>View implemented features</summary>
          <ul className="project-feature-list">
            {project.features.map((feature) => (
              <li key={feature.label}>
                <span>{feature.label}</span>
                <span
                  className={`feature-status feature-status--${feature.status
                    .toLowerCase()
                    .replaceAll(" ", "-")}`}
                >
                  {feature.status}
                </span>
              </li>
            ))}
          </ul>
          <p>{project.technicalDetails}</p>
        </details>
        <ul
          className="technology-list project-technologies"
          aria-label="Technologies"
        >
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ProjectCard;
