import dataTable from '../mock/dataTable'
import type { FormData } from '../pages/createEmployee/CreateEmployee'
import { stall } from '../utilities/helpers'

type Employee = FormData

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
 */
export function saveEmployee(employee: Employee) {
    const item = localStorage.getItem('employees')
    const employees = item ? JSON.parse(item) : []
    employees.push(employee)
    localStorage.setItem('employees', JSON.stringify(employees))
}
