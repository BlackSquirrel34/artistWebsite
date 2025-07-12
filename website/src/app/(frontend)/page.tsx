import { headers as getHeaders } from 'next/headers.js'
import Image from 'next/image'
import { getPayload } from 'payload'
import React from 'react'
import { Page } from '@/payload-types'

import { fileURLToPath } from 'url'

import config from '@/payload.config'
import HeroBlock from '@/blocks/hero/HeroBlock'
import ImageBlock from '@/blocks/image/ImageBlock'
import { RichText } from '@payloadcms/richtext-lexical/react'

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })

  const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`

  const {
    docs: [page],
  } = await payload.find({
    collection: 'pages',
    where: {
      slug: { equals: 'home' },
    },
  })

  if (!page) {
    return <div>Page not found</div>
  }

  // gets passed in one block and switches depending on its type
  const renderBlock = (block: Page['layout'][0]) => {
    switch (block.blockType) {
      case 'hero':
        return <HeroBlock block={block} key={block.id} />
      default:
        return null
    }
  }

  const RenderAddTextItems = ({ addText }) => {
    return (
      <div>
        {addText &&
          addText.length > 0 &&
          addText.map((item) => (
            <div key={item.id} style={{ marginBottom: '2em' }}>
              {/* Render the title */}
              <h2>{item.title}</h2>

              {/* Render each layout block with richtext content */}
              {item.layout &&
                item.layout.length > 0 &&
                item.layout.map((block) => {
                  if (block.blockType === 'richtext' && block.content) {
                    return (
                      <div key={block.id} style={{ padding: '1em', border: '1px solid #ccc' }}>
                        {/* Render the richtext content */}
                        <RichText data={block.content} />
                      </div>
                    )
                  }
                  return null
                })}
            </div>
          ))}
      </div>
    )
  }

  return (
    <div
      className="flex flex-col min-h-screen bg-blue-700
    text-amber-300"
    >
      {/*   <div>{page && <pre>{JSON.stringify(page, null, 2)}</pre>}</div> */}

      {/*    <div>
        {page.layout && page.layout[0] && <pre>{JSON.stringify(page.layout[0], null, 2)}</pre>}
      </div> */}

      <div className="page">{page.image?.map((block) => renderBlock(block))}</div>
      <div>
        {!user && <h1>Welcome to your new project.</h1>}
        {user && <h1>Welcome back, {user.email}</h1>}
      </div>

      <RenderAddTextItems addText={page.addText} />
    </div>
  )
}
