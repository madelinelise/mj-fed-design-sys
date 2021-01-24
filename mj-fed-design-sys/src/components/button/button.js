import React from "react";
import "./button.scss";
import PropTypes from "prop-types";

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

Button.propTypes = {
  button: {
    url: PropTypes.string,
    title: PropTypes.string,
  },
};

export default Button;
