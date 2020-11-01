import { Row, Col, Image, Button, ListGroup } from 'react-bootstrap';
import Link from 'next/link';


/**
 * Function Shortcut to reuse logic, create a list of products.
 * 
 * @param {Array} array_of_products An array of Objects, each object representing
 * a product, usually fetched from a Database.
 * The expected attribute of the Object are:
 * 
 * `{
 *   name: of the product,
 *   price: Price of the Product
 *   link: Link of the Single Page product
 *   image_url: url link of the image
 *   extra_component: Extra component to attach to each li, like an X for the Shopping Cart.
 * }`
 * 
 * @returns {ReactComponentElement} A single element with the list of produtcs, using
 * <ul></ul> as the wrapper and each product inside a <li>.
 */
export default function ListCreator(array_of_products) {

  return (
    <ListGroup as='ul'>
      {array_of_products.map((item, ix) => {

        const { name, price, link, image_url, extra_component, quantity  } = item;
        return (
          <ListGroup.Item as='li' className='pr-2' key={ix}>
            <Row>
              <Col xs={5} md={3} className='px-1'>
                <Image className="pt-1" fluid src={image_url} alt="Generic placeholder" />
              </Col>
              <Col xs={5} md={8} className='mt-1'>
                <h5 className='h6'>{ name }</h5>
                {`Price: ${price} $`}
                <br />
                {quantity && `Quantity: ${quantity}`}
                {link && <Link href={`/products/${link}`}><Button as='a' size='sm' className='d-inline-block mt-1'>Check Out &rarr;</Button></Link>}
              </Col>
                {extra_component}
            </Row>
          </ListGroup.Item>
        )
      })}
    </ListGroup>
  )
}