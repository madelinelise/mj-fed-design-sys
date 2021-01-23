import React from "react";
import Pagination from "./pagination";
import data from "./data.json";

export default {
  title: "Components/Pagination",
  component: Pagination,
};

// TODO: Mock handleClick() for Storybook.

const Template = (args) => (
  <Pagination num={data.num} totalPages={data.totalPages} />
);

export const PaginationStory = Template.bind({});
