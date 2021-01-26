import React from "react";
import "./user-card.scss";
import PropTypes from "prop-types";

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <div className="user-card__image">
        <img src={`${user.picture.large}`} alt={`${user.name.first}`} />
      </div>
      <div className="user-card__info">
        {user.name.first && user.name.last && (
          <h3 className="user-card__name user-card__info-item">
            {user.name.first} {user.name.last}
          </h3>
        )}

        {user.dob.age && user.gender && (
          <span className="user-card__info-item">
            {user.dob.age} year old {user.gender}
          </span>
        )}

        {user.email && (
          <span className="user-card__info-item">
            <a href={`${user.email}`} className="user-card__info-item">
              {user.email}
            </a>
          </span>
        )}

        {user.cell && (
          <span className="user-card__info-item">
            <a href={`${user.cell}`} className="user-card__info-item">
              {user.cell}
            </a>
          </span>
        )}
      </div>
    </div>
  );
};

UserCard.propTypes = {
  user: {
    name: {
      first: PropTypes.string,
      last: PropTypes.string,
    },
    email: PropTypes.string,
    cell: PropTypes.string,
  },
};

export default UserCard;
