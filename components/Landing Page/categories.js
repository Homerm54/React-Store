/**
 * Easy way to add a category in the future, just adding it to `categories`,
 * and will be redered.
 */


import { Card, CardGroup, Button } from 'react-bootstrap';

const bgStyle = {
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
}

/**
 * @requires title: The Title of the Category.
 * @requires text: Small description to add in the cards.
 * @requires style: Shortcut to add style for the cards (only style like font color, text size, etc).
 * @requires imgUrl: URL image for the Card version.
 * @requires link: Link of the category.
 */
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

/**
 * @todo Take this crap out of this folder, make it accessible for the Navbar.
 * @todo Make this render the carts, and a list with names and list, to the Navbar.
 */
export default function Categories() {
  return (
    <CardGroup>
      {categories.map((item, ix) => {
        const { title, imgUrl, text, link, style } = item;

        return (
          <Card key={ix} className="py-3 m-2" style={{ ...bgStyle, ...style, backgroundImage: imgUrl}}>
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