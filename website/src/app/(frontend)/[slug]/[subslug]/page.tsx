import { headers as getHeaders } from 'next/headers.js'
import Image from 'next/image'
import { getPayload } from 'payload'
import React from 'react'
import { Page } from '@/payload-types'

import { fileURLToPath } from 'url'

import config from '@/payload.config'
import HeroBlock from '@/blocks/hero/HeroBlock'
import ImageBlock from '@/blocks/image/ImageBlock'

interface PageProps {
  params: {
    slug: string
    subslug: string
  }
}

// we defined subpages can ONLY have images (no text, no slugs related to globals)
// so the whole generateSubPageContent logic is a lot simpler

export default async function SubPage({ params }: PageProps) {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })
  // inside an app directory, the slug is directly available but must be awaited
  const { slug, subslug } = await params

  const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`

  const {
    docs: [page],
  } = await payload.find({
    collection: 'subpages',
    where: {
      slug: { equals: subslug },
    },
    /* relations: ['parentPage'], // populate relation */
  })

  if (!page) {
    return <div>Page not found</div>
  }

  // gets passed in one block and switches depending on its type
  const renderBlock = (block: Page['layout'][0]) => {
    switch (block.blockType) {
      case 'hero':
        return <HeroBlock block={block} key={block.id} />
      case 'image':
        return <ImageBlock block={block} key={block.id} />
      default:
        return null
    }
  }

  return (
    <div
      className="flex flex-col min-h-screen bg-blue-700
    text-amber-300"
    >
      <h1>Welcome from a sub-page</h1>
      {/* <div>
        {page.layout && page.layout[0] && <pre>{JSON.stringify(page.layout[0], null, 2)}</pre>}
      </div> */}
      <div className="page">{page.layout?.map((block) => renderBlock(block))}</div>
      <div>
        {!user && <h1>Welcome to your new project.</h1>}
        {user && <h1>Welcome back, {user.email}</h1>}
      </div>
    </div>
  )
}
