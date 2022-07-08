import { useState } from "react"

function useToggle(defaultValue) {
  const [value, setValue] = useState(defaultValue)

  const toggle = newValue => setValue(currentValue => (typeof newValue === "boolean" ? newValue : !currentValue))

  return [value, toggle]
}

export default useToggle
