import { Accordion, Container, Button } from 'react-bootstrap';
import About from 'components/Settings/about';
import Account from 'components/Settings/account';
import Billing from 'components/Settings/billing';
import Orders from 'components/Settings/orders';

/**
 * TODO
 */
export default function Settings() {

  return (
    <Container as={Accordion} defaultActiveKey='0' className='pt-2'>
      <Accordion.Toggle as={Button} variant="link" eventKey="0" className='border-bottom w-100 text-left'>
        Account
      </Accordion.Toggle>
      <Accordion.Collapse eventKey="0" className='my-3'>
        <Account />
      </Accordion.Collapse>
      <Accordion.Toggle as={Button} variant="link" eventKey="1" className='border-bottom w-100 text-left'>
        Orders
      </Accordion.Toggle>
      <Accordion.Collapse eventKey="1" className='pl-2 my-3'>
        <Orders />
      </Accordion.Collapse>
      <Accordion.Toggle as={Button} variant="link" eventKey="2" className='border-bottom w-100 text-left'>
        Billing Information
      </Accordion.Toggle>
      <Accordion.Collapse eventKey="2" className='pl-2 my-3'>
        <Billing />
      </Accordion.Collapse>
      <Accordion.Toggle as={Button} variant="link" eventKey="3" className='border-bottom w-100 text-left'>
        About
      </Accordion.Toggle>
      <Accordion.Collapse eventKey="3" className='pl-2 my-3'>
        <About />
      </Accordion.Collapse>
    </Container>
  )
}
