import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateEmployee from "./components/pages/createEmployee/CreateEmployee";
import EmployeeList from "./components/pages/employeeList/EmployeeList";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CreateEmployee />} />
        <Route path="employee-list" element={<EmployeeList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
