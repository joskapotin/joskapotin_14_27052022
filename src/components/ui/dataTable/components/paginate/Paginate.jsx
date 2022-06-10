import { useEffect } from "react"
import useDataTableContext from "../../hooks/useDataTableContext"
import { setCurrentPage, setTotalPages } from "../../reducer/actionCreators"

function Paginate() {
  const [state, dispatch] = useDataTableContext()
  const { id, data, currentPage, totalPages, pageSize } = state

  useEffect(() => {
    dispatch(setTotalPages(Math.ceil(data.length / pageSize)))
  }, [data, pageSize, dispatch])

  const handleClick = (page) => {
    dispatch(setCurrentPage(page))
  }

  const ButtonElements = () => {
    const buttonElements = []

    for (let i = 0; i <= totalPages + 1; i += 1) {
      const className = ["paginate_button"]
      let change = i
      let text = i

      if (i === 0) {
        className.push("previous")
        change = currentPage - 1
        text = "Previous"
      }

      if (i === totalPages + 1) {
        className.push("next")
        change = currentPage + 1
        text = "Next"
      }

      if (i === currentPage && totalPages > 1) {
        className.push("paginate_current")
      }

      buttonElements.push(
        <button
          type="button"
          key={`page-${i}`}
          className={className.join(" ")}
          aria-controls={id}
          onClick={() => handleClick(change)}
          disabled={(currentPage === 1 && i === 0) || (currentPage === totalPages && i === totalPages + 1) || totalPages < 2}
        >
          {text}
        </button>
      )
    }
    return buttonElements
  }

  return <div className="dataTable_paginate">{ButtonElements()}</div>
}

export default Paginate
