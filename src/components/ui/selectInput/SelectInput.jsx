import { forwardRef } from "react";

const SelectInput = forwardRef(
  ({ name, label, labelClassName, selectClassName, options, ...rest }, ref) => {
    return (
      <>
        <label htmlFor={name} className={labelClassName}>
          {label}
        </label>
        <select name={name} className={selectClassName} {...rest} ref={ref}>
          {options.map(option => (
            <option key={`option-${option.name}`} value={option.abbreviation}>
              {option.name}
            </option>
          ))}
        </select>
      </>
    );
  }
);

export default SelectInput;
