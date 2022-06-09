import useDataTableContext from "../../hooks/useDataTableContext"

function Info() {
  const [state] = useDataTableContext()
  const { data, currentPage, totalPages, pageSize, filter, filterResults } =
    state

  const totalEntries = data.length
  const totalRow = filterResults.length
  const currentRow = (currentPage - 1) * pageSize + 1
  const lastRow =
    pageSize > totalRow || currentPage === totalPages
      ? totalRow
      : currentPage * pageSize

  return (
    <div className="dataTable_info" role="status" aria-live="polite">
      Showing {currentRow} to {lastRow} of {totalRow} entries{" "}
      {filter && <span>(filtered from {totalEntries} total entries)</span>}
    </div>
  )
}

export default Info
