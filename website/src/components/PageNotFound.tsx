import React from 'react'
import Image from 'next/image'
import { getImages } from '@/utils/apiMock'

const images = getImages()

export default function PageNotFound() {
  return <div>Page was not found. 404</div>
}
