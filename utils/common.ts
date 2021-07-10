import { createClient } from 'contentful'
import { GetServerSidePropsContext } from 'next'

export const isMobile = (context: GetServerSidePropsContext): boolean =>
  Boolean(
    context.req.headers['user-agent'].match(
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
    )
  )

export const getContentfulData = async () => {
  const client = createClient({
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    space: process.env.CONTENTFUL_SPACE_ID,
  })

  return await client.getEntries()
}
