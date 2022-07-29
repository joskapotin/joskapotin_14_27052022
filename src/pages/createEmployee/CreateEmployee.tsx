import type { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import Button from '../../components/form/button/Button'
import FieldSet from '../../components/form/fieldset/FieldSet'
import Input from '../../components/form/input/Input'
import Select from '../../components/form/select/Select'
import Modal from '../../components/modal/Modal'
import formOptions from '../../constants/formOptions'
import useToggle from '../../hooks/useToggle/useToggle'
import { saveEmployee } from '../../services/api'

export type FormData = {
    firstName: string
    lastName: string
    dateOfBirth: string
    startDate: string
    street: string
    city: string
    state: string
    zipCode: string
    department: string
}

function CreateEmployee() {
    const { value: isopen, toggle } = useToggle(false)
    const { register, handleSubmit } = useForm<FormData>()

    const onSubmit: SubmitHandler<FormData> = formData => {
        saveEmployee(formData)
        toggle()
    }

    return (
        <div className="container">
            <div className="text-center">
                <h1>HRnet</h1>
                <Link to="employee-list">View Current Employees</Link>
                <h2>Create Employee</h2>
            </div>

            <form
                className="create-employee-form mx-auto"
                onSubmit={handleSubmit(onSubmit)}
            >
                <Input
                    type="text"
                    name="firstName"
                    label="First Name"
                    register={register}
                />
                <Input
                    type="text"
                    name="lastName"
                    label="Last Name"
                    register={register}
                />
                <Input
                    type="date"
                    name="dateOfBirth"
                    label="Date of Birth"
                    register={register}
                />
                <Input
                    type="date"
                    name="startDate"
                    label="Start Date"
                    register={register}
                />
                <FieldSet title="Address">
                    <Input
                        type="text"
                        name="street"
                        label="Street"
                        register={register}
                    />
                    <Input
                        type="text"
                        name="city"
                        label="City"
                        register={register}
                    />
                    <Select
                        name="state"
                        label="State"
                        options={formOptions.states}
                        register={register}
                    />
                    <Input
                        type="number"
                        name="zipCode"
                        label="Zip Code"
                        register={register}
                    />
                </FieldSet>
                <Select
                    name="department"
                    label="Department"
                    options={formOptions.departments}
                    register={register}
                />
                <Button type="submit" text="save" />
            </form>

            <Modal title="Employee Created" isOpen={isopen} toggle={toggle}>
                <p>
                    Employee was successfully created. You can view the
                    employees <Link to="employee-list">here</Link>.
                </p>
            </Modal>
        </div>
    )
}

export default CreateEmployee
