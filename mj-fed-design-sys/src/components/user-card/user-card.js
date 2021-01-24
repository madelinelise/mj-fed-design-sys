import React from "react";
import "./user-card.scss";

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <div className="user-card__image">
        <img src={`${user.picture.large}`} alt="Madeline Jensen" />
      </div>
      <div className="user-card__info">
        <h3 className="user-card__name user-card__info-item">
          {user.name.first} {user.name.last}
        </h3>
        <span className="user-card__info-item">
          {user.dob.age} year old {user.gender}
        </span>
        <a href={`${user.email}`} className="user-card__info-item">
          {user.email}
        </a>
        <a href={`${user.cell}`} className="user-card__info-item">
          {user.cell}
        </a>
      </div>
    </div>
  );
};

export default UserCard;
