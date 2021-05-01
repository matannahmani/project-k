import '../styles/globals.scss'
import { GeistProvider, CssBaseline } from '@geist-ui/react'
import Layout from '../components/layout'


function MyApp({ Component, pageProps }) {
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
