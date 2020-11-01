import Head from 'next/head';
import { Container, Row, Col } from 'react-bootstrap';

// Custom components
import Categories from '@components/Landing Page/categories';
import Special from '@components/Landing Page/special';
import Most_Bough from '@components/Landing Page/most_bough';
import style from '@styles/landpage.module.css';

/**
 * Landpage, this is the Page that will be created when 
 * accessing to the <WEBSITE_URL>.
 */
export default function Landpage() {

  return (
    <Container fluid>
      <Head>
        <title>React-Store | Home</title>
      </Head>
      <Row as='section' className={`${style.landing_image}`}>
        <Col xs={5} as='img' src='images/icons/Logo.svg' />
        <Col className='d-inline-block my-auto'>
          <h1 className={style.landing_title}>React-Store</h1>
          <p>
            Your favorite Electronic E-commerce.
            <br />
            PC, headsets, and more, for almost free, forever, ever.
            <br />
            <br />
            <small>
              Omer Marquez - 2020. LTC.
              <br />
              Licensed under Apache License.
              <br />
              Created for showcase, not a real store, sorry :(
            </small>
          </p>
        </Col>
      </Row>
      <Row as='section'>
        <Col xs={12} md>
          <hr />
          <br />
          <Special />
        </Col>
        <Col xs={12} md>
          <hr />
          <br />
          <Most_Bough />
        </Col>
        <Col xs={{ order: 'first', span: 12 }} md={{ order: 'last', span: 12 }}>
          <hr />
          <br />
          <h2>Explore by categories</h2>
          <Categories />
        </Col>
      </Row>
    </Container>
  )
};