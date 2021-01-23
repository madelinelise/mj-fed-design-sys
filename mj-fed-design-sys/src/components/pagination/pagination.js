import React from 'react'
import "./pagination.scss";

const Pagination = ({ totalPages, handleClick }) => {
  const pages = [...Array(totalPages).keys()].map(num => num+1);
  return (
    <div className="pagination">
      { pages.map(num => (
        <button
          key={num}
          onClick={() => handleClick(num)}
          className="pagination__item"
        >{num}</button>
      )) }
    </div>
  )
}

export default Pagination
