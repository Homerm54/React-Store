import { Container, ListGroup, Row, Col, Button, Image } from 'react-bootstrap';

export default function ByCategories() {

  return (
    <Container className='mt-3'>
      <h1 className='h3'>Category: {'Some Category'}</h1>
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
              <Button href='#' size='sm' className='d-inline-block mt-1'>Check Out &rarr;</Button>
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
              <Button href='#' size='sm' className='d-inline-block mt-1'>Check Out &rarr;</Button>
            </Col>
          </Row>
        </ListGroup.Item>
      </ListGroup>
    </Container>
  )
}