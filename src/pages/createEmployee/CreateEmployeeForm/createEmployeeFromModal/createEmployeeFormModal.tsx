import { Link } from 'react-router-dom'

import Modal from '../../../../components/modal/Modal'
import ROUTES from '../../../../constants/routes'

type CreateEmployeeFormModalProps = {
  modalType: 'loading' | 'success' | 'error' | 'none'
}

function CreateEmployeeFormModal({ modalType }: CreateEmployeeFormModalProps) {
  switch (modalType) {
    case 'loading':
      return (
        <Modal title='Saving Employee...' isOpen={true}>
          <p className='loading'>Please wait while we save your employee.</p>
        </Modal>
      )
    case 'success':
      return (
        <Modal title='Employee Saved!' isOpen={true}>
          <p>
            Your employee has been saved.
            <br />
            <Link to={ROUTES.EMPLOYEES_LIST}>View all employees</Link>
          </p>
        </Modal>
      )
    case 'error':
      return (
        <Modal title='Error Saving Employee' isOpen={true}>
          <p>
            There was an error saving your employee.
            <br />
            Please try again.
          </p>
        </Modal>
      )
    default:
      return null
  }
}

export default CreateEmployeeFormModal
