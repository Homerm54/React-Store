import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container } from 'react-bootstrap';

/**
 * I left it here might be useful, but currently not in use.
 */
export default function Footer(){
  return(
  <Container fluid as='footer' role='button' className='text-center bg-success py-1'>
    <FontAwesomeIcon icon='arrow-up' />&nbsp;&nbsp;&nbsp;&nbsp; Back to Top
  </Container>
  )
}