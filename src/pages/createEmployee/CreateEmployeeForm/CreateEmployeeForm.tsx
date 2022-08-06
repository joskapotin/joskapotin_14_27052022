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
import MUTATIONS from '../../../constants/mutations'
import useToggle from '../../../hooks/useToggle/useToggle'
import api from '../../../services/api'
import CreateEmployeeFormModal from './createEmployeeFormModal/createEmployeeFormModal'

function CreateEmployeeForm() {
  const [isOpen, setIsOpen] = useToggle(false)
  const queryClient = useQueryClient()
  const methods = useForm<Employee>()

  /* A hook that is used to make a mutation to the database. And update the "getEmployees" query with the response */
  const mutation = useMutation((newEmployee: Employee) => api.saveEmployee(newEmployee), {
    onSuccess: data => {
      queryClient.setQueryData(['getEmployees'], data.employees)
    },
  })

  const onSubmit: SubmitHandler<Employee> = formData => {
    /* Calling the mutation function that was created by the useMutation hook. */
    mutation.mutate(formData)
    setIsOpen(true)
  }

  const getMutationState = () => {
    if (mutation.isLoading) {
      return MUTATIONS.STATE.LOADING
    }
    if (mutation.isSuccess) {
      return MUTATIONS.STATE.SUCCESS
    }
    if (mutation.isError) {
      return MUTATIONS.STATE.ERROR
    }
    return null
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

      {isOpen && (
        <CreateEmployeeFormModal mutationState={getMutationState()} setIsOpen={setIsOpen} />
      )}
    </>
  )
}

export default CreateEmployeeForm
