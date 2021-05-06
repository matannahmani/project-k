import '../styles/globals.scss'
import { GeistProvider, CssBaseline } from '@geist-ui/react'
import Layout from '../components/layout'
import NProgress from 'nprogress';
import 'nprogress/nprogress.css'; //styles of nprogress
import Router from 'next/router'
import { useEffect } from 'react';
import Head from 'next/head';


function MyApp({ Component, pageProps }) {
  NProgress.configure({ showSpinner: true });
  Router.events.on('routeChangeStart', () => {
    NProgress.start();
  });
  Router.events.on('routeChangeComplete', () => {
    NProgress.done();
  });
  Router.events.on('routeChangeError', () => {
    NProgress.done();
  });

  useEffect( async() => {
    // check user
    window.scrollTo(0, 1);
    return () => {

    }
  }, [])


  const myTheme = {
    "type": "Custom",
    "palette": {
      "alert": "#ef476f"
    }
  }

  return (
    <>
    <Head>
      <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png"/>
      <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png"/>
      <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png"/>
      <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png"/>
      <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png"/>
      <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png"/>
      <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png"/>
      <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png"/>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png"/>
      <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      <link rel="manifest" href="/manifest.json"/>
      <meta name="msapplication-TileColor" content="#ffffff"/>
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png"/>
      <meta name="theme-color" content="#ffffff"/>
      <title>MyKStar | Coming Soon!</title>
    </Head>
    <GeistProvider >
    <CssBaseline />
    <Layout>
    <Component {...pageProps} />
    </Layout>
  </GeistProvider>
    </>
  )
}

export default MyApp
