import { useState, useEffect } from 'react'

import Head from 'next/head';
import { useRouter } from 'next/router';

import { Container, Image, Row, Col, Button, Form, InputGroup, Card, CardDeck } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Loading from '@utils/loading_spinner';
import NetworkRequestMockup from '@utils/NetworkRequestMockup';

/**
 * The is where a single component has a page on it's own, here, the user is able
 * to review to product, add it to the card, or procede to checkout. Futhermore, it
 * also makes recommendation for other products, base on the category of the product in view.
 * 
 * It's planned that the name of the product is passed in the URL, this is why the file
 * have a [] in the name, this way, using Next.js, the page is expecting a name embedded in
 * the URL.
 * 
 * Example:
 * 
 * <WEBSITE_URL>/products/the-best-product-made.
 * Here, 'the-best-product-made' is the name passed to the HTML file.
 */
export default function ProductDescription() {

  const [product, setProduct] = useState(false);
  const { product_name } = useRouter().query

  useEffect(()=>{
    NetworkRequestMockup('Product').then(product => {
      setProduct(product)
    })
  }, []);

  if(!product) return <Loading />
  
  const { img_url, price, seller, quantity, name, description } = product;
  return (
    <Container className='mt-4'>
      <Head>
        <title>React Store | { product_name }</title>
      </Head>
      <Row as='section' className='justify-content-center'>
        <Col xs={12} md={6} className='mb-2 mb-md-0 pr-1'>
          <Image fluid src={img_url[0]} className='w-100'/>
        </Col>
        <Col as={Row} md={2} xs={12} noGutters className='pl-0 ml-4 ml-md-0 justify-content-center'>
          <Col as={Image} src={img_url[1]} xs={3} md={12} />
          <Col as={Image} src={img_url[2]} xs={3} md={12} />
          <Col as={Image} src={img_url[3]} xs={3} md={12} />
          <Col as={Image} src={img_url[4]} xs={3} md={12} />
        </Col>
        <Col as={Row /*Child and Flex container*/} className='mt-3 mt-md-0'>
          <h1 className='h3'>{ name }</h1>
          <ul className='ul-no-decoration pl-2'>
            <li className='text-success'>
              {`Price: ${price} $`}
            </li>
            <li className='text-info'>
              Available: { quantity }
            </li>
            <li className='text-muted'>
              Sold by: { seller }
            </li>
          </ul>
          <Form>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>#</InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control type='number' min='1' max='5' step='1' defaultValue='1' />
              <InputGroup.Append>
                <Button type='submit'>Add <FontAwesomeIcon icon='shopping-cart' /></Button>
                <Button type='submit'>Checkout <FontAwesomeIcon icon='credit-card' /></Button>
              </InputGroup.Append>
            </InputGroup>
          </Form>
        </Col>
      </Row>
      <hr />
      <section className='my-3'>
        <h3 className='h5'>Related</h3>
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
          </Card>
        </CardDeck>
      </section>
      <hr />
      <section>
        <h3 className='h5'>Description</h3>
        <p>
          { description }
        </p>
      </section>
    </Container>
  )
}