import { Card, CardGroup, Button } from 'react-bootstrap';

const bgStyle = {
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
}

const categories = [
  {
    title: 'Accesories', imgUrl: 'url(images/Categories/Accesories.jpg)',
    text: 'Headsets, Keyboars, Keypads, Mouses.', link: '#',
    style: { color: 'black', backgroundColor: 'white'}
  },
  {
    title: 'Computers', imgUrl: 'url(images/Categories/Laptops.jpg)',
    text: 'Laptops, Desktop and More.', link: '#',
    style: { color: 'white', backgroundColor: 'black'}
  },
  {
    title: 'Networking', imgUrl: 'url(images/Categories/Networking.jpg)',
    text: 'Modems, Routers, IT Solutions.', link: '#',
    style: { color: 'white', backgroundColor: 'black'}
  },
  {
    title: 'Gaming', imgUrl: 'url(images/Categories/Gaming.jpg)',
    text: 'Consoles, PC Gaming and Video Cards.', link: '#',
    style: {color: 'white', backgroundColor: 'black'}
  }
]

export default function Categories() {
  return (
    <CardGroup>
      {categories.map(item => {
        const { title, imgUrl, text, link, style } = item;

        return (
          <Card className="py-3  m-2" style={{ ...bgStyle, ...style, backgroundImage: imgUrl}}>
            <Card.Body>
              <Card.Title>{ title }</Card.Title>
              <Card.Text>
                { text }
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button as='a' href={link} variant='info'>See More &gt;</Button>
            </Card.Footer>
          </Card>
        )
      })}
    </CardGroup>
  )
}