import React from "react";
import Button from "./button";

export default {
  title: "Components/Button",
  component: Button,
};

const Template = (args) => (
  <>
    <h2 className="section"> Button Styles </h2>
    <hr />
    <Button url="#" title="Button" />
    <div> 20px Open Sans | Bold | Ratio: 4:6:1 </div>
  </>
);

export const ButtonStory = Template.bind({});
