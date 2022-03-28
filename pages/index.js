import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { getCitiesData } from '../lib/cities'
import Date from '../components/date'
import Footer from '../components/footer'
import utilStyles from '../styles/utils.module.css'

export const siteTitle = 'Your Area Check'

export default function Home({ allCitiesData }) {
  return (
    <div>
      <Image
        priority
        src="/images/app.png"
        className={utilStyles.borderCircle}
        height={100}
        width={100}
        alt={siteTitle}
      />
      <h1 className={utilStyles.heading2Xl}>{siteTitle}</h1>
      <button />
    </div>
  )
}


export async function getStaticProps() {
  const allCitiesData = getCitiesData()
  return {
    props: {
      allCitiesData
    }
  }
}
