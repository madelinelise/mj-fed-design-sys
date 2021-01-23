import React from "react";
import App from "../../App";
import { DirectoryApp } from "./directory-app";

export default {
  title: "Components/Directory App",
  component: 'Directory App',
};

const Template = () => (
  <DirectoryApp />
);

export const DirectoryAppStory = Template.bind({});
