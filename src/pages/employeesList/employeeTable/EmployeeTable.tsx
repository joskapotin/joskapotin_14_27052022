import DataTable from '@jpotin/data-table-react'
import { useQuery } from '@tanstack/react-query'

import Loading from '../../../components/loading/Loading'
import api from '../../../services/api'
import '@jpotin/data-table-react/dist/style.css'

function EmployeeTable() {
  const { isLoading, isError, error, isSuccess, data } = useQuery(['getEmployees'], () =>
    api.getEmployees(),
  )
  const dataTable = isSuccess && {
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
    entries: data,
    sortBy: 'firstName',
    sortDirection: 'asc' as 'asc' | 'desc',
  }

  if (isLoading) {
    return <Loading />
  }
  if (isError) {
    const err = error as Error
    return <p className='text-center'>{err.message}</p>
  }
  if (dataTable) {
    return <DataTable data={dataTable} />
  }
  return <p className='text-center'>No data</p>
}

export default EmployeeTable
