import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import useToggle from "../../../utils/hooks/useToggle"
import Header from "../../ui/header/Header"
import SelectInput from "../../ui/selectInput/SelectInput"
import formOptions from "../../../constants/formOptions"
import { saveEmployee } from "../../../services/api"

function CreateEmployee() {
  const [isOpen, toggle] = useToggle(false)
  const { register, handleSubmit } = useForm()

  const onSubmit = (employee) => {
    saveEmployee(employee)
    toggle()
  }

  return (
    <div className="container">
      <Header />

      <div className="text-center">
        <Link to="employee-list">View Current Employees</Link>
        <h2>Create Employee</h2>
      </div>

      <form className="create-employee-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            {...register("firstName")}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            {...register("lastName")}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="dateOfBirth" className="form-label">
            Date of Birth
          </label>
          <input
            type="date"
            className="form-control"
            {...register("dateOfBirth")}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="startDate" className="form-label">
            Start Date
          </label>
          <input
            type="date"
            className="form-control"
            {...register("startDate")}
          />
        </div>

        <fieldset className="mb-3">
          <legend>Address</legend>

          <div className="mb-3">
            <label htmlFor="street" className="form-label">
              Street
            </label>
            <input
              type="text"
              className="form-control"
              {...register("street")}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="city" className="form-label">
              City
            </label>
            <input type="text" className="form-control" {...register("city")} />
          </div>

          <div className="mb-3">
            <SelectInput
              name="state"
              label="State"
              labelClassName="form-label"
              selectClassName="form-control"
              options={formOptions.states}
              {...register("state")}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="zipCode" className="form-label">
              Zip Code
            </label>
            <input
              type="number"
              className="form-control"
              {...register("zipCode")}
            />
          </div>
        </fieldset>

        <div className="mb-3">
          <SelectInput
            name="department"
            label="Department"
            labelClassName="form-label"
            selectClassName="form-control"
            options={formOptions.departments}
            {...register("department")}
          />
        </div>

        <div className="mb-3">
          <input type="submit" className="btn btn-primary mb-3" value="Save" />
        </div>
      </form>
      {isOpen && (
        <div className="modal" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Employee Created</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={toggle}
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <p>
                  Employee was successfully created. You can view the employees{" "}
                  <Link to="employee-list">here</Link>.
                </p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={toggle}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CreateEmployee
