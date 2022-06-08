import actionTypes from "./actionTypes";

export const initialState = {
  id: "",
  columns: [],
  data: [],
  options: {},
  currentPage: 1,
  pageSize: 10,
  sortBy: "",
  sortDirection: "desc",
  filter: "",
};

function dataTableReducer(state, action) {
  switch (action.type) {
    case actionTypes.SET_ID:
      return { ...state, id: action.payload.id };
    case actionTypes.SET_COLUMNS:
      return { ...state, columns: action.payload };
    case actionTypes.SET_DATA:
      return { ...state, data: action.payload };
    case actionTypes.SET_OPTIONS:
      return { ...state, options: action.payload };
    case actionTypes.SET_CURRENT_PAGE:
      return { ...state, currentPage: action.payload };
    case actionTypes.SET_PAGE_SIZE:
      return { ...state, pageSize: action.payload, currentPage: 1 };
    case actionTypes.SET_SORT_BY:
      return { ...state, sortBy: action.payload, sortDirection: "desc" };
    case actionTypes.SET_SORT_DIRECTION:
      return { ...state, sortDirection: state.sortDirection === "asc" ? "desc" : "asc" };
    case actionTypes.SET_FILTER:
      return { ...state, filter: action.payload };
    default:
      return state;
  }
}

export default dataTableReducer;
