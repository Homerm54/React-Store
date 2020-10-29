import { Container, Image, Row, Col, Button, ListGroup } from 'react-bootstrap';

export default function Checkout() {

  return (
    <Container className='my-3'>
      <ListGroup as='ul'>
        <ListGroup.Item as='li' className='pr-2'>
          <Row>
            <Col xs={5} md={3} className='px-1'>
              <Image className="pt-1" fluid src="images/holders/286x180.svg" alt="Generic placeholder" />
            </Col>
            <Col xs={5} md={8} className='mt-1'>
              <h5 className='h6'>Product Title</h5>
              Price: 200000 $
              <br />
              Quantity: 2
            </Col>
            <Col as='span' className='d-inline-block text-danger pt-4' role='button' xs={1}>
              X
            </Col>
          </Row>
        </ListGroup.Item>
        <ListGroup.Item as='li' className='pr-2'>
          <Row>
            <Col xs={5} md={3} className='px-1'>
              <Image className="pt-1" fluid src="images/holders/286x180.svg" alt="Generic placeholder" />
            </Col>
            <Col xs={5} md={8} className='mt-1'>
              <h5 className='h6'>Product Title</h5>
              Price: 200000 $
              <br />
              Quantity: 2
            </Col>
            <Col as='span' className='d-inline-block text-danger pt-4' role='button' xs={1}>
              X
            </Col>
          </Row>
        </ListGroup.Item>
      </ListGroup>
      <hr />
      <Row className='h5'>
        <Col className='pt-2' xs='auto' md>
          Total
        </Col>
        <Col className='pt-2 text-success' xs='auto' md>
          2000000000 $
        </Col>
        <Col>
          <Button variant='info px-2 px-md-3' md>
            <span className='d-none d-md-inline'>Procede to </span>Checkout &rarr;
          </Button>
        </Col>
      </Row>
    </Container>
  )
}