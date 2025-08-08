import React from 'react'
import Image from 'next/image'
import { getImages } from '@/utils/apiMock'

const images = getImages()

export default function PageNotFound() {
  return <div>Page was not found. we found neither a slug nor global with this name. 404</div>
}
