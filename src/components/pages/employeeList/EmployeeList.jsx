import { Link } from "react-router-dom"
import DataTable from "data-table-jp-bootstrap"
import { getEmployees } from "../../../services/api"

const dataTable = {
  id: "employee-table",
  columns: [
    { title: "First Name", data: "firstName" },
    { title: "Last Name", data: "lastName" },
    { title: "Start Date", data: "startDate" },
    { title: "Department", data: "department" },
    { title: "Date of Birth", data: "dateOfBirth" },
    { title: "Street", data: "street" },
    { title: "City", data: "city" },
    { title: "State", data: "state" },
    { title: "Zip Code", data: "zipCode" },
  ],
  getData: getEmployees,
  pageSizeOptions: [10, 25, 50, 100],
  sortBy: "firstName",
  sortDirection: "asc",
}

function EmployeeList() {
  return (
    <div className="container">
      <div className="text-center">
        <h1>Current Employees</h1>
      </div>
      <DataTable dataTable={dataTable} />
      <p className="text-center">
        <Link to="/">Home</Link>
      </p>
    </div>
  )
}

export default EmployeeList
