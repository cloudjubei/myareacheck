
import Image from 'next/image'
import utilStyles from '../styles/utils.module.css'

export default function Footer({ siteTitle }) {
    return (
      <footer className={utilStyles.footer}>
        <Image
          priority
          src="/images/app.png"
          className={utilStyles.borderCircle}
          height={40}
          width={40}
          alt={siteTitle}
        />
        <p>{siteTitle}</p>
      </footer>
    )
}
