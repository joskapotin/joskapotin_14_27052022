import { useEffect } from "react"
import useDataTableContext from "../../hooks/useDataTableContext"
import { setFilterResults } from "../../reducer/actionCreators"
import { sortData, filterData } from "./utils"
import Head from "./Head"
import Body from "./Body"

function Table() {
  const [state, dispatch] = useDataTableContext()
  const {
    id,
    data,
    currentPage,
    pageSize,
    sortBy,
    sortDirection,
    filter,
    filterResults,
  } = state

  const sortedData = sortData({ filterResults, sortBy, sortDirection })
  const paginatedData = sortedData.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  )

  useEffect(() => {
    dispatch(setFilterResults(filterData(data, filter)))
  }, [filter, data, dispatch])

  return (
    <table className="dataTable" id={id}>
      <Head />
      <Body data={paginatedData} />
    </table>
  )
}

export default Table
