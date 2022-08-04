import { Link } from 'react-router-dom'

import ROUTES from '../../constants/routes'
import EmployeeTable from './employeeTable/EmployeeTable'

function EmployeeList() {
  return (
    <div className='container'>
      <div className='text-center'>
        <h1>Current Employees</h1>
      </div>
      <EmployeeTable />
      <p className='text-center'>
        <Link to={ROUTES.HOME}>Home</Link>
      </p>
    </div>
  )
}

export default EmployeeList
