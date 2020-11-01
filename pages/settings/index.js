import { useRouter } from 'next/router';
import Head from 'next/head';

import About from '@components/Settings/about';
import Account from '@components/Settings/account';
import Billing from '@components/Settings/billing';
import Orders from '@components/Settings/orders';

import { Accordion, Container, Button } from 'react-bootstrap';

/**
 * Page to display the only way to edit account, check payments, and other settings related
 * stuff.
 * 
 * This component only renders an According with the options, the heavy stuff is in the components imported in this file.
 * 
 * @returns {ReactComponentElement} The Settings UI.
 */
export default function Settings() {

  const { page } = useRouter().query;

  return (
    <Container as={Accordion} defaultActiveKey={page || 'account'} className='pt-2'>
      <Head>
        <title>Settings | { page }</title>
      </Head>
      <Accordion.Toggle as={Button} variant="link" eventKey="account" className='border-bottom w-100 text-left'>
        Account
      </Accordion.Toggle>
      <Accordion.Collapse eventKey="account" className='my-3'>
        <Account />
      </Accordion.Collapse>
      <Accordion.Toggle as={Button} variant="link" eventKey="orders" className='border-bottom w-100 text-left'>
        Orders
      </Accordion.Toggle>
      <Accordion.Collapse eventKey="orders" className='pl-2 my-3'>
        <Orders />
      </Accordion.Collapse>
      <Accordion.Toggle as={Button} variant="link" eventKey="billing" className='border-bottom w-100 text-left'>
        Billing Information
      </Accordion.Toggle>
      <Accordion.Collapse eventKey="billing" className='pl-2 my-3'>
        <Billing />
      </Accordion.Collapse>
      <Accordion.Toggle as={Button} variant="link" eventKey="about" className='border-bottom w-100 text-left'>
        About
      </Accordion.Toggle>
      <Accordion.Collapse eventKey="about" className='pl-2 my-3'>
        <About />
      </Accordion.Collapse>
    </Container>
  )
}
