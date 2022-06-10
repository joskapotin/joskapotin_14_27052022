import { useContext } from "react"
import { DataTableContext } from "../contexts/DataTableContext"

function useDataTableContext() {
  const [state, dispatch] = useContext(DataTableContext)
  return [state, dispatch]
}

export default useDataTableContext
