import { useEffect } from 'react';

import Link from 'next/link';

import netlifyIdentity from 'netlify-identity-widget';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Nav, Navbar, InputGroup, FormControl,
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
  <InputGroup className="mb-3 mb-md-0 w-auto">
    <FormControl readOnly type="text" placeholder="Search" className="mr-sm-2 w-auto" />
    <InputGroup.Append>
      <Button variant="outline-dark" disabled>
        <FontAwesomeIcon icon='search' />
      </Button>
    </InputGroup.Append>
  </InputGroup>
)

const shoppingCart = <Nav.Link>
  <span className='d-md-none'>Shoping Cart &nbsp;&nbsp;</span>
  <FontAwesomeIcon icon='shopping-cart' />
  <Badge variant="info" className='d-inline-block mb-1 ml-2'>0</Badge>
</Nav.Link>


const Categories = (
  <NavDropdown title={<span className='d-inline-block mx-2'> <FontAwesomeIcon icon='tag' /> Categories</span>} id="collasible-nav-dropdown">
    <Link href={urls.accessories}><NavDropdown.Item as='a'>Accessories</NavDropdown.Item></Link>
    <Link href={urls.computers}><NavDropdown.Item as='a'>Computers</NavDropdown.Item></Link>
    <Link href={urls.networking}><NavDropdown.Item as='a'>Networking</NavDropdown.Item></Link>
    <Link href={urls.gaming}><NavDropdown.Item as='a'>Gaming</NavDropdown.Item></Link>
  </NavDropdown>
);

const Settings = (
  <NavDropdown title={<span className='d-inline-block mx-2'> <FontAwesomeIcon icon='cog' /> Settings</span>} id="collasible-nav-dropdown-settings">
    <Link href={urls.account}><NavDropdown.Item as='a'>Account</NavDropdown.Item></Link>
    <Link href={urls.billing}><NavDropdown.Item as='a'>Billing Information</NavDropdown.Item></Link>
    <Link href={urls.orders}><NavDropdown.Item as='a'>Orders</NavDropdown.Item></Link>
    <Link href={urls.about}><NavDropdown.Item as='a'>About</NavDropdown.Item></Link>
  </NavDropdown>
);

/**
 * Cornerstone of the user's navegation, this Navbar holds all the widgets needed
 * for the user to navigate throught the app. Settings, Shopping Cart, Search Box, Cetegories and the Home Button.
 * 
 * This component is rendered only once in the Web App lifetime. So is the center of the important components:
 * * The Shopping Cart, which actually holds what the user has searched and added.
 * * The Register System, that only needs to be init once
 * * Other stuff, check the source code.
 * 
 * @returns {ReactComponentElement} The navbar, what else could it be?
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
      <Navbar.Toggle aria-controls="basic-navbar-nav" style={{borderStyle: 'none'}}>
        <FontAwesomeIcon icon='bars' />
      </Navbar.Toggle> {/*This is the Toggle Button*/}
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav as='nav' className="mr-auto">
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