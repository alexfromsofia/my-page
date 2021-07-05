import { GetStaticProps } from 'next'
import { createClient } from 'contentful'
import styles from 'styles/index.module.scss'

export const getStaticProps: GetStaticProps = async () => {
  const client = createClient({
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    space: process.env.CONTENTFUL_SPACE_ID,
  })

  const res = await client.getEntries()

  return {
    props: res,
  }
}

export const Home = (): JSX.Element => {
  return (
    <div className="container">
      <div className={styles.body}></div>
      <div className={styles.test}></div>
    </div>
  )
}

export default Home
