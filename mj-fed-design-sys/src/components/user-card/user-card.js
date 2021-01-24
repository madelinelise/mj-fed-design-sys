import React from "react";
import "./user-card.scss";

const UserCard = ({ user }) => {
  console.log(user);
  return (
    <div className="user-card">
      <div className="user-card__image">
        <img src={`${user.picture.large}`} alt="Madeline Jensen" />
      </div>
      <div className="user-card__info">
        <h3 className="user-card__name user-card__info-item">
          {user.name.first} {user.name.last}
        </h3>
        <span className="user-card__info-item">{user.email}</span>
        <span className="user-card__info-item">{user.cell}</span>
        <span className="user-card__info-item">
          {user.dob.age} year old {user.gender}
        </span>
      </div>
    </div>
  );
};

export default UserCard;
