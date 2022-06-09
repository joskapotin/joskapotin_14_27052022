import { createContext, useReducer, useMemo } from "react"
import PropTypes from "prop-types"
import dataTableReducer, { initialState } from "./reducer/reducer"
import PageSize from "./components/pageSize/PageSize"
import Filter from "./components/filter/Filter"
import Table from "./components/table/Table"
import Info from "./components/info/Info"
import Paginate from "./components/paginate/Paginate"
import "./DataTable.css"

export const DataTableContext = createContext()

function DataTable({ dataTable }) {
  const [state, dispatch] = useReducer(dataTableReducer, {
    ...initialState,
    ...dataTable,
  })

  const features = useMemo(() => [state, dispatch], [state, dispatch])

  return (
    <DataTableContext.Provider value={features}>
      <div className="dataTable_wrapper">
        <div className="dataTable_header">
          <PageSize />
          <Filter />
        </div>
        <Table />
        <div className="dataTable_footer">
          <Info />
          <Paginate />
        </div>
      </div>
    </DataTableContext.Provider>
  )
}

export default DataTable

DataTable.propTypes = {
  dataTable: PropTypes.shape({
    id: PropTypes.string,
    columns: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        data: PropTypes.string,
      })
    ),
    data: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string).isRequired),
    options: PropTypes.shape({
      pageSizeOptions: PropTypes.arrayOf(PropTypes.number),
    }),
    currentPage: PropTypes.number,
    totalPages: PropTypes.number,
    pageSize: PropTypes.number,
    sortBy: PropTypes.string,
    sortDirection: PropTypes.string,
    filter: PropTypes.string,
    filterResults: PropTypes.arrayOf(
      PropTypes.objectOf(PropTypes.string).isRequired
    ),
  }).isRequired,
}
