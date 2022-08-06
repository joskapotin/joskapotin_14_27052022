import { useFormContext } from 'react-hook-form'

type SelectProps = {
  name: string
  label: string
  options: { name: string; abbreviation?: string }[]
}

/**
 * A React component that is using the `useFormContext` hook from `react-hook-form` to register the `select` element with the form.
 */
function Select({ name, label, options }: SelectProps) {
  const { register } = useFormContext()
  return (
    <div className='form-group mb-3'>
      <label htmlFor={name} className='form-label'>
        {label}
      </label>
      <select id={name} className='form-control' {...register(name)}>
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
