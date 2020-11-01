import { useState, useEffect } from 'react';

import { useRouter } from 'next/router';
import Head from 'next/head';

import { Container } from 'react-bootstrap';
import product_list_creator from '@utils/product_list_generator';
import Loading from '@utils/loading_spinner';
import NetworkRequestMockup from '@utils/NetworkRequestMockup';


/**
 * Web page that will be rendered when the user search form a product on the
 * search form in the Navbar.
 * 
 * Accessed through the <WEBSITE_URL>/search, the query, or name to be searched
 * is in the URL as: search?q=<SEARCH_NAME>.
 * It search in the database, then display a list of products ready for the user to select.
 * In the meantime, it will display a loading component *** TODO ***.
 * 
 * 
 * @returns A List of products, a loading placeholder for while searching, or a *nothing found* message.
 * 
 * @todo Make it mock up a search in the database. 
 */
export default function Search() {

  const [product_list, setProductList] = useState(false);
  const { search } = useRouter().query

  useEffect(()=>{
    NetworkRequestMockup('Search').then(product_list => {
      setProductList(product_list)
    })
  }, []);

  if (!product_list) return <Loading />
  return (
    <Container className='mt-4' as='section'>
      <Head>
        <title>Search: { search }</title>
      </Head>
      <div className='h5 pb-4'>You searched for: {search}</div>
      {product_list_creator(product_list)}
    </Container>
  )
}