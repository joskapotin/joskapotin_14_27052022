import PropTypes from "prop-types"

function Select({ name, label, options, register }) {
  return (
    <div className="form-group mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <select id={name} name={name} className="form-control" {...register(name)}>
        {options.map(option => (
          <option key={`option-${option.name}`} value={option.abbreviation}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Select

Select.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      abbreviation: PropTypes.string,
    })
  ).isRequired,
  register: PropTypes.func.isRequired,
}