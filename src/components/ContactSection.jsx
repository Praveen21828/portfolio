import React, { useState } from "react";
import {
  contactEmail,
  contactMethods,
  portfolioLinks,
} from "../data/contactData.js";

function ContactIcon({ name }) {
  const paths = {
    profile: (
      <>
        <circle cx="12" cy="8" r="3.2" />
        <path d="M5.5 20a6.5 6.5 0 0 1 13 0" />
      </>
    ),
    email: (
      <>
        <rect x="3.5" y="5" width="17" height="14" rx="2" />
        <path d="m4.5 7 7.5 6 7.5-6" />
      </>
    ),
    phone: (
      <path d="M7.2 3.8 10 7.5 8.3 9.3a14 14 0 0 0 6.4 6.4l1.8-1.7 3.7 2.8-.9 3.1a2 2 0 0 1-2.2 1.4A19 19 0 0 1 2.9 6.9a2 2 0 0 1 1.4-2.2l2.9-.9Z" />
    ),
    code: (
      <>
        <path d="m8.5 7-5 5 5 5" />
        <path d="m15.5 7 5 5-5 5" />
        <path d="m13.5 4-3 16" />
      </>
    ),
  };

  return (
    <svg
      aria-hidden="true"
      className="contact-method-icon"
      fill="none"
      focusable="false"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
    >
      {paths[name]}
    </svg>
  );
}

function ContactSection() {
  const [feedback, setFeedback] = useState(null);

  function handleInvalid() {
    setFeedback({
      type: "error",
      message: "Please correct the highlighted fields before continuing.",
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name").trim();
    const email = formData.get("email").trim();
    const message = formData.get("message").trim();

    if (!name || !email || !message) {
      setFeedback({
        type: "error",
        message: "Please enter your name, a valid email, and a message.",
      });
      return;
    }

    const subject = `Portfolio contact from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    const query = [
      `subject=${encodeURIComponent(subject)}`,
      `body=${encodeURIComponent(body)}`,
    ].join("&");
    const mailtoUrl = `mailto:${contactEmail}?${query}`;

    setFeedback({
      type: "info",
      message:
        "Your email app should open with a draft. This website has not sent the message; send it from your email app.",
    });
    window.location.href = mailtoUrl;
  }

  return (
    <div className="contact-layout">
      <div className="contact-intro">
        <p className="section-lead">
          For opportunities and professional inquiries, choose a contact method
          or prepare a message below.
        </p>
        <ul className="contact-method-list" aria-label="Contact methods">
          {contactMethods.map((method) => (
            <li className="contact-method-card" key={method.id}>
              <span className="contact-method-icon-wrap">
                <ContactIcon name={method.icon} />
              </span>
              <span className="contact-method-copy">
                <span className="contact-method-label">{method.label}</span>
                <a
                  aria-label={`${method.label}: ${method.value}`}
                  href={method.href}
                  rel={method.external ? "noopener noreferrer" : undefined}
                  target={method.external ? "_blank" : undefined}
                >
                  {method.value}
                  {method.external && (
                    <span aria-hidden="true" className="contact-external-mark">
                      ↗
                    </span>
                  )}
                </a>
              </span>
            </li>
          ))}
        </ul>
        <p className="contact-delivery-note">
          The form opens a draft in your email app. It does not send or store
          messages on this website.
        </p>
        <div
          className="portfolio-placeholder-links"
          aria-label="Portfolio links"
        >
          <p>Portfolio links</p>
          <span>
            Live Demo: Update placeholder before publishing (
            {portfolioLinks.liveDemo.url})
          </span>
          <span>
            Source Code: Update placeholder before publishing (
            {portfolioLinks.sourceCode.url})
          </span>
        </div>
      </div>

      <form
        className="contact-form"
        onInvalidCapture={handleInvalid}
        onSubmit={handleSubmit}
      >
        <div className="contact-form-heading">
          <p className="contact-form-eyebrow">Send a message</p>
          <h3>Let’s talk about your next role</h3>
          <p>Complete the fields and your email app will prepare a draft.</p>
        </div>
        <div className="contact-form-field">
          <label htmlFor="contact-name">Name</label>
          <input
            autoComplete="name"
            id="contact-name"
            maxLength={100}
            name="name"
            placeholder="Your name"
            required
          />
        </div>
        <div className="contact-form-field">
          <label htmlFor="contact-email-address">Email</label>
          <input
            autoComplete="email"
            id="contact-email-address"
            maxLength={254}
            name="email"
            placeholder="you@example.com"
            required
            type="email"
          />
        </div>
        <div className="contact-form-field">
          <label htmlFor="contact-message">Message</label>
          <textarea
            id="contact-message"
            maxLength={5000}
            name="message"
            placeholder="How can I help?"
            required
            rows={5}
          />
        </div>
        <button className="button button--primary contact-submit" type="submit">
          Prepare email draft <span aria-hidden="true">↗</span>
        </button>
        <p
          className={`contact-feedback${feedback ? ` contact-feedback--${feedback.type}` : ""}`}
          role={feedback?.type === "error" ? "alert" : "status"}
          aria-live={feedback?.type === "error" ? "assertive" : "polite"}
        >
          {feedback?.message ??
            "Your message stays in your email app until you choose to send it."}
        </p>
      </form>
    </div>
  );
}

export default ContactSection;
