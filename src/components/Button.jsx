import React from "react";

function Button({ children, href, variant = "primary" }) {
  return (
    <a className={`button button--${variant}`} href={href}>
      {children}
    </a>
  );
}

export default Button;
