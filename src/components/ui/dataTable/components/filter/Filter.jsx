import { useEffect } from "react"
import useDataTableContext from "../../hooks/useDataTableContext"
import { setFilter, setData } from "../../reducer/actionCreators"
import { filterData } from "../../utils/utils"

function Filter() {
  const [state, dispatch] = useDataTableContext()
  const { data, filter } = state

  useEffect(() => {
    dispatch(setData(filterData(data, filter)))
  }, [filter, dispatch])

  const handleChange = (e) => {
    dispatch(setFilter(e.target.value))
  }

  return (
    <div className="dataTable_filter">
      <label>
        Search: <input type="search" placeholder="" onChange={handleChange} value={filter} />
      </label>
    </div>
  )
}

export default Filter
