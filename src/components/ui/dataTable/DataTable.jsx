import { useReducer, useEffect } from "react";

const actionTypes = {
  SET_DATA: "SET_DATA",
  SET_COLUMNS: "SET_COLUMNS",
};

const setData = data => ({
  type: actionTypes.SET_DATA,
  payload: data,
});

const setColumns = columns => ({
  type: actionTypes.SET_COLUMNS,
  payload: columns,
});

const initialState = {
  data: [],
  columns: [],
  loading: false,
  error: null,
  page: 1,
  pageSize: 10,
  total: 0,
  sortBy: "",
  sortDirection: "asc",
  filter: "",
};

function dataTableReducer(state, action) {
  switch (action.type) {
    case actionTypes.SET_DATA:
      return { ...state, data: action.payload };
    case actionTypes.SET_COLUMNS:
      return { ...state, columns: action.payload };
    default:
      return state;
  }
}

function DataTable({ dataTable }) {
  const [state, dispatch] = useReducer(dataTableReducer, initialState);

  useEffect(() => {
    dispatch(setColumns(dataTable.columns));
    dispatch(setData(dataTable.data));
  }, [dataTable]);

  return (
    <table class="table table-striped">
      <thead>
        <tr>
          {state.columns.map((column, index) => (
            <th key={`${index}-${column.data}`}>{column.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {state.data.map((row, index) => (
          <tr key={`${index}-${row.firstName}`}>
            {state.columns.map((column, index) => (
              <td key={`${index}-${column.data}`}>{row[column.data]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DataTable;
