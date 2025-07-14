import React from 'react'
import '@/styles/global.css'
import FooterServer from '@/blocks/global/Footer/Server'
import Navbar from '@/components/Navbar/Navbar'
import BasicRespNav from '@/components/Navbar/BasicRespNav'
import SubRespNav from '@/components/Navbar/SubRespNav'
import FetchNavData from '@/utils/fetchNavData'
import Footer from '@/components/Footer'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  // data fetching (e.g., ownerName) for navbar
  const ownerName: string = await FetchNavData()

  return (
    <html lang="en">
      <body>
        <main>
          <SubRespNav ownerName={ownerName} />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
