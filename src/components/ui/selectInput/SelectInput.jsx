import { forwardRef } from "react"
import PropTypes from "prop-types"

const SelectInput = forwardRef(
  ({ name, label, labelClassName, selectClassName, options, ...rest }, ref) => (
    <>
      <label htmlFor={name} className={labelClassName}>
        {label}
      </label>
      <select name={name} className={selectClassName} {...rest} ref={ref}>
        {options.map((option) => (
          <option key={`option-${option.name}`} value={option.abbreviation}>
            {option.name}
          </option>
        ))}
      </select>
    </>
  )
)

export default SelectInput

SelectInput.defaultProps = {
  labelClassName: "",
  selectClassName: "",
}

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  labelClassName: PropTypes.string,
  selectClassName: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      abbreviation: PropTypes.string.isRequired,
    })
  ).isRequired,
}
