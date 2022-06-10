import { createContext } from "react"
import PropTypes from "prop-types"
import DataTableContextProvider from "./contexts/DataTableContext"
import PageSize from "./components/pageSize/PageSize"
import Filter from "./components/filter/Filter"
import Table from "./components/table/Table"
import Info from "./components/info/Info"
import Paginate from "./components/paginate/Paginate"
import "./DataTable.css"

export const DataTableContext = createContext()

function DataTable({ dataTable }) {
  console.log("DataTable render")
  return (
    <DataTableContextProvider dataTable={dataTable}>
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
    </DataTableContextProvider>
  )
}

export default DataTable

DataTable.propTypes = {
  dataTable: PropTypes.shape({
    id: PropTypes.string.isRequired,
    columns: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        data: PropTypes.string.isRequired,
      })
    ).isRequired,
    getData: PropTypes.func.isRequired,
    options: PropTypes.shape({
      pageSizeOptions: PropTypes.arrayOf(PropTypes.number),
    }),
  }).isRequired,
}
