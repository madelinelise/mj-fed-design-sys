import React from "react";
import "./button.scss";

const Button = (button) => {
  let href;
  if (button.url) {
    href = button.url;
  }
  const info = button.info || button.title;

  const Element = href ? "a" : "button";
  const onClickCallback = (e) => {
    if (typeof button.onClick === "function") {
      e.preventDefault();
      e.persist();
      button.onClick(e);
    }
  };

  return (
    <Element
      className="button"
      href={href}
      title={info}
      aria-label={info}
      onClick={onClickCallback}
    >
      {button.children || button.title}
    </Element>
  );
};

export default Button;
