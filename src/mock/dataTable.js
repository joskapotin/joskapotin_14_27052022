import mockedEmployees from "./employees"

const dataTable = () => {
  const localEmployees = JSON.parse(localStorage.getItem("employees"))
  const employees = localEmployees || mockedEmployees

  return {
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
    entries: employees,
    pageSizeOptions: [10, 25, 50, 100],
    sortBy: "firstName",
    sortDirection: "asc",
  }
}

export default dataTable
