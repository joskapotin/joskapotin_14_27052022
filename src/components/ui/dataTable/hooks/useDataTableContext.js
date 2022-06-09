import { useContext } from "react"
import { DataTableContext } from "../DataTable"

function useDataTableContext() {
  const [state, dispatch] = useContext(DataTableContext)
  return [state, dispatch]
}

export default useDataTableContext
