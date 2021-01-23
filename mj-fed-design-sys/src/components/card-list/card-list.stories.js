import React from "react";
import { CardList } from "./card-list";
import data from "./data.json";

export default {
  title: "Components/Card List",
  component: "Card List",
};

const Template = (args) => <CardList items={data.items} />;

export const CardListStory = Template.bind({});
