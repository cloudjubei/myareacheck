import Head from 'next/head'
import Date from '../../components/date'

export default function City({ cityData }) {
  return (
    <div>
      <Head>
        <title>{cityData.title}</title>
      </Head>
      <article>
        <h1>{cityData.title}</h1>
        <div>
          <Date dateString={cityData.date} />
        </div>
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
  const postData = await getCityData(params.id)
  return {
    props: {
      postData
    }
  }
}
