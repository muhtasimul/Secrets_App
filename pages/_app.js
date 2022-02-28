import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/LayoutComponents/Layout';
import { ContextProvider } from '../context/Context'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>

      <ContextProvider>
        <Component {...pageProps} />
      </ContextProvider>
    </Layout>
  )
}

export default MyApp
