import type { Employee } from '../@types/types'
import mockedEmployees from '../mock/employees'

export type Response = { employees: Employee[]; message: string }

/**
 * Simulate slow async calls
 */
const stall = async (stallTime = 3000) => {
  await new Promise(resolve => setTimeout(resolve, stallTime))
}

/**
 * It get employees from local storage or mock data if it's not exist
 */
const getEmployees = async () => {
  const item = localStorage.getItem('employees')
  const localEmployees = item ? (JSON.parse(item) as Employee[]) : null
  const employees = localEmployees || mockedEmployees

  await stall(1000)

  return Promise.resolve(employees)
  // return Promise.reject(new Error('Employees not found'))
}

/**
 * It saves employees to local storage
 */
const saveEmployee = async (employee: Employee) => {
  const item = localStorage.getItem('employees')
  const employees = item ? JSON.parse(item) : []
  employees.push(employee)
  localStorage.setItem('employees', JSON.stringify(employees))

  await stall(1000)

  return Promise.resolve({ employees, message: 'Employee was successfully created' })
  // return Promise.reject(new Error('Employee was not created'))
}

const api = {
  getEmployees,
  saveEmployee,
}

export default api
