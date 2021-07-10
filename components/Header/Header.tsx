import Logo from 'components/Logo/Logo'
import Nav from 'components/Nav/Nav'
import styles from './header.module.scss'

export const Header = (): JSX.Element => {
  return (
    <div className={styles.outer}>
      <div className={styles.container}>
        <Logo />
        <Nav />
      </div>
    </div>
  )
}

export default Header
