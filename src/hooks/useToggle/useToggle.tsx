import { useState } from 'react'

function useToggle(defaultValue: boolean) {
  const [value, setValue] = useState(defaultValue)

  const toggle = () => setValue(currentValue => !currentValue)

  return { value, toggle }
}

export default useToggle
