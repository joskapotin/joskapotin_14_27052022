import mockEmployees from '../mock/employees';

export function getEmployees() {
  const employees = JSON.parse(localStorage.getItem('employees'));
  if (employees) {
    return employees;
  }
  return mockEmployees;
}

export function saveEmployee(employee) {
  if (employee) {
    const employees = JSON.parse(localStorage.getItem('employees')) || [];
    employees.push(employee);
    localStorage.setItem('employees', JSON.stringify(employees));
  }
}
