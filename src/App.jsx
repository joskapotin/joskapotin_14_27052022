import { lazy, Suspense } from "react"
import { Routes, Route } from "react-router-dom"
import Loading from "./components/loading/Loading"
import "./App.css"

const CreateEmployee = lazy(() => import("./pages/createEmployee/CreateEmployee"))
const EmployeeList = lazy(() => import("./pages/employeeList/EmployeeList"))

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<CreateEmployee />} />
        <Route path="employee-list" element={<EmployeeList />} />
      </Routes>
    </Suspense>
  )
}

export default App
