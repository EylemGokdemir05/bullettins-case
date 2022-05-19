// import "./index.css";
import '../styles/index.scss';
import Provider from '../context/Provider';
import Card from '../pages/Card';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <Provider><Component {...pageProps} /></Provider>;
}
