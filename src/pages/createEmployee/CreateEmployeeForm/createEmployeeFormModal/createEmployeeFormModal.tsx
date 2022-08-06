import { Link } from 'react-router-dom'

import Modal from '../../../../components/modal/Modal'
import Spinner from '../../../../components/spinner/Spinner'
import MUTATION from '../../../../constants/mutations'
import ROUTES from '../../../../constants/routes'

type CreateEmployeeFormModalProps = {
  mutationState: typeof MUTATION.STATE[keyof typeof MUTATION.STATE] | null
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

function CreateEmployeeFormModal({
  mutationState,
  isOpen,
  setIsOpen,
}: CreateEmployeeFormModalProps) {
  const modalArray = [
    {
      status: MUTATION.STATE.LOADING,
      control: false,
      title: 'Loading...',
      body: (
        <>
          <Spinner />
          <p className='loading'>Please wait while we save your employee.</p>
        </>
      ),
    },
    {
      status: MUTATION.STATE.SUCCESS,
      control: true,
      title: 'Success!',
      body: (
        <>
          <p>
            Your employee has been saved.
            <br />
            <Link to={ROUTES.EMPLOYEES_LIST}>View all employees</Link>
          </p>
        </>
      ),
    },
    {
      status: MUTATION.STATE.ERROR,
      control: true,
      title: 'Something went wrong',
      body: (
        <>
          <p>
            There was an error saving your employee.
            <br />
            Please try again.
          </p>
        </>
      ),
    },
  ]

  const modal = modalArray.find(m => m.status === mutationState)

  return modal ? (
    <Modal title={modal.title} isOpen={isOpen} setIsOpen={modal.control ? setIsOpen : null}>
      {modal.body}
    </Modal>
  ) : null
}

export default CreateEmployeeFormModal
