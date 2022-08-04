import * as PropTypes from 'prop-types'

import useToggle from '../../hooks/useToggle/useToggle'

type ModalProps = {
  children: React.ReactNode
  title: string
  isOpen?: boolean
}

function Modal({ children, title, isOpen = false }: ModalProps) {
  const { value, toggle } = useToggle(isOpen)

  if (value) {
    return (
      <div className='modal' tabIndex={-1}>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title'>{title}</h5>
              <button type='button' className='btn-close' onClick={toggle} aria-label='Close' />
            </div>
            <div className='modal-body'>{children}</div>
            <div className='modal-footer'>
              <button type='button' className='btn btn-secondary' onClick={toggle}>
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
