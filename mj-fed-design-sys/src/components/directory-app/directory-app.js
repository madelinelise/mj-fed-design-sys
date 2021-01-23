import React from "react";
import PropTypes from "prop-types";
import { Pager } from "../pager/pager";
import { PersonCard } from "../person-card/person-card";

export const DirectoryApp = () => {
  return (
    <>
      <PersonCard name="madeline" title="test" image="thisisanimage" />
      <Pager />
    </>
  );
};

PersonCard.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
};
