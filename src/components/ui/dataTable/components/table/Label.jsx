import { useEffect } from "react"
import PropTypes from "prop-types"
import useDataTableContext from "../../hooks/useDataTableContext"
import { setData, setSortBy, setSortDirection } from "../../reducer/actionCreators"
import { sortData } from "../../utils/utils"

function Label({ column }) {
  const [state, dispatch] = useDataTableContext()
  const { data, sortBy, sortDirection } = state

  useEffect(() => {
    const sortedData = sortData({ data, sortBy, sortDirection })
    dispatch(setData(sortedData))
  }, [data, sortBy, sortDirection, dispatch])

  const handleClick = (label) => {
    if (label === sortBy) dispatch(setSortDirection())
    else dispatch(setSortBy(label))
  }

  const getLabelClassName = (label) => {
    if (label === sortBy) {
      if (sortDirection === "asc") return "sorting_asc"
      return "sorting_desc"
    }
    return "sorting"
  }

  return (
    <th className={getLabelClassName(column.data)} onClick={() => handleClick(column.data)}>
      {column.title}
    </th>
  )
}

export default Label

Label.propTypes = {
  column: PropTypes.shape({
    data: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
}
