import { Card, Button, CardColumns } from 'react-bootstrap';

export default function MostBough() {
  return (
    <CardColumns>
      <Card>
        <Card.Img variant="top" src="images/holders/286x180.svg" />
        <Card.Body>
          <Card.Title className='text-dark h5 d-inline-block mb-2' as='a' href='#'>Card title that wraps to a new line</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
      </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card className="p-3">
        <blockquote className="blockquote mb-0 card-body">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
            erat a ante.
          </p>
          <footer className="blockquote-footer">
            <small className="text-muted">
              Someone famous in <cite title="Source Title">Source Title</cite>
            </small>
          </footer>
        </blockquote>
      </Card>
      <Card>
        <Card.Img variant="top" src="images/holders/286x180.svg" />
        <Card.Body>
          <Card.Title as='a' className='text-dark h5 d-inline-block mb-2' href='#'>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to additional
        content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card bg="primary" text="white" className="text-center p-3">
        <div className="blockquote mb-0 card-body">
          <h2>Most Bought this Week!</h2>
        </div>
      </Card>
      <Card>
        <Card.Img variant="top" src="images/holders/286x180.svg" />
        <Card.Body>
          <Card.Title as='a' href='#' className='text-dark h5 d-inline-block mb-2'>Card title that wraps to a new line</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
      </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card className="text-right">
        <blockquote className="blockquote mb-0 card-body">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
            erat a ante.
          </p>
          <footer className="blockquote-footer">
            <small className="text-muted">
              Someone famous in <cite title="Source Title">Source Title</cite>
            </small>
          </footer>
        </blockquote>
      </Card>
    </CardColumns>
  )
}
