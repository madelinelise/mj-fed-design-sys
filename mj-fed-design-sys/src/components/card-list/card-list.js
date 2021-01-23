import React from "react";
import PropTypes from "prop-types";
import "./card-list.scss";
import { PersonCard } from "../person-card/person-card";

export const CardList = (props) => {
  const { items } = props;
  const listItems = items.map((item) => (
    <PersonCard name={item.name} title={item.title} image={item.image} />
  ));
  return <ul className="list">{listItems}</ul>;
};
