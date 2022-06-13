/**
 * It is a helper function to fake async function
 *
 * @param {integer} stallTime - The time in milliseconds for the promise to be resolved.
 */
async function stall(stallTime = 1000) {
  await new Promise((resolve) => {
    setTimeout(resolve, stallTime)
  })
}

/**
 * It is a function that fetches data from the API.
 * For the sake of this example, it is a fake API.
 *
 * @param {object} abortController - The abort controller to be used to abort the request.
 * @returns {object[]} - The data fetched from the API.
 */
export async function getEmployees(abortController) {
  await stall()
  const employees = JSON.parse(localStorage.getItem("employees"))
  if (employees) {
    return employees
  }

  const response = await fetch("./mock/employees.json", { signal: abortController.signal })
  const data = await response.json()
  return data
}

/**
 * It is a function that saves data to the API.
 * For the sake of this example, it is a fake API.
 *
 * @param {object} employee
 */
export function saveEmployee(employee) {
  const employees = JSON.parse(localStorage.getItem("employees")) || []
  employees.push(employee)
  localStorage.setItem("employees", JSON.stringify(employees))
}
