import { Link } from "react-router-dom"
import DataTable from "data-table-jp"
import "../../../node_modules/data-table-jp/dist/style.css"
import useAsync from "../../hooks/useAsync/useAsync"
import { getEmployees } from "../../services/api"

function EmployeeList() {
  const { loading, error, value } = useAsync(getEmployees)

  return (
    <div className="container">
      <div className="text-center">
        <h1>Current Employees</h1>
      </div>
      {loading && <div>Loading...</div>}
      {value && <DataTable dataTable={value} />}
      {error && <div>{error}</div>}
      <p className="text-center">
        <Link to="/">Home</Link>
      </p>
    </div>
  )
}

export default EmployeeList