import React, { useEffect, useRef } from "react";

function RevealSection({ children, className, ...sectionProps }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return undefined;
    }

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      section.classList.add("is-visible");
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("is-visible");
          observer.unobserve(section);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -24px 0px" },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      {...sectionProps}
      className={`${className} reveal-section`}
      ref={sectionRef}
    >
      {children}
    </section>
  );
}

export default RevealSection;
