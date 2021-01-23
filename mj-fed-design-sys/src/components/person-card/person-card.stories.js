import React from "react";
import { PersonCard } from "./person-card";
import data from "./data.json";

export default {
  title: "Components/PersonCard",
  component: PersonCard,
};

const Template = (args) => (
  <PersonCard name={data.name} title={data.title} image={data.image} />
);

export const PersonCardStory = Template.bind({});
