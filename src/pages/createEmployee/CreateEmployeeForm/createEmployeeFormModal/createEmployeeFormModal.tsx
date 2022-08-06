import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import Modal from '../../../../components/modal/Modal'
import Spinner from '../../../../components/spinner/Spinner'
import MUTATION from '../../../../constants/mutations'
import ROUTES from '../../../../constants/routes'

type CreateEmployeeFormModalProps = {
  mutationState: typeof MUTATION.STATE[keyof typeof MUTATION.STATE] | null
  setIsOpen: (isOpen: boolean) => void
}

function CreateEmployeeFormModal({ mutationState, setIsOpen }: CreateEmployeeFormModalProps) {
  const modalArray = [
    {
      id: 1,
      status: MUTATION.STATE.LOADING,
      title: 'Loading...',
      body: (
        <>
          <Spinner />
          <p className='loading'>Please wait while we save your employee.</p>
        </>
      ),
    },
    {
      id: 2,
      status: MUTATION.STATE.SUCCESS,
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
      id: 3,
      status: MUTATION.STATE.ERROR,
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
    <Modal title={modal.title} setIsOpen={setIsOpen}>
      {modal.body}
    </Modal>
  ) : null
}

export default CreateEmployeeFormModal

CreateEmployeeFormModal.propTypes = {
  mutationState: PropTypes.oneOf(['loading', 'success', 'error', null]).isRequired,
  setIsOpen: PropTypes.func.isRequired,
}
