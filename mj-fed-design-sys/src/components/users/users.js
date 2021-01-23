import React from "react";
import UserCard from "../user-card/user-card";
import { USER_PER_PAGE } from "../../global/constants";

const users = ({ users, page }) => {
  const startIndex = (page - 1) * USER_PER_PAGE;
  const selectedUsers = users.slice(startIndex, startIndex + USER_PER_PAGE);
  return selectedUsers.map((user) => (
    <UserCard user={user} key={user.login.uuid} />
  ));
};

export default users;
