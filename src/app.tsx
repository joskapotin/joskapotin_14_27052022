import { Suspense, lazy, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

import Loading from './components/loading/Loading'
import { getEmployees } from './features/employees/employeesSlice'
import useAppDispatch from './hooks/useAppDispatch/useAppDispatch'

import './app.css'

const CreateEmployee = lazy(() => import('./pages/createEmployee/CreateEmployee'))
const EmployeeList = lazy(() => import('./pages/employeesList/EmployeesList'))

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getEmployees())
  }, [dispatch])

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path='/' element={<CreateEmployee />} />
        <Route path='employee-list' element={<EmployeeList />} />
      </Routes>
    </Suspense>
  )
}

export default App
