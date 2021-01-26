import React from "react";
import { CSVLink } from "react-csv";
import { USER_PER_PAGE } from "../../global/constants";
import UserCard from "../user-card/user-card";
import "./users.scss";
import "../button/button.scss";

const Users = ({ users, page }) => {
  const startIndex = (page - 1) * USER_PER_PAGE;
  const selectedUsers = users.slice(startIndex, startIndex + USER_PER_PAGE);

  const userList = selectedUsers.map((user) => <UserCard user={user} />);

  return (
    <>
      <CSVLink
        className="button"
        tabindex="0"
        role="button"
        aria-pressed="false"
        data={selectedUsers}
        aria-label="Download a csv of users shown"
      >
        Download csv
      </CSVLink>
      <ul className="user-cards">{userList}</ul>
    </>
  );
};

export default Users;
