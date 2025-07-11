import { Page } from '@/payload-types'
import { RichText } from '@payloadcms/richtext-lexical/react'
import Image from 'next/image'

// to fix red squiggles cuz of types
// extract from layout the type of image
type ImageProps = Extract<Page['layout'][0], { blockType: 'image' }>

export default function ImageBlock({ block }: { block: ImageProps }) {
  return (
    <div className="w-[360px] h-[360px] border border-solid border-red-500 border-2px">
      {/*  <h1>ImageBlock</h1> */}

      {block.ImageAspectRatio === 'Quadrat' && (
        <section>
          {block.image && typeof block.image !== 'string' && (
            <Image
              src={block.image.url || ``}
              alt={block.image.alt || ``}
              width={/* block.image.width || */ 360}
              height={/* block.image.height || */ 360}
            />
          )}
        </section>
      )}
    </div>
  )
}
