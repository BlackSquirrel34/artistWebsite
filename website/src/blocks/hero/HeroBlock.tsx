import { Page } from '@/payload-types'
import { RichText } from '@payloadcms/richtext-lexical/react'
import Image from 'next/image'

// to fix red squiggles cuz of types
// extract from layout the type of hero
type HeroProps = Extract<Page['layout'][0], { blockType: 'hero' }>

export default function HeroBlock({ block }: { block: HeroProps }) {
  return (
    <div className="border border-solid border-red-500 border-2px]">
      <h1>{block.heading}</h1>

      {typeof block?.image === 'object' && block.image.url && (
        <Image src={block.image.url} alt={block.image.alt} width={800} height={600} priority />
      )}
    </div>
  )
}
