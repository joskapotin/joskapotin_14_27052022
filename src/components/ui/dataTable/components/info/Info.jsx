import { useDataTableContext } from "../../context/DataTableContext";

function Info() {
  const [{ data, currentPage, pageSize }] = useDataTableContext();
  const totalRow = data.length;
  const totalPage = Math.ceil(totalRow / pageSize);
  const currentRow = (currentPage - 1) * pageSize + 1;
  const lastRow =
    pageSize > totalRow || currentPage === totalPage ? totalRow : currentPage * pageSize;

  return (
    <div className="dataTable_info" role="status" aria-live="polite">
      Showing {currentRow} to {lastRow} of {totalRow} entries (filtered from 45 total entries)
    </div>
  );
}

export default Info;
