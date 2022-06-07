import { Link } from "react-router-dom";
import DataTable from "../../ui/dataTable/DataTable";
import { getEmployees } from "../../../services/api";

const columns = [
  { title: "First Name", data: "firstName" },
  { title: "Last Name", data: "lastName" },
  { title: "Start Date", data: "startDate" },
  { title: "Department", data: "department" },
  { title: "Date of Birth", data: "dateOfBirth" },
  { title: "Street", data: "street" },
  { title: "City", data: "city" },
  { title: "State", data: "state" },
  { title: "Zip Code", data: "zipCode" },
];

function EmployeeList() {
  return (
    <div className="container">
      <div className="text-center">
        <h1>Current Employees</h1>
      </div>
      <DataTable dataTable={{ data: getEmployees(), columns }} />
      <p className="text-center">
        <Link to="/">Home</Link>
      </p>
    </div>
  );
}

export default EmployeeList;
