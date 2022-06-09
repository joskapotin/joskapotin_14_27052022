import PropTypes from "prop-types"

function Modal({ children, title, isOpen = false, toggle }) {
  if (!isOpen) {
    return null
  }
  return (
    <div className="modal" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button type="button" className="btn-close" onClick={toggle} aria-label="Close" />
          </div>
          <div className="modal-body">{children}</div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={toggle}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal

Modal.defaultProps = {
  isOpen: false,
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  isOpen: PropTypes.bool,
  toggle: PropTypes.func.isRequired,
}
