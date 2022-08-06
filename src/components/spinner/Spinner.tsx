import './Spinner.scss'

function Spinner() {
  return (
    <div className='loader'>
      <div className='ball'></div>
      <div className='ball'></div>
      <div className='ball'></div>
      <div className='shadow'></div>
      <div className='shadow'></div>
      <div className='shadow'></div>
    </div>
  )
}

export default Spinner
