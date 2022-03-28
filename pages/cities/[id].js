import Head from 'next/head'
import { getAllCitiesIds, getCityData } from '../../lib/cities'

export default function City({ cityData }) {
  return (
    <div>
      <Head>
        <title>{cityData.name}</title>
      </Head>
      <article>
        <h1>{cityData.name}</h1>
        <div dangerouslySetInnerHTML={{ __html: cityData.contentHtml }} />
      </article>
    </div>
  )
}

export async function getStaticPaths() {
  const paths = getAllCitiesIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const cityData = await getCityData(params.id)
  return {
    props: {
      cityData
    }
  }
}
