import mockedEmployees from './employees'

type Employees = typeof mockedEmployees

const dataTable = () => {
    const item = localStorage.getItem('employees')
    const localEmployees = item ? (JSON.parse(item) as Employees) : null
    const employees = localEmployees || mockedEmployees

    return {
        labels: [
            { title: 'First Name', data: 'firstName' },
            { title: 'Last Name', data: 'lastName' },
            { title: 'Start Date', data: 'startDate' },
            { title: 'Department', data: 'department' },
            { title: 'Date of Birth', data: 'dateOfBirth' },
            { title: 'Street', data: 'street' },
            { title: 'City', data: 'city' },
            { title: 'State', data: 'state' },
            { title: 'Zip Code', data: 'zipCode' },
        ],
        entries: employees,
        sortBy: 'firstName',
        sortDirection: 'asc',
    }
}

export default dataTable
