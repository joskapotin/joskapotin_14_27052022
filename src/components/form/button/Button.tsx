type ButtonProps = {
  type?: 'submit' | 'reset' | 'button'
  text: string
}

function Button({ type, text }: ButtonProps) {
  return (
    <div className='mb-3'>
      <input type={type} className='btn btn-primary mb-3' value={text} />
    </div>
  )
}

export default Button

Button.defaultProps = {
  type: 'button',
}
