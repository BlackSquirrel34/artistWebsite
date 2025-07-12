import React from 'react'
import '@/styles/global.css'
import FooterServer from '@/blocks/global/Footer/Server'
import Navbar from '@/components/Navbar/Navbar'
import BasicRespNav from '@/components/Navbar/BasicRespNav'
import SubRespNav from '@/components/Navbar/SubRespNav'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>
        <main>
          <SubRespNav />
          <Navbar />
          Navbar ends here
          {children}
          {/*     <FooterServer /> */}
        </main>
      </body>
    </html>
  )
}
