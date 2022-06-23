import PropTypes from "prop-types"

function Button({ type = "button", text }) {
  return (
    <div className="mb-3">
      <input type={type} className="btn btn-primary mb-3" value={text} />
    </div>
  )
}

export default Button

Button.defaultProps = {
  type: "text",
}

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string.isRequired,
}
