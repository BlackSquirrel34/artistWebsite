import { fileURLToPath } from 'url'

import { generateContent } from '@/components/Page/generateContent'

export default async function FirstPage({ params }: { params: { slug: string } }) {
  const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`

  // inside an app directory, the slug is directly available
  const { slug } = await params

  const content = generateContent(slug)

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="w-full sm:w-11/12 md:w-4/5 lg:w-2/3 mx-auto mt-20 mb-20 px-8 md:px-12 lg:px-24 pb-12 md:pb-24">
        {content}
      </div>
    </div>
  )
}

/* </div>
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
            <RenderAddTextItems addText={page.addText} /> 
        Adding padding directly to the container reduces the space available for columns, which can
      cause fewer columns to appear. To keep the masonry layout consistent, avoid adding padding
      directly to the element with columns- classes; instead, add it to an inner wrapper.  
      <div className="">
        <div className="px-4">
          <HookMasonry />
        </div>
      </div>
    </div> */

// goal: centralize this
// gets passed in one block and switches depending on its type
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
