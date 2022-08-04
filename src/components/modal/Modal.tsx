import * as PropTypes from 'prop-types'

import { closeModal } from '../../features/modal/modalSlice'
import useAppDispatch from '../../hooks/useAppDispatch/useAppDispatch'
import useAppSelector from '../../hooks/useAppSelector/useAppSelector'
import { selectModalIsOpen } from '../../utils/selectors'

type ModalProps = {
  children: React.ReactNode
  title: string
}

function Modal({ children, title }: ModalProps) {
  const dispatch = useAppDispatch()
  const isOpen = useAppSelector(selectModalIsOpen)

  const handleClose = () => dispatch(closeModal())

  if (isOpen) {
    return (
      <div className='modal' tabIndex={-1}>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title'>{title}</h5>
              <button
                type='button'
                className='btn-close'
                onClick={handleClose}
                aria-label='Close'
              />
            </div>
            <div className='modal-body'>{children}</div>
            <div className='modal-footer'>
              <button type='button' className='btn btn-secondary' onClick={handleClose}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
  return null
}

export default Modal

Modal.defaultProps = {
  isOpen: false,
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
}
