/* eslint-disable import/prefer-default-export */

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
