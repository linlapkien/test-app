import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import NavBar from './nav/NavBar';
import Footer from './foot/Footer';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
