/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import '../styles/normalize.css'
import '../styles/main.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
