/* eslint-disable react/jsx-props-no-spreading, no-console */
import type { SubmitHandler } from 'react-hook-form'
import { FormProvider, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import type { Employee } from '../../../@types/types'
import Button from '../../../components/form/button/Button'
import FieldSet from '../../../components/form/fieldset/FieldSet'
import Input from '../../../components/form/input/Input'
import Select from '../../../components/form/select/Select'
import Modal from '../../../components/modal/Modal'
import formOptions from '../../../constants/formOptions'
import ROUTES from '../../../constants/routes'
import { closeSaveMessage, saveEmployee } from '../../../features/employees/employeesSlice'
import useAppDispatch from '../../../hooks/useAppDispatch/useAppDispatch'
import useAppSelector from '../../../hooks/useAppSelector/useAppSelector'
import { selectIsError, selectSaveMessage } from '../../../utils/selectors'

function CreateEmployeeForm() {
  const dispatch = useAppDispatch()
  const isError = useAppSelector(selectIsError)
  const message = useAppSelector(selectSaveMessage)

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

      <Modal title='Employee Created' isOpen={!!message} close={() => dispatch(closeSaveMessage())}>
        {isError ? (
          <p className='error'>Something went wrong: {message}</p>
        ) : (
          <p>
            {message}. You can view the employees <Link to={ROUTES.EMPLOYEES_LIST}>here</Link>.
          </p>
        )}
      </Modal>
    </>
  )
}

export default CreateEmployeeForm
