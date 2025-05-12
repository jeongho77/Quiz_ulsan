// pages/_app.js
import Head from 'next/head';
import '../styles/globals.css'; // 있다면 유지

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="theme-color" content="#1d543f" />
        <meta name="color-scheme" content="only light" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}