import React from 'react'
import Image from 'next/image'
import { getImages } from '@/utils/apiMock'

const images = getImages()

const BasicMasonry = () => {
  return (
    <div className="colums-1 sm:columns-2 lg:columns-3 py-10 md:py-20 gap-4">
      {images.map((image, index) => (
        <div key={image.id} className="mb-4 break-inside-avoid">
          <Image
            src={image.url}
            alt="alt"
            width={250}
            height={250}
            className="w-full object-cover rounded-lg"
          />
        </div>
      ))}
    </div>
  )
}

export default BasicMasonry
