import styles from '../styles/index.module.scss'

export const Home = (): JSX.Element => (
  <div className="container">
    <div className={styles.body}>
      Hi, my name is Alexander Georgiev and I am a front end developer
    </div>
    <div className={styles.test}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
      molestias obcaecati dolor aliquam voluptatibus ea unde neque blanditiis ad
      eveniet libero at rerum consequuntur porro ab harum, animi nostrum dolore.
    </div>
  </div>
)

export default Home
