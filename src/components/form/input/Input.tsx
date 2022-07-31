import PropTypes from 'prop-types'
import { useFormContext } from 'react-hook-form'

type InputProps = {
    type: 'text' | 'date' | 'number'
    name: string
    label: string
}

function Input({ type = 'text', name, label }: InputProps) {
    const { register } = useFormContext()
    return (
        <div className="form-group mb-3">
            <label htmlFor={name} className="form-label">
                {label}
            </label>
            <input
                id={name}
                type={type}
                className="form-control"
                {...register(name)}
            />
        </div>
    )
}

export default Input

Input.defaultProps = {
    type: 'text',
}

Input.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
}
