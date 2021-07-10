/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import Header from 'components/Header/Header'
import Head from 'next/head'
import '../styles/main.css'
import '../styles/normalize.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
