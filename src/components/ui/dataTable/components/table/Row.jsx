import { v4 as uuidv4 } from "uuid"
import PropTypes from "prop-types"
import useDataTableContext from "../../hooks/useDataTableContext"

function Row({ row }) {
  const [{ columns, sortBy }] = useDataTableContext()

  const rowElements = columns.map((column) => (
    <td
      key={`${column.data}-${uuidv4()}`}
      className={column.data === sortBy ? "current-column" : ""}
    >
      {row[column.data]}
    </td>
  ))

  return <tr>{rowElements}</tr>
}

export default Row

Row.propTypes = {
  row: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
}
