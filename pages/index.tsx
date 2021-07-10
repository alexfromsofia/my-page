import Banner from 'components/Banner/Banner'
import { GetServerSideProps } from 'next'
import styles from 'styles/index.module.scss'
import { getContentfulData, isMobile } from 'utils/common'

export const getServerSideProps: GetServerSideProps = async (context) => ({
  props: {
    isMobile: isMobile(context),
    content: await getContentfulData(),
  },
})

export const Home = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <Banner />
      <div className={styles.body}></div>
    </div>
  )
}

export default Home
