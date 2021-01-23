import React from "react";
import PropTypes from "prop-types";
import "./person-card.scss";

export const PersonCard = (props) => {
  const { name, title, image } = props;
  return (
    <div className="person-card">
      <div className="person-card__image">
        <img src={`${image}`} alt="Madeline Jensen" />
      </div>
      <div className="person-card__info">
        <h3 className="person-card__name">{name}</h3>
        <div className="person-card__title">{title}</div>
      </div>
    </div>
  );
};

PersonCard.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
};
