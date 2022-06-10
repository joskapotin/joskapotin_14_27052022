import { createContext, useReducer, useMemo } from "react"
import PropTypes from "prop-types"
import dataTableReducer, { initialState } from "../reducer/reducer"

export const DataTableContext = createContext()

function DataTableContextProvider({ children, dataTable }) {
  const [state, dispatch] = useReducer(dataTableReducer, { ...initialState, ...dataTable })

  const features = useMemo(() => [state, dispatch], [state, dispatch])

  return <DataTableContext.Provider value={features}>{children}</DataTableContext.Provider>
}

export default DataTableContextProvider

DataTableContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
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
