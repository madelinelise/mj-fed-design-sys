// import React, { Component } from "react";
// import Pagination from "react-js-pagination";
// import { CardList } from "../card-list/card-list";


// export default class UserDirectory extends Component {
//   constructor(props) {
//     super(props);
//     const {listItems} = props;
//     this.state = {
//       activePage: 15,
//     };
//   }

//   handlePageChange(pageNumber) {
//     console.log(`active page is ${pageNumber}`);
//     this.setState({ activePage: pageNumber });
//   }

//   render() {
//     return (
//       <div>
//         <Pagination
//           activePage={this.state.activePage}
//           itemsCountPerPage={10}
//           totalItemsCount={450}
//           pageRangeDisplayed={5}
//           onChange={this.handlePageChange.bind(this)}
//           itemClass="pagination__item"
//         />
//         <CardList items={listItems} />
//       </div>
//     );
//   }
// }
