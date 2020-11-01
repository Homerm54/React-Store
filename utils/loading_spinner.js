import { Spinner } from 'react-bootstrap';

const style = {
  position: 'fixed',
  top: '50%',
  left: '50%'
}
export default function Loading() {
  return (
    <Spinner data-testid='loading' style={style} animation="border" role="status" className='m-auto'>
      <span className="sr-only">Loading...</span>
    </Spinner>
  )
}