/* eslint-disable react/jsx-props-no-spreading, no-console */
import type { SubmitHandler } from 'react-hook-form'
import { FormProvider, useForm } from 'react-hook-form'

import type { Employee } from '../../../@types/types'
import Button from '../../../components/form/button/Button'
import FieldSet from '../../../components/form/fieldset/FieldSet'
import Input from '../../../components/form/input/Input'
import Select from '../../../components/form/select/Select'
import formOptions from '../../../constants/formOptions'
import { saveEmployee } from '../../../features/employees/employeesSlice'
import useAppDispatch from '../../../hooks/useAppDispatch/useAppDispatch'
import CreateEmployeeModal from './createEmployeeModal/CreateEmployeeModal'

function CreateEmployeeForm() {
  const dispatch = useAppDispatch()

  const methods = useForm<Employee>()

  const onSubmit: SubmitHandler<Employee> = formData => {
    dispatch(saveEmployee(formData))
  }

  return (
    <>
      <FormProvider {...methods}>
        <form className='create-employee-form mx-auto' onSubmit={methods.handleSubmit(onSubmit)}>
          <Input type='text' name='firstName' label='First Name' />
          <Input type='text' name='lastName' label='Last Name' />
          <Input type='date' name='dateOfBirth' label='Date of Birth' />
          <Input type='date' name='startDate' label='Start Date' />
          <FieldSet title='Address'>
            <Input type='text' name='street' label='Street' />
            <Input type='text' name='city' label='City' />
            <Select name='state' label='State' options={formOptions.states} />
            <Input type='number' name='zipCode' label='Zip Code' />
          </FieldSet>
          <Select name='department' label='Department' options={formOptions.departments} />
          <Button type='submit' text='save' />
        </form>
      </FormProvider>

      <CreateEmployeeModal />
    </>
  )
}

export default CreateEmployeeForm
