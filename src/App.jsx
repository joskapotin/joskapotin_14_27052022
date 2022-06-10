import { lazy, Suspense } from "react"
import { HashRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css"

const CreateEmployee = lazy(() => import("./components/pages/createEmployee/CreateEmployee"))
const EmployeeList = lazy(() => import("./components/pages/employeeList/EmployeeList"))

function App() {
  return (
    <Router basemname={`/${process.env.PUBLIC_URL}`}>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<CreateEmployee />} />
          <Route path="employee-list" element={<EmployeeList />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
