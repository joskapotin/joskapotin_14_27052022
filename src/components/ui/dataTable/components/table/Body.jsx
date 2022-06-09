import { v4 as uuidv4 } from "uuid"
import PropTypes from "prop-types"
import Row from "./Row"

function Body({ data }) {
  const bodyElements = data.map((row) => (
    <Row key={`row-${uuidv4()}`} row={row} />
  ))

  return <tbody>{bodyElements}</tbody>
}

export default Body

Body.defaultProps = {
  data: [],
}

Body.propTypes = {
  data: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
}
