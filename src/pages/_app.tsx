import '../styles/global.css';

import type { AppProps } from 'next/app'
import Head from 'next/head';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Nekuro Dev</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App