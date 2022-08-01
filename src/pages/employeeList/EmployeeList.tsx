import DataTable from '@jpotin/data-table-react'
import { Link } from 'react-router-dom'

import '@jpotin/data-table-react/dist/style.css'
import ROUTES from '../../constants/routes'
import useAsync from '../../hooks/useAsync/useAsync'
import { getEmployees } from '../../services/api'

function EmployeeList() {
    const { loading, error, value } = useAsync(getEmployees)

    return (
        <div className="container">
            <div className="text-center">
                <h1>Current Employees</h1>
            </div>
            {loading && <div>Loading...</div>}
            {value && <DataTable data={value} />}
            {error && <div>{error}</div>}
            <p className="text-center">
                <Link to={ROUTES.HOME}>Home</Link>
            </p>
        </div>
    )
}

export default EmployeeList
