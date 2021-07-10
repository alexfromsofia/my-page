import useWindowSize from 'hooks/useWindowSize'
import Image from 'next/image'
import styles from './banner.module.scss'

export const Banner = (): JSX.Element => {
  const { isLandscape } = useWindowSize()
  const src = isLandscape
    ? '/main-background.png'
    : '/main-background-portrait.png'

  return (
    <div className={styles.container}>
      <Image layout="fill" objectFit="cover" loading="lazy" src={src} />
    </div>
  )
}

export default Banner
