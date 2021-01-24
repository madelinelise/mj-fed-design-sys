import React from "react";
import { CSVLink, CSVDownload } from "react-csv";
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
        id="toggle"
        aria-pressed="false"
        data={selectedUsers}
      >
        Download csv
      </CSVLink>
      <ul className="user-cards">{userList}</ul>
    </>
  );
};

export default Users;
