import React from "react";
import PropTypes from "prop-types";
import "./heading.scss";

export const Heading = (props) => {
  const { title, headingLevel } = props;
  const validHeadingLevels = ["h1", "h2", "h3", "h4", "h5", "h6"];

  const safeHeading = headingLevel ? headingLevel.toLowerCase() : "";
  const Title = validHeadingLevels.includes(safeHeading) ? safeHeading : "p";

  return <Title className="heading">{title}</Title>;
};

Heading.propTypes = {
  title: PropTypes.string,
  heading: PropTypes.string,
};
