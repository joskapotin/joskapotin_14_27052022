import { lazy, Suspense } from "react"
import { HashRouter as Router, Routes, Route } from "react-router-dom"
import Loading from "./components/ui/loading/Loading"
import "./App.css"

const CreateEmployee = lazy(() => import("./components/pages/createEmployee/CreateEmployee"))
const EmployeeList = lazy(() => import("./components/pages/employeeList/EmployeeList"))

function App() {
  return (
    <Router basemname={`/${process.env.PUBLIC_URL}`}>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<CreateEmployee />} />
          <Route path="employee-list" element={<EmployeeList />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
