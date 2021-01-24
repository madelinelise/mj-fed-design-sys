import React from "react";
import "./pagination.scss";

const Pagination = ({ totalPages, handleClick }) => {
  const pages = [...Array(totalPages).keys()].map((num) => num + 1);

  // TODO: Add previous & next buttons.

  return (
    <div className="pagination">
      {pages.map((num) => (
        <>
        <button
          key={num}
          onClick={() => handleClick(num)}
          className="button"
          aria-label={"Go to page " + `${num}`}
        >
          {num}
        </button>
        </>
      ))}
    </div>
  );
};

export default Pagination;
