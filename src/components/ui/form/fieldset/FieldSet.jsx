import PropTypes from "prop-types"

function FieldSet({ children, title }) {
  return (
    <fieldset className="mb-3">
      <legend>{title}</legend>
      {children}
    </fieldset>
  )
}

export default FieldSet

FieldSet.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
}
