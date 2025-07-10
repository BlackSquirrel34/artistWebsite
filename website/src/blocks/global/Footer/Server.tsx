import { getPayload } from 'payload'
import config from '@payload-config'
import Image from 'next/image'
import Link from 'next/link'

export default async function FooterServer() {
  const payload = await getPayload({ config })
  // using local api
  const footer = await payload.findGlobal({
    slug: 'footer',
    depth: 1,
  })

  console.log('footer queried', footer)

  return (
    <div className="bg-green-300 border-t-2 border-t-green-500">
      <div className="py-12 max-w-5xl mx-auto flex justify-between w-full items-center">
        <div className="relative w-64 h-20">
          <Image alt={footer.logo.alt} src={footer.logo.url} fill className="object-contain" />
        </div>
        <div>{footer.copyrightNotice}</div>
        <div>
          {footer.nav?.map((item, index) => {
            return (
              <Link key={index} href={item.link} className="text-white text-lg mx-4">
                {item.label}
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
