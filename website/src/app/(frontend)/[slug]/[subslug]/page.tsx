import { fileURLToPath } from 'url'
import { generateSubpageContent } from '@/components/Subpage/generateSubContent'
interface PageProps {
  params: {
    slug: string
    subslug: string
  }
}

// we defined subpages can ONLY have images (no text, no slugs related to globals)
// so the whole generateSubPageContent logic is a lot simpler

export default async function SubPage({ params }: PageProps) {
  // const headers = await getHeaders()
  //  const { user } = await payload.auth({ headers })
  // inside an app directory, the slug is directly available but must be awaited
  const { slug, subslug } = await params
  console.log('slug: ', slug, 'subslug: ', subslug)

  const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`

  const subcontent = generateSubpageContent(subslug)

  // gets passed in one block and switches depending on its type
  /*   const renderBlock = (block: Page['layout'][0]) => {
    switch (block.blockType) {
      case 'hero':
        return <HeroBlock block={block} key={block.id} />
      case 'image':
        return <ImageBlock block={block} key={block.id} />
      default:
        return null
    }
  } */

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="w-full sm:w-11/12 md:w-4/5 lg:w-2/3 mx-auto mt-20 mb-20 px-8 md:px-12 lg:px-24 pb-12 md:pb-24">
        {subcontent}
      </div>
    </div>
  )
}
