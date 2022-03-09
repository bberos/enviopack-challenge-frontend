import React from "react";
import ReactPaginate from "react-paginate";
import { Container } from "./styles";

export default function Paginate(props) {
  const { pageCount, itemsPerPage, productsList, setItemOffset } = props;
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % productsList.length;
    setItemOffset(newOffset);
  };
  return (
    <Container>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        marginPagesDisplayed={1}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        className="paginate"
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      />
    </Container>
  );
}
