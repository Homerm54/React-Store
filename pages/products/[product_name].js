import Head from 'next/head';

import { Container, Image, Row, Col, Button, Form, Card, CardDeck } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function ProductDescription() {
  return (
    <Container className='mt-4'>
      <Head>
        <title>To Do</title>
      </Head>
      <Row as='section' className='justify-content-center'>
        <Col as={Image} fluid src='/images/holders/286x180.svg' xs={12} md={6} className='mb-2 mb-md-0 pr-1' />
        <Col as={Row /*Both child and flex container*/} md={2} xs={12} className='pl-0'>
          <Col as={Image} src='/images/holders/286x180.svg' rounded xs={3} md={12} />
          <Col as={Image} src='/images/holders/286x180.svg' rounded xs={3} md={12} />
          <Col as={Image} src='/images/holders/286x180.svg' rounded xs={3} md={12} />
          <Col as={Image} src='/images/holders/286x180.svg' rounded xs={3} md={12} />
        </Col>
        <Col as={Row /*Child and Flex container*/} className='mt-3 mt-md-0'>
          <h1 className='h3'>Product Name Here!</h1>
          <ul className='ul-no-decoration pl-2'>
            <li className='text-success'>
              Price: 200000000$
            </li>
            <li className='text-info'>
              Available: 5
            </li>
            <li className='text-muted'>
              Sold by: Me
            </li>
          </ul>
          <Form inline>
            <Form.Row>
              <Form.Group as={Col} controlId='quantity-selector' xs={6} md={4}>
                <Form.Label>Quantity:</Form.Label>
                <Form.Control type='number' min='1' max='5' step='1' className='w-auto' />
              </Form.Group>
              <Col as={Row}>
                <Col as={Button} xs={{ span: 8, offset: 4 }} md={{ span: 6, offset: 6 }} variant='outline-primary' disabled>
                  Add <FontAwesomeIcon icon='shopping-cart' />
                </Col>
                <Col as={Button} xs={{ span: 8, offset: 4 }} md={{ span: 6, offset: 6 }} variant='outline-primary' disabled>
                  <FontAwesomeIcon icon='credit-card' /> Checkout
                </Col>
              </Col>
            </Form.Row>
          </Form>
        </Col>
      </Row>
      <hr />
      <section className='my-3'>
        <h3 className='h6'>Related</h3>
        <CardDeck>
          <Card>
            <Card.Img variant="top" src="/images/holders/286x180.svg" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
      </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="/images/holders/286x180.svg" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to additional
        content.{' '}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="/images/holders/286x180.svg" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This card has even longer content than the first to
                show that equal height action.
      </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardDeck>
      </section>
      <hr />
      <section>
        <h2 className='h6'>Description</h2>
        <p>
          LoremLoremLorem LoremLorem Lorem Lorem Lorem Lorem LoremLorem Lorem
          LoremLoremLorem Lorem  Lorem LoremLorem Lorem Lorem
          Lorem LoremLorem Lorem Lorem Lorem Loremv Lorem Lorem.
        </p>
      </section>
    </Container>
  )
}