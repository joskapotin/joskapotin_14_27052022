import useDataTableContext from "../../hooks/useDataTableContext"
import { setPageSize } from "../../reducer/actionCreators"

function PageSize() {
  const [state, dispatch] = useDataTableContext()
  const {
    pageSize,
    options: { pageSizeOptions },
  } = state

  const handleChange = (e) => {
    dispatch(setPageSize(parseInt(e.target.value, 10)))
  }

  return (
    <div className="dataTable_length">
      <label>
        show{" "}
        <select onChange={handleChange} value={pageSize}>
          {pageSizeOptions.map((option) => (
            <option key={`option-${option}`} value={option}>
              {option}
            </option>
          ))}
        </select>{" "}
        entries
      </label>
    </div>
  )
}

export default PageSize
