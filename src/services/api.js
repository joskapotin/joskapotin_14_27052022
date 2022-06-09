export async function getEmployees() {
  const employees = JSON.parse(localStorage.getItem("employees"))
  if (employees) {
    return employees
  }

  const response = await fetch("./mock/employees.json")
  const data = await response.json()
  return data
}

export function saveEmployee(employee) {
  const employees = JSON.parse(localStorage.getItem("employees")) || []
  employees.push(employee)
  localStorage.setItem("employees", JSON.stringify(employees))
}
