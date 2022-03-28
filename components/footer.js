
import Image from 'next/image'

export default function Footer({ siteTitle }) {
    return (
      <footer>
        <Image
          priority
          src="/images/app.png"
          height={40}
          width={40}
          alt={siteTitle}
        />
        <p>{siteTitle}</p>
      </footer>
    )
}
