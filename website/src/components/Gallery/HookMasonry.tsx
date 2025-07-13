'use client'

import { getImages } from '@/utils/apiMock'
import useMasonry from '@/utils/useMasonry'
import Image from 'next/image'

export default function HookMasonry() {
  const images = getImages()

  if (!images) {
    return <h1>No images there. Too bad.</h1>
  }

  const masonryContainer = useMasonry()

  return (
    <div
      ref={masonryContainer}
      className="grid items-start gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-6 lg:gap-10"
    >
      {/* Your masonry items here */}

      {images.map((img) => (
        <div key={img.id} className="overflow-hidden rounded-lg cursor-pointer">
          <Image
            src={img.url}
            width={1000}
            height={500}
            alt={img.alt}
            className="hover:scale-105"
          />
        </div>
      ))}
    </div>
  )
}
