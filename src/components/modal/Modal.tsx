import PropTypes from 'prop-types'

type ModalProps = {
    children: React.ReactNode
    title: string
    isOpen?: boolean
    toggle?: () => void | null
}

function Modal({ children, title, isOpen, toggle }: ModalProps) {
    if (!isOpen) {
        return null
    }
    return (
        <div className="modal" tabIndex={-1}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{title}</h5>
                        {toggle && (
                            <button
                                type="button"
                                className="btn-close"
                                onClick={toggle}
                                aria-label="Close"
                            />
                        )}
                    </div>
                    <div className="modal-body">{children}</div>
                    <div className="modal-footer">
                        {toggle && (
                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={toggle}
                            >
                                Close
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal

Modal.defaultProps = {
    isOpen: false,
    toggle: null,
}

Modal.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    isOpen: PropTypes.bool,
    toggle: PropTypes.func,
}
