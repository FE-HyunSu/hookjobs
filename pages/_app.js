import '../styles/globals.css';
import '../styles/common.css';
import Layout from '../components/common/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
