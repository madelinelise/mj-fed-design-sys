import React from "react";
import PropTypes from "prop-types";
import "./person-card.scss";

export const PersonCard = (props) => {
  const { name, title, image } = props;
  return (
    <div className="person-card">
      <div className="person-card__image">
      <img src={`${image}`} alt="Madeline Jensen"/>
      </div>
      <div className="person-card__name">{name}</div>
      <div className="person-card__title">{title}</div>
    </div>
  );
};

PersonCard.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
};
