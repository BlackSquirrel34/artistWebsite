import { getPayload, GlobalSlug } from 'payload'
import React, { JSX } from 'react'
import { fileURLToPath } from 'url'

import config from '@/payload.config'
import PageNotFound from '@/components/PageNotFound'

export async function generateContent(slug: string): Promise<JSX.Element> {
  // we need to ensure we'll return a <notFound /> jsx in case nothing matches the slug and we'd
  // otherwise return null
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  // let's find out if we got a page with the slug from the param's
  /*   const {
    docs: [page],
  } = await payload.find({
    collection: 'pages',
    where: {
      slug: { equals: slug },
    },
  })
      // we found neither a page nor a global with that slug?
         if (!page) {
        return <PageNotFound />
      }
    
      // Determine which component to render based on page data
      const hasImages = Array.isArray(page.image) && page.image.length > 0
      const hasTexts = Array.isArray(page.texts) && page.texts.length > 0 

  if (!page) {
    /*   const globalpage = await payload.findGlobal({
      slug: slug as GlobalSlug,
    }) 
  } */

  // Simulate an asynchronous operation.  Replace with your actual logic.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Check the slug (replace with your actual validation)
      if (slug === 'valid-slug') {
        resolve(<div>Hello, {slug}!</div>)
      } else {
        resolve(<p>Invalid slug: {slug}</p>)
      }
    }, 500) // Adjust delay as needed
  })
}
