import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import CreateEmployee from "./components/pages/createEmployee/CreateEmployee"
import EmployeeList from "./components/pages/employeeList/EmployeeList"
import "./App.css"

function App() {
  return (
    <Router basename="/joskapotin_14_27052022">
      <Routes>
        <Route path="/" element={<CreateEmployee />} />
        <Route path="employee-list" element={<EmployeeList />} />
      </Routes>
    </Router>
  )
}

export default App
