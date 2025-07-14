import { DataFromGlobalSlug, getPayload, GlobalSlug } from 'payload'
import React, { JSX } from 'react'
import PageNotFound from '@/components/PageNotFound'
import HookMasonry from '@/components/Gallery/HookMasonry'
import { fileURLToPath } from 'url'
import config from '@/payload.config'
import { getGlobalsBySlug } from './fetchGlobalsBySlug'

export async function generateContent(slug: string): Promise<JSX.Element> {
  // we need to ensure we'll return a <notFound /> jsx in case nothing matches the slug and we'd
  // otherwise return null
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  // is there a page with this slug?
  const {
    docs: [page],
  } = await payload.find({
    collection: 'pages',
    where: {
      slug: { equals: slug },
    },
  })

  // are there one or several globals with this slug?
  const found_globals = await getGlobalsBySlug(slug)

  return new Promise((resolve) => {
    // there is either a page or global with that slug
    if (page || found_globals.length > 0) {
      resolve(<div>Hello, this is a slug corresponding to a page or global: {slug}!</div>)
    } else {
      // we found neither a page nor a global?
      resolve(<PageNotFound />)
    }
  })

  /* 
      // Determine which component to render based on page data
      const hasImages = Array.isArray(page.image) && page.image.length > 0
      const hasTexts = Array.isArray(page.texts) && page.texts.length > 0  */

  /* const renderBlock = (block: Page['layout'][0]) => {
    switch (block.blockType) {
      case 'hero':
        return <HeroBlock block={block} key={block.id} />
      case 'image':
        return <ImageBlock block={block} key={block.id} />
      default:
        return null
    }
  } */
}
