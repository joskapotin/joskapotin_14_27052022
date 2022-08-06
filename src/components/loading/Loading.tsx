import Spinner from '../spinner/Spinner'

function Loading() {
  return (
    <div className='text-center fixed-center'>
      <Spinner />
      <p>Please wait while loading.</p>
    </div>
  )
}

export default Loading
