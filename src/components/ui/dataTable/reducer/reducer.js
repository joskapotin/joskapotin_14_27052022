import actionTypes from "./actionTypes"

export const initialState = {
  id: "",
  columns: [],
  data: [],
  options: {
    pageSizeOptions: [10, 25, 50, 100],
  },
  currentPage: 1,
  totalPages: 0,
  pageSize: 10,
  sortBy: "",
  sortDirection: "desc",
  filter: "",
  filterResults: [],
}

function dataTableReducer(state, action) {
  switch (action.type) {
    case actionTypes.SET_ID:
      return { ...state, id: action.payload.id }
    case actionTypes.SET_COLUMNS:
      return { ...state, columns: action.payload }
    case actionTypes.SET_DATA:
      return { ...state, data: action.payload }
    case actionTypes.SET_OPTIONS:
      return { ...state, options: action.payload }
    case actionTypes.SET_PAGE_SIZE_OPTIONS:
      return {
        ...state,
        options: { ...state.options, pageSizeOptions: action.payload },
      }
    case actionTypes.SET_CURRENT_PAGE:
      return { ...state, currentPage: action.payload }
    case actionTypes.SET_TOTAL_PAGES:
      return { ...state, totalPages: action.payload }
    case actionTypes.SET_PAGE_SIZE:
      return { ...state, pageSize: action.payload, currentPage: 1 }
    case actionTypes.SET_SORT_BY:
      return { ...state, sortBy: action.payload, sortDirection: "desc" }
    case actionTypes.SET_SORT_DIRECTION:
      return {
        ...state,
        sortDirection: state.sortDirection === "asc" ? "desc" : "asc",
      }
    case actionTypes.SET_FILTER:
      return { ...state, currentPage: 1, filter: action.payload }
    case actionTypes.SET_FILTER_RESULTS:
      return { ...state, filterResults: action.payload }
    default:
      return state
  }
}

export default dataTableReducer
