import actionTypes from "./actionTypes";

function dataTableReducer(state, action) {
  switch (action.type) {
    case actionTypes.SET_COLUMNS:
      return { ...state, columns: action.payload };
    case actionTypes.SET_DATA:
      return { ...state, data: action.payload };
    case actionTypes.SET_CURRENT_PAGE:
      return { ...state, page: action.payload };
    case actionTypes.SET_PAGE_SIZE:
      return { ...state, pageSize: action.payload };
    case actionTypes.SET_SORT_BY:
      return { ...state, sortBy: action.payload };
    case actionTypes.SET_SORT_DIRECTION:
      return { ...state, sortDirection: action.payload };
    case actionTypes.SET_FILTER:
      return { ...state, filter: action.payload };
    default:
      return state;
  }
}

export default dataTableReducer;
