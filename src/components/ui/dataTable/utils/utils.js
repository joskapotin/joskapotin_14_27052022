export const sortData = ({ data, sortBy, sortDirection }) => {
  const sortedData = data.sort((a, b) => {
    if (sortDirection === "asc") {
      return a[sortBy] > b[sortBy] ? 1 : -1
    }
    return a[sortBy] < b[sortBy] ? 1 : -1
  })
  return sortedData
}

export const filterData = (data, filter) => {
  const filterResults = data.filter((row) => Object.values(row).find((value) => value.toLowerCase().includes(filter.toLowerCase())))
  return filterResults
}
