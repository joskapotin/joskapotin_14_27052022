import { useState } from 'react'

function useToggle(defaultValue: boolean) {
  const [value, setValue] = useState(defaultValue)

  const toggle = (status?: boolean) => {
    if (status) setValue(status)
    else setValue(currentValue => !currentValue)
  }

  return [value, toggle] as const
}

export default useToggle
