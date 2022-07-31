import dataTable from '../mock/dataTable'
import type { FormData } from '../pages/createEmployee/CreateEmployee'

type Employee = FormData

/**
 * It get datatable param from a fake API
 */
export async function getEmployees() {
    return dataTable()
}

/**
 * It saves data to a fake API.
 */
export function saveEmployee(employee: Employee) {
    const item = localStorage.getItem('employees')
    const employees = item ? JSON.parse(item) : []
    employees.push(employee)
    localStorage.setItem('employees', JSON.stringify(employees))
}
