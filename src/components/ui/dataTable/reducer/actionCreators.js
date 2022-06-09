import actionTypes from "./actionTypes"

export const setId = (id) => ({
  type: actionTypes.SET_ID,
  payload: { id },
})

export const setColumns = (columns) => ({
  type: actionTypes.SET_COLUMNS,
  payload: columns,
})

export const setData = (data) => ({
  type: actionTypes.SET_DATA,
  payload: data,
})

export const setOptions = (options) => ({
  type: actionTypes.SET_OPTIONS,
  payload: options,
})

export const setPageSizeOptions = (pageSizeOptions) => ({
  type: actionTypes.SET_PAGE_SIZE_OPTIONS,
  payload: pageSizeOptions,
})

export const setCurrentPage = (page) => ({
  type: actionTypes.SET_CURRENT_PAGE,
  payload: page,
})

export const setTotalPages = (totalPages) => ({
  type: actionTypes.SET_TOTAL_PAGES,
  payload: totalPages,
})

export const setPageSize = (pageSize) => ({
  type: actionTypes.SET_PAGE_SIZE,
  payload: pageSize,
})

export const setSortBy = (sortBy) => ({
  type: actionTypes.SET_SORT_BY,
  payload: sortBy,
})

export const setSortDirection = () => ({
  type: actionTypes.SET_SORT_DIRECTION,
})

export const setFilter = (filter) => ({
  type: actionTypes.SET_FILTER,
  payload: filter,
})

export const setFilterResults = (filterResults) => ({
  type: actionTypes.SET_FILTER_RESULTS,
  payload: filterResults,
})
