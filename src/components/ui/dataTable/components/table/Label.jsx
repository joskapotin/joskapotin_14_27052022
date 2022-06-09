import PropTypes from "prop-types"
import useDataTableContext from "../../hooks/useDataTableContext"
import { setSortBy, setSortDirection } from "../../reducer/actionCreators"

function Label({ column }) {
  const [{ sortBy, sortDirection }, dispatch] = useDataTableContext()

  const handleClick = (label) => {
    if (label !== sortBy) dispatch(setSortBy(label))
    dispatch(setSortDirection())
  }

  const getLabelClassName = (label) => {
    if (label === sortBy) {
      if (sortDirection === "asc") return "sorting_asc"
      return "sorting_desc"
    }
    return "sorting"
  }

  return (
    <th
      className={getLabelClassName(column.data)}
      onClick={() => handleClick(column.data)}
    >
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
