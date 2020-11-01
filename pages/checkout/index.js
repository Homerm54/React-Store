import { Container, Image, Row, Col, Button, ListGroup } from 'react-bootstrap';
import product_list_generator from '@utils/product_list_generator';


const Products_Fetched_Mockup = [
  {
    name: 'Product Title',
    price: 200000,
    image_url: "images/holders/286x180.svg",
    extra_component: <Col as='span' className='d-inline-block text-danger pt-4' role='button' xs={1}>X</Col>,
    quantity: 2
  },
  {
    name: 'Product Title',
    price: 200000,
    image_url: "images/holders/286x180.svg",
    extra_component: <Col as='span' className='d-inline-block text-danger pt-4' role='button' xs={1}>X</Col>,
    quantity: 2
  }
]

/**
 * When a user is ready to pay, this is the UI that will use to pay.
 * Renders a list of products (obviusly, using the util function), an 
 * a payment button, that will be attached to the Strip logic.
 * 
 * @returns {ReactComponentElement} The Payment UI.
 */

export default function Checkout() {

  return (
    <Container className='my-3'>
      {product_list_generator(Products_Fetched_Mockup)}
      <hr />
      <Row className='h5'>
        <Col className='pt-2' xs='auto' md>
          Total
        </Col>
        <Col className='pt-2 text-success' xs='auto' md>
          2000000000 $
        </Col>
        <Col>
          <Button variant='info px-2 px-md-3'>
            <span className='d-none d-md-inline'>Procede to </span>Checkout &rarr;
          </Button>
        </Col>
      </Row>
    </Container>
  )
}