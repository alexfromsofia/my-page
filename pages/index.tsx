import Head from 'next/head'
import styles from '../styles/index.module.scss'

export const Home = (): JSX.Element => {
  // eslint-disable-next-line no-console
  console.log(styles)

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.body}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
        molestias obcaecati dolor aliquam voluptatibus ea unde neque blanditiis
        ad eveniet libero at rerum consequuntur porro ab harum, animi nostrum
        dolore.
      </div>
    </div>
  )
}

export default Home
