import { useDataTableContext } from "../../context/DataTableContext";
import { setCurrentPage } from "../../reducer/actionCreators";

function Paginate() {
  const [state, dispatch] = useDataTableContext();
  const { id, data, currentPage, pageSize } = state;
  const totalRow = data.length;
  const totalPage = Math.ceil(totalRow / pageSize);

  const handleClick = page => {
    dispatch(setCurrentPage(page));
  };

  const createPageButtonElements = () => {
    const pageButtonElements = [];
    for (let i = 1; i <= totalPage; i++) {
      pageButtonElements.push(
        <button
          key={`page-${i}`}
          className={`paginate_button ${i === currentPage ? "paginate_current" : ""}`}
          aria-controls={id}
          onClick={() => handleClick(i)}
        >
          {i}
        </button>
      );
    }
    return pageButtonElements;
  };

  return (
    <div className="dataTable_paginate">
      <button
        className="paginate_button previous"
        aria-controls={id}
        onClick={() => handleClick(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {createPageButtonElements()}
      <button
        className="paginate_button next"
        aria-controls={id}
        onClick={() => handleClick(currentPage + 1)}
        disabled={currentPage === totalPage}
      >
        Next
      </button>
    </div>
  );
}

export default Paginate;
