import Link from 'next/link'
import styles from './nav.module.scss'

const links = [
  {
    href: '/',
    text: 'Home',
  },
]

export const Nav = (): JSX.Element => {
  return (
    <div className={styles.container}>
      {links.map(({ href, text }) => (
        <Link key={text} href={href}>
          <a>{text}</a>
        </Link>
      ))}
    </div>
  )
}

export default Nav
