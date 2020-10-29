import { Container, Image, Row, Col, Button } from 'react-bootstrap';

export default function Checkout() {

  return (
    <Container className='my-3'>
      <Row>
        <Col xs={5}>
          <Image className="" fluid src="images/holders/286x180.svg" alt="Generic placeholder" />
        </Col>
        <Col xs={6} className='mt-1'>
          <h5>Produc Title</h5>
          <p>
            Price: 200000 $
            <br />
            Quantity: 2
          </p>
        </Col>
        <Col as='span' className='d-inline-block text-danger pt-4' role='button' xs={1}>
          X
        </Col>
      </Row>
      <hr />
      <Row>
        <Col xs={5}>
          <Image className="" fluid src="images/holders/286x180.svg" alt="Generic placeholder" />
        </Col>
        <Col xs={6}>
          <h5>Produc Title</h5>
          <p>
            Price: 200000 $
            <br />
            Quantity: 2
          </p>
        </Col>
        <Col as='span' className='d-inline-block text-danger pt-4' role='button' xs={1}>
          X
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          Total
        </Col>
        <Col className='text-success'>
          2000000000 $
        </Col>
      </Row>
      <Button variant='info' className='mt-4'>Procede to Checkout &rarr;</Button>
    </Container>
  )
}