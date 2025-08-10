'use client'

import { getImages2 } from '@/utils/apiMock2'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
//

export default function PreciseAspectRatioGrid() {
  const containerRef = useRef(null)
  const [containerWidth, setContainerWidth] = useState(0)

  const images = getImages2()

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth)
    }
  }, [])

  const totalColumns = 24 // Finer grid
  const rowHeightPx = 150 // Fixed row height

  const imagesWithSpans = images.map((img) => {
    const aspectRatio = img.url.width / img.url.height

    // Calculate the width of one column in pixels
    const columnWidth = containerWidth / totalColumns

    // Determine the number of columns (colSpan) based on aspect ratio
    let colSpan = Math.round(aspectRatio * totalColumns)
    if (colSpan < 1) colSpan = 1
    //  if (colSpan > totalColumns) colSpan = totalColumns

    // Calculate the height in pixels for the image if it spans 'colSpan' columns
    const widthInPixels = colSpan * columnWidth

    // Derive rowSpan based on the image's height in pixels relative to row height
    let rowSpan = Math.round(
      (img.url.height / img.url.width) * colSpan * (columnWidth / rowHeightPx),
    )
    // Alternatively, directly based on aspect ratio:
    // const rowSpan = Math.round(colSpan / aspectRatio);
    if (rowSpan < 1) rowSpan = 1

    return {
      ...img,
      colSpan,
      rowSpan,
    }
  })

  return (
    <div className="p-4 text-center" ref={containerRef}>
      <h1 className="text-2xl mb-4">High-Resolution Aspect Ratio Grid</h1>
      {/* Grid container */}
      <div
        className="grid gap-2"
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${totalColumns}, minmax(0, 1fr))`,
          gridAutoRows: `${rowHeightPx}px`,
          gridAutoFlow: 'dense',
        }}
      >
        {imagesWithSpans.map((img, index) => (
          <div
            key={index}
            style={{
              gridColumn: `span ${img.colSpan}`,
              gridRow: `span ${img.rowSpan}`,
            }}
            className="overflow-hidden rounded shadow"
          >
            <img
              src={img.url.src}
              alt={img.alt}
              className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
