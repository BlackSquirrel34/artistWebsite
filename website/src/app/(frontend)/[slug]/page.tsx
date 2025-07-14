import { headers as getHeaders } from 'next/headers.js'
import Image from 'next/image'
import { getPayload } from 'payload'
import React from 'react'
import { Page } from '@/payload-types'

import { fileURLToPath } from 'url'

import config from '@/payload.config'
import HeroBlock from '@/blocks/hero/HeroBlock'
import ImageBlock from '@/blocks/image/ImageBlock'
import PageNotFound from '@/components/PageNotFound'
import HookMasonry from '@/components/Gallery/HookMasonry'

export default async function FirstPage({ params }: { params: { slug: string } }) {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })
  // inside an app directory, the slug is directly available
  const { slug } = await params

  const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`

  // let's find out if we got a page with the slug from the param's
  const {
    docs: [page],
  } = await payload.find({
    collection: 'pages',
    where: {
      slug: { equals: slug },
    },
  })

  if (!page) {
    return <PageNotFound />
  }

  // goal: centralize this
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
      <h1>Welcome from a page</h1>
      <div>
        {page.layout && page.layout[0] && <pre>{JSON.stringify(page.layout[0], null, 2)}</pre>}
      </div>
      <div className="page">{page.layout?.map((block) => renderBlock(block))}</div>
      <div>
        {!user && <h1>Welcome to the homepage of your new project.</h1>}
        {user && <h1>Welcome back to the home page, {user.email}</h1>}
      </div>
      {/*      <RenderAddTextItems addText={page.addText} /> */}
      {/*     Adding padding directly to the container reduces the space available for columns, which can
      cause fewer columns to appear. To keep the masonry layout consistent, avoid adding padding
      directly to the element with columns- classes; instead, add it to an inner wrapper.  */}
      <div className="w-4/5 mx-auto py-10">
        <div className="px-4">
          <HookMasonry />
        </div>
      </div>
    </div>
  )
}
