import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import DataTable from "data-table-jp"
import useFetch from "../../../utils/hooks/useFetch/useFetch"

const dataTableConfig = {
  labels: [
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
  entries: [],
  pageSizeOptions: [10, 25, 50, 100],
  sortBy: "firstName",
  sortDirection: "asc",
}

function EmployeeList() {
  const [dataTable, setDataTable] = useState(undefined)
  const { isLoading, data, error } = useFetch({ url: "mock/employees.json" })

  useEffect(() => {
    const employees = JSON.parse(localStorage.getItem("employees"))
    if (employees) {
      setDataTable({
        ...dataTableConfig,
        entries: employees,
      })
    } else if (data && !employees) {
      setDataTable({
        ...dataTableConfig,
        entries: data,
      })
    }
  }, [data])

  return (
    <div className="container">
      <div className="text-center">
        <h1>Current Employees</h1>
      </div>
      {isLoading && <div>Loading...</div>}
      {dataTable && <DataTable dataTable={dataTable} />}
      {error && <div>{error}</div>}
      <p className="text-center">
        <Link to="/">Home</Link>
      </p>
    </div>
  )
}

export default EmployeeList
