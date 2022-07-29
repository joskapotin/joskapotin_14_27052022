import PropTypes from 'prop-types'

type SelectProps = {
    name: string
    label: string
    register: any
    options: { name: string; abbreviation?: string }[]
}

function Select({ name, label, options, register }: SelectProps) {
    return (
        <div className="form-group mb-3">
            <label htmlFor={name} className="form-label">
                {label}
            </label>
            <select
                id={name}
                name={name}
                className="form-control"
                {...register(name)}
            >
                {options.map(option => (
                    <option
                        key={`option-${option.name}`}
                        value={option.abbreviation}
                    >
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
