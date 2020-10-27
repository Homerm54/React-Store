import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import netlifyIdentity from 'netlify-identity-widget';
import {
  Nav, Navbar, Form, FormControl,
  Button, Badge, NavDropdown
} from 'react-bootstrap';

import urls from 'utils/urls';


const LogIn = <Button bsPrefix='nav-link' onClick={() => netlifyIdentity.open('login')}
  style={{
    border: 'none',
    backgroundColor: 'inherit'
  }}>
  <FontAwesomeIcon icon='user' />
  &nbsp;&nbsp;
  Hello, Please Register!
  </Button>

const searchForm = (
  <Form inline>
    <FormControl readOnly type="text" placeholder="Search" className="mr-sm-2 w-auto" />
    <Button variant="outline-dark" disabled>
      <FontAwesomeIcon icon='search' />
    </Button>
  </Form>
)

const shoppingCart = <Nav.Link>
  <span className='d-md-none'>Shoping Cart &nbsp;&nbsp;</span>
  <FontAwesomeIcon icon='shopping-cart' />
  <Badge variant="info" className='d-inline-block mb-1 ml-2'>0</Badge>
</Nav.Link>


const Categories = (
  <NavDropdown title={<span className='d-inline-block mx-2'> <FontAwesomeIcon icon='tag' /> Categories</span>} id="collasible-nav-dropdown">
    <NavDropdown.Item href={urls.accessories}>Accessories</NavDropdown.Item>
    <NavDropdown.Item href={urls.computers}>Computers</NavDropdown.Item>
    <NavDropdown.Item href={urls.networking}>Networking</NavDropdown.Item>
    <NavDropdown.Item href={urls.gaming}>Gaming</NavDropdown.Item>
  </NavDropdown>
);

const Settings = (
  <NavDropdown title={<span className='d-inline-block mx-2'> <FontAwesomeIcon icon='cog' /> Settings</span>} id="collasible-nav-dropdown-settings">
    <NavDropdown.Item href={urls.account}>Account</NavDropdown.Item>
    <NavDropdown.Item href={urls.about}>About</NavDropdown.Item>
    <NavDropdown.Item href={urls.orders}>Orders</NavDropdown.Item>
  </NavDropdown>
);

/**
 * @returns A Component, what else could it be?
 */
function Custom_Navbar() {

  useEffect(() => {
    netlifyIdentity.init()
  });

  return (
    <Navbar bg="light" expand="md" as='header' collapseOnSelect>
      <Navbar.Brand href="#home" className='pr-4'>
        <img alt='Logo' title='Logo' src='/images/icons/Logo.svg' className='d-inline-block w-25 mr-1' />
        React-Store
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" /> {/*This is the Toggle Button*/}
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav as='nav' className="mr-auto">
          {/*Use Next.js 'link' here, as={link}*/}
          {LogIn}
          <NavDropdown.Divider />
          {shoppingCart}
          <NavDropdown.Divider />
          {Categories}
          <NavDropdown.Divider />
          {Settings}
        </Nav>
        {searchForm}
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Custom_Navbar;