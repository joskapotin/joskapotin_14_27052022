/* eslint-disable react/jsx-props-no-spreading, no-console */
import { useMutation, useQueryClient } from '@tanstack/react-query'
import type { SubmitHandler } from 'react-hook-form'
import { FormProvider, useForm } from 'react-hook-form'

import type { Employee } from '../../../@types/types'
import Button from '../../../components/form/button/Button'
import FieldSet from '../../../components/form/fieldset/FieldSet'
import Input from '../../../components/form/input/Input'
import Select from '../../../components/form/select/Select'
import formOptions from '../../../constants/formOptions'
import api from '../../../services/api'
import CreateEmployeeFormModal from './createEmployeeFromModal/createEmployeeFormModal'

function CreateEmployeeForm() {
  const queryClient = useQueryClient()

  /* A hook that is used to make a mutation to the database. And update the "getEmployees" query with the response */
  const mutation = useMutation((newEmployee: Employee) => api.saveEmployee(newEmployee), {
    onSuccess: data => {
      queryClient.setQueryData(['getEmployees'], data.employees)
    },
  })

  const methods = useForm<Employee>()

  const onSubmit: SubmitHandler<Employee> = formData => {
    /* Calling the mutation function that was created by the useMutation hook. */
    mutation.mutate(formData)
  }

  const modalType = () => {
    if (mutation.isLoading) {
      return 'loading'
    }
    if (mutation.isSuccess) {
      return 'success'
    }
    if (mutation.isError) {
      return 'error'
    }
    return 'none'
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

      <CreateEmployeeFormModal modalType={modalType()} />
    </>
  )
}

export default CreateEmployeeForm
