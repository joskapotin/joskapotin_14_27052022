import { DataTableContextProvider } from "./context/DataTableContext";
import PageSize from "./components/pageSize/PageSize";
import Filter from "./components/filter/Filter";
import Table from "./components/table/Table";
import Info from "./components/info/Info";
import Paginate from "./components/paginate/Paginate";
import "./DataTable.css";

function DataTable({ dataTable, id }) {
  return (
    <div className="dataTable_wrapper">
      <DataTableContextProvider dataTable={dataTable}>
        <div className="dataTable_header">
          <PageSize />
          <Filter />
        </div>
        <Table id={id} />
        <div className="dataTable_footer">
          <Info />
          <Paginate />
        </div>
      </DataTableContextProvider>
    </div>
  );
}

export default DataTable;
