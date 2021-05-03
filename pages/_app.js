import '../styles/globals.scss'
import { GeistProvider, CssBaseline } from '@geist-ui/react'
import Layout from '../components/layout'
import NProgress from 'nprogress';
import 'nprogress/nprogress.css'; //styles of nprogress
import Router from 'next/router'
import { useEffect } from 'react';


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
    <GeistProvider >
    <CssBaseline />
    <Layout>
    <Component {...pageProps} />
    </Layout>
  </GeistProvider>
  )
}

export default MyApp
