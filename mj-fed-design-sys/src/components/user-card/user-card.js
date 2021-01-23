import React from "react";

const User = ({ user }) => {
  return (

    <div className="person-card">
      <div className="person-card__image">
        {/* <img src={`${image}`} alt="Madeline Jensen" /> */}
      </div>
      <div className="person-card__info">
        <h3 className="person-card__name">{user.name.first} {user.name.last}</h3>
        <div className="person-card__title">{user.title}</div>
      </div>
    </div>
  );
};

export default User;
