import { createContext, useReducer } from "react";
import dataTableReducer, { initialState } from "../reducer/reducer";

export const DataTableContext = createContext();

function DataTableContextProvider({ children, dataTable }) {
  const [state, dispatch] = useReducer(dataTableReducer, { ...initialState, ...dataTable });

  console.log(state);

  return (
    <DataTableContext.Provider value={[state, dispatch]}>{children}</DataTableContext.Provider>
  );
}

export default DataTableContextProvider;
