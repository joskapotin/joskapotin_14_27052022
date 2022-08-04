import { Link } from 'react-router-dom'

import Modal from '../../../../components/modal/Modal'
import ROUTES from '../../../../constants/routes'
import useAppSelector from '../../../../hooks/useAppSelector/useAppSelector'
import { selectIsError, selectIsLoading, selectMessage } from '../../../../utils/selectors'

function CreateEmployeeModal() {
  const isError = useAppSelector(selectIsError)
  const message = useAppSelector(selectMessage)
  const isLoading = useAppSelector(selectIsLoading)

  if (isLoading)
    <Modal title='Please wait'>
      <p className='loading'>{message}</p>
    </Modal>
  if (isError)
    <Modal title='Something went wrong'>
      <p className='error'>{message}</p>
    </Modal>
  return (
    <Modal title={message || 'HRNet modal'}>
      <p className='success'>
        {message}. <br />
        You can view the employees <Link to={ROUTES.EMPLOYEES_LIST}>here</Link>.
      </p>
    </Modal>
  )
}

export default CreateEmployeeModal
