import { createContext, useReducer, useEffect, useContext } from "react";
import dataTableReducer, { initialState } from "../reducer/reducer";
import {
  setId,
  setColumns,
  setData,
  setOptions,
  setSortBy,
  setSortDirection,
} from "../reducer/actionCreators";

const DataTableContext = createContext();

function useDataTableContext() {
  const [state, dispatch] = useContext(DataTableContext);
  return [state, dispatch];
}

function DataTableContextProvider({ children, dataTable }) {
  const [state, dispatch] = useReducer(dataTableReducer, initialState);
  const { id, columns, data, options } = dataTable;

  useEffect(() => {
    dispatch(setId(id));
    dispatch(setColumns(columns));
    dispatch(setData(data));
    dispatch(setOptions(options));
    dispatch(setSortBy(columns[0].data));
    dispatch(setSortDirection());
  }, [id, columns, data, options, dispatch]);

  console.log("from context", state);

  return (
    <DataTableContext.Provider value={[state, dispatch]}>{children}</DataTableContext.Provider>
  );
}

export { DataTableContextProvider, useDataTableContext, DataTableContext };
