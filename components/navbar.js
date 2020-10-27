import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import netlifyIdentity from 'netlify-identity-widget';
import {
  Nav, Navbar, Form, FormControl,
  Button, Badge, NavDropdown
} from 'react-bootstrap';
import style from 'styles/navbar.module.css';


const LogIn = <Button bsPrefix='nav-link' onClick={()=>netlifyIdentity.open('login')}
style={{border: 'none',
  backgroundColor: 'inherit'}}>
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
  <span className='d-md-none'>Shhoping Cart &nbsp;&nbsp;</span>
  <FontAwesomeIcon icon='shopping-cart' />
  <Badge variant="info" className='d-inline-block mb-1 ml-2'>0</Badge>
</Nav.Link>


const Categories = (
  <NavDropdown title="Categories" id="collasible-nav-dropdown">
    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
    <NavDropdown.Divider />
    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
  </NavDropdown>
);

const Settings = (
  <NavDropdown title="Settings" id="collasible-nav-dropdown-settings">
    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
    <NavDropdown.Divider />
    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
  </NavDropdown>
);

/**
 * @returns A Component, what else could it be?
 */
function Custom_Navbar() {

  useEffect(()=>{
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