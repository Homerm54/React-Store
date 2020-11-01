import { useState, useEffect } from 'react';

import Head from 'next/head';
import { useRouter } from 'next/router';
import { Container } from 'react-bootstrap';

import product_list_generator from '@utils/product_list_generator';
import Loading from '@utils/loading_spinner';
import NetworkRequestMockup from '@utils/NetworkRequestMockup'


/**
 * Web page to render a list of products, filtered by categories.
 * 
 * The component;s duty are filtering and fetching the data in the DB, 
 * rendering loading/list components, etc.
 * 
 * Make use of the util function to make list out of Products Array.
 * 
 * @returns {ReactComponentElement} The Web Page content.
 */
export default function ByCategories() {

  const [product_list, setProductList] = useState(false);
  const { categories } = useRouter().query

  useEffect(()=>{
    NetworkRequestMockup('Category').then(product_list => {
      setProductList(product_list)
    })
  }, []);

  if(!product_list) return <Loading />
    
  return (
    <Container className='mt-3'>
      <Head>
        <title>React - Store | { categories }</title>
      </Head>
      <h1 className='h3'>Category: { categories }</h1>
      {product_list_generator(product_list)}
    </Container>
  )
}