import PropTypes from "prop-types"

function Input({ type = "text", name, label, register }) {
  return (
    <div className="form-group mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input id={name} type={type} className="form-control" {...register(name)} />
    </div>
  )
}

export default Input

Input.defaultProps = {
  type: "text",
}

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
}
