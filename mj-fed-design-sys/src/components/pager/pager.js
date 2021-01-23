import React, { Component } from "react";
import Pagination from "react-js-pagination";
import "./pager.scss";

export default class Pager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 15,
    };
  }

  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({ activePage: pageNumber });
  }

  render() {
    return (
      <div>
        <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={10}
          totalItemsCount={450}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange.bind(this)}
          itemClass="pagination__item"
        />
      </div>
    );
  }
}

// import React, { useState } from 'react';
// import PropTypes from "prop-types";
// import "./pager.scss";
// import Pagination from 'rc-pagination';

// export const Pager = (props) => {

//   return (
//     <>
//      <span>herrrdfkjsadklfj;sdlfjsdalk</span>
//      <Pagination/>
//      </>
//   );
// };
