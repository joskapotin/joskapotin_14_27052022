/* eslint-disable react/jsx-props-no-spreading, no-console */

import type { SubmitHandler } from 'react-hook-form'
import { FormProvider, useForm } from 'react-hook-form'
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
    const methods = useForm<FormData>()

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

            <FormProvider {...methods}>
                <form
                    className="create-employee-form mx-auto"
                    onSubmit={methods.handleSubmit(onSubmit)}
                >
                    <Input type="text" name="firstName" label="First Name" />
                    <Input type="text" name="lastName" label="Last Name" />
                    <Input
                        type="date"
                        name="dateOfBirth"
                        label="Date of Birth"
                    />
                    <Input type="date" name="startDate" label="Start Date" />
                    <FieldSet title="Address">
                        <Input type="text" name="street" label="Street" />
                        <Input type="text" name="city" label="City" />
                        <Select
                            name="state"
                            label="State"
                            options={formOptions.states}
                        />
                        <Input type="number" name="zipCode" label="Zip Code" />
                    </FieldSet>
                    <Select
                        name="department"
                        label="Department"
                        options={formOptions.departments}
                    />
                    <Button type="submit" text="save" />
                </form>
            </FormProvider>

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
