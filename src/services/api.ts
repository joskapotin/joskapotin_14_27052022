import type { Employee } from '../@types/types'
import mockedEmployees from '../mock/employees'

export type Response = { employees: Employee[]; message: string }

/**
 * It get employees from local storage or mock data if it's not exist
 */
const getEmployees = async () => {
  const item = localStorage.getItem('employees')
  const localEmployees = item ? (JSON.parse(item) as Employee[]) : null
  const employees = localEmployees || mockedEmployees

  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ employees, message: 'Employees loaded' })
    }, 1000)
  }) as Promise<Response>
}

/**
 * It saves employees to local storage
 */
const saveEmployee = async (employee: Employee) => {
  const item = localStorage.getItem('employees')
  const employees = item ? JSON.parse(item) : []
  employees.push(employee)
  localStorage.setItem('employees', JSON.stringify(employees))

  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ employees, message: 'Employee was successfully created' })
    }, 1000)
  }) as Promise<Response>
}

const api = {
  getEmployees,
  saveEmployee,
}

export default api
