import DataTable from '@jpotin/data-table-react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import '@jpotin/data-table-react/dist/style.css'
import Loading from '../../components/loading/Loading'
import ROUTES from '../../constants/routes'
import { getEmployees } from '../../features/employees/employeesSlice'
import useAppDispatch from '../../hooks/useAppDispatch/useAppDispatch'
import useAppSelector from '../../hooks/useAppSelector/useAppSelector'
import { selectEmployees, selectStatus } from '../../utils/selectors'

function EmployeeList() {
  const { isLoading, isError, message } = useAppSelector(selectStatus)
  const employees = useAppSelector(selectEmployees)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getEmployees())
  }, [dispatch])

  const dataTable = {
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
    sortDirection: 'asc' as 'asc' | 'desc',
  }

  return (
    <div className='container'>
      <div className='text-center'>
        <h1>Current Employees</h1>
      </div>
      {isLoading ? <Loading /> : isError ? <p>{message}</p> : <DataTable data={dataTable} />}
      <p className='text-center'>
        <Link to={ROUTES.HOME}>Home</Link>
      </p>
    </div>
  )
}

export default EmployeeList
