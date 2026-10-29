import React from "react";

function SectionHeading({ eyebrow, id, title }) {
  return (
    <div className="section-heading">
      <p className="section-eyebrow">{eyebrow}</p>
      <h2 id={id}>{title}</h2>
    </div>
  );
}

export default SectionHeading;
