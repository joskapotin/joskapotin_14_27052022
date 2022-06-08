import { useEffect } from "react";
import useDataTableContext from "../../hooks/useDataTableContext";
import { setCurrentPage, setTotalPages } from "../../reducer/actionCreators";

function Paginate() {
  const [state, dispatch] = useDataTableContext();
  const { id, currentPage, totalPages, pageSize, filterResults } = state;

  useEffect(() => {
    dispatch(setTotalPages(Math.ceil(filterResults.length / pageSize)));
  }, [filterResults, pageSize, dispatch]);

  const handleClick = page => {
    dispatch(setCurrentPage(page));
  };

  const ButtonElements = () => {
    const ButtonElements = [];

    for (let i = 0; i <= totalPages + 1; i++) {
      const className = ["paginate_button"];
      let change = i;
      let text = i;

      if (i === 0) {
        className.push("previous");
        change = currentPage - 1;
        text = "Previous";
      }

      if (i === totalPages + 1) {
        className.push("next");
        change = currentPage + 1;
        text = "Next";
      }

      if (i === currentPage) {
        className.push("paginate_current");
      }

      ButtonElements.push(
        <button
          key={`page-${i}`}
          className={className.join(" ")}
          aria-controls={id}
          onClick={() => handleClick(change)}
          disabled={
            (currentPage === 1 && i === 0) || (currentPage === totalPages && i === totalPages + 1)
          }
        >
          {text}
        </button>
      );
    }
    return ButtonElements;
  };

  return <div className="dataTable_paginate">{ButtonElements()}</div>;
}

export default Paginate;
