import { fileURLToPath } from 'url'
import { generateSubpageContent } from '@/components/Subpage/generateSubContent'
interface PageProps {
  params: {
    slug: string
    subslug: string
  }
}

// we defined subpages can ONLY have images (no text, no slugs related to globals)
// so the whole generateSubPageContent logic is simpler

export default async function SubPage({ params }: PageProps) {
  // imaybe not necessary to await params?
  const { slug, subslug } = params
  console.log('slug: ', slug, 'subslug: ', subslug)

  const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`

  const subcontent = generateSubpageContent(subslug)

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="w-full sm:w-11/12 md:w-4/5 lg:w-2/3 mx-auto mt-20 mb-20 px-8 md:px-12 lg:px-24 pb-12 md:pb-24">
        {subcontent}
      </div>
    </div>
  )
}
