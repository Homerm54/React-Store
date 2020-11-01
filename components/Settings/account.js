import { Container, Col, Form, Button, ButtonGroup, InputGroup, Dropdown, DropdownButton } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Account() {
  return (
    <Container>
      <h2>Hello, username here.</h2>
      <Form className='pt-3'>

        <Form.Row>
          <Col xs={12} md={6}>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text>First Name</InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control placeholder='Here' />
            </InputGroup>
          </Col>
          <Col xs={12} md={6}>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text>Last Name</InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control placeholder='Here' />
            </InputGroup>
          </Col>
        </Form.Row>

        <Form.Row className='pb-3'>
          <InputGroup className="mb-1" as={Col} xs={12}>
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control type='email' placeholder='Email Here' />
          </InputGroup>

          <ButtonGroup size='sm' className='pt-0' as={Col} xs='auto'>
            <Button variant='outline-success'>Edit</Button>
            <Button variant='outline-danger'>Delete</Button>
          </ButtonGroup>
        </Form.Row>

        <InputGroup className="mb-3">
          <DropdownButton as={InputGroup.Prepend} title="Address" variant="outline-secondary">
            <Dropdown.Item href="#"><FontAwesomeIcon icon='map' />&nbsp;&nbsp;Shipping</Dropdown.Item>
            <Dropdown.Item href="#"><FontAwesomeIcon icon='map' />&nbsp;&nbsp;Billing</Dropdown.Item>
          </DropdownButton>
          <Form.Control as='select'>
            <option>Some Country</option>
            <option>Some Other Country</option>
          </Form.Control>
        </InputGroup>

        <Form.Check type='checkbox' id='checkbox'
          label='Billing Information Registered' />

        <Button variant='danger' className='mt-3'>Delete Account</Button>
      </Form>
    </Container>
  )
}