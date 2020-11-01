import Head from 'next/head';

import Router from 'next/router';
import NProgress from 'nprogress/nprogress';

import Navbar from 'components/navbar';

import 'utils/icons.lib.js';

//Global CSS
import '@fortawesome/fontawesome-svg-core/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'nprogress/nprogress.css';
import 'styles/global.css'

// Init of NProgress module, a loading bar on top of the browser, to show loafing animation betwee page loads.
Router.onRouteChangeStart = () => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {// Fallback
  NProgress.done();
};

/**
 * 
 * @param {ReactComponent} Component This is the component that will be rendered, aka, the page.
 * @param {Object} pageProps A `{}` with the properties to render the Component.
 * @returns {ReactComponent} The HTML form, with headers, CSS, JS and all the thing.
 */
export default function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <Navbar /> 
      {/*Adding this here, means that the navbar will be persistance across pages, 
      and will be rendered only once in the web site lifetime*/}
      <Component {...pageProps} />
      <noscript>
        You need to enable JavaScript to run the features of this app.
      </noscript>
    </>
  )
}