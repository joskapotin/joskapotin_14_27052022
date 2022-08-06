type ModalProps = {
  children: React.ReactNode
  title: string
  isOpen?: boolean
  setIsOpen?: ((isOpen: boolean) => void) | null
}

function Modal({ children, title, isOpen = false, setIsOpen = null }: ModalProps) {
  const handleCLose = setIsOpen
    ? () => {
        setIsOpen(false)
      }
    : null

  if (isOpen) {
    return (
      <div className='modal' tabIndex={-1}>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title'>{title}</h5>
              {handleCLose && (
                <button
                  type='button'
                  className='btn-close'
                  onClick={handleCLose}
                  aria-label='Close'
                />
              )}
            </div>
            <div className='modal-body'>{children}</div>
            {handleCLose && (
              <div className='modal-footer'>
                <button type='button' className='btn btn-secondary' onClick={handleCLose}>
                  Close
                </button>
              </div>
            )}
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
  setIsOpen: null,
}
