import React from "react";
import UserCard from "./user-card";
import data from "./data.json";

export default {
  title: "Components/User Card",
  component: 'User Card',
};

const Template = (args) => (
  <UserCard user={data.user}
   />
);

export const UserCardStory = Template.bind({});
