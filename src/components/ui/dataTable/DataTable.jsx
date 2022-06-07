import { useReducer, useEffect } from "react";
import {
  setColumns,
  setData,
  setCurrentPage,
  setPageSize,
  setSortBy,
  setSortDirection,
  setFilter,
} from "./logic/actionCreators";
import dataTableReducer from "./logic/reducer";
import Table from "./table/Table";
import "./DataTable.css";

const initialState = {
  data: [],
  columns: [],
  currentPage: 1,
  pageSize: 10,
  sortBy: "",
  sortDirection: "asc",
  filter: "",
};

function DataTable({ dataTable }) {
  const [state, dispatch] = useReducer(dataTableReducer, initialState);
  const { data, columns, currentPage, pageSize, sortBy, sortDirection, filter } = state;

  useEffect(() => {
    dispatch(setColumns(dataTable.columns));
    dispatch(setData(dataTable.data));
  }, [dataTable]);

  console.log("state", state);

  return (
    <div className="dataTables_wrapper">
      <div className="dataTables_length">
        <label>
          show{" "}
          <select onChange={e => dispatch(setPageSize(parseInt(e.target.value)))}>
            <option>10</option>
            <option>25</option>
            <option>50</option>
            <option>100</option>
          </select>{" "}
          entries
        </label>
      </div>

      <div className="dataTables_filter">
        <label>
          Search: <input type="search" placeholder="" />
        </label>
      </div>

      <Table columns={columns} data={data} />

      <div className="dataTables_info" role="status" aria-live="polite">
        Showing 1 to 10 of 11 entries
      </div>
    </div>
  );
}

export default DataTable;
