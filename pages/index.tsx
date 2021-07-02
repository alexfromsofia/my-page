import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Document } from '@contentful/rich-text-types'
import { Asset, createClient } from 'contentful'
import { GetStaticProps } from 'next'
import styles from '../styles/index.module.scss'

interface Props {
  bio: {
    fields: Asset['fields'] & {
      helloMessage: Document
      contactInformation: Document
    }
  }
}
// TODO: Auto generate types https://github.com/intercom/contentful-typescript-codegen
export const getStaticProps: GetStaticProps = async () => {
  const client = createClient({
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    space: process.env.CONTENTFUL_SPACE_ID,
  })

  const res = await client.getEntries({ content_type: 'bio' })

  return {
    props: {
      bio: res.items[0],
    },
  }
}

export const Home = ({ bio }: Props): JSX.Element => {
  // eslint-disable-next-line no-console
  console.log(bio)

  return (
    <div className="container">
      <div className={styles.body}>
        {documentToReactComponents(bio.fields.helloMessage)}
      </div>
      <div className={styles.test}>
        {documentToReactComponents(bio.fields.contactInformation)}
      </div>
    </div>
  )
}

export default Home
