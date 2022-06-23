import dataTable from "../mock/dataTable"
import { stall } from "../utilities/helpers"

/**
 * It get datatable param from a fake api
 */
export async function getEmployees() {
  await stall(1500)
  return dataTable()
}

/**
 * It saves data to the API.
 * For the sake of this example, it is a fake API.
 *
 * @param {object} employee
 */
export function saveEmployee(employee) {
  const employees = JSON.parse(localStorage.getItem("employees")) || []
  employees.push(employee)
  localStorage.setItem("employees", JSON.stringify(employees))
}
