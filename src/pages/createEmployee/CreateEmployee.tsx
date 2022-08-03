import { Link } from 'react-router-dom'

import ROUTES from '../../constants/routes'
import CreateEmployeeForm from './CreateEmployeeForm/CreateEmployeeForm'

function CreateEmployee() {
  return (
    <div className='container'>
      <div className='text-center'>
        <h1>HRnet</h1>
        <Link to={ROUTES.EMPLOYEES_LIST}>View Current Employees</Link>
        <h2>Create Employee</h2>
      </div>

      <CreateEmployeeForm />
    </div>
  )
}

export default CreateEmployee
