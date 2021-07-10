import Link from 'next/link'
import styles from './logo.module.scss'

export const Logo = (): JSX.Element => {
  return (
    <Link href="/">
      <a className={styles.logo}>
        <span className={styles.name}>Alexander Georgiev</span>
        <span className={styles.position}>Front End Developer</span>
      </a>
    </Link>
  )
}

export default Logo
