import { getImages2 } from '@/utils/apiMock2'

export default function BasicGridGallery() {
  const images = getImages2()

  const gridColumnCount = 6 // total columns in grid
  const rowHeightPx = 150 // fixed row height in pixels

  // Calculate spans for each image based on aspect ratio
  const imagesWithSpans = images.map((img) => {
    const aspectRatio = img.url.width / img.url.height

    // Determine column span (wider images span more columns)
    const colSpan = Math.max(1, Math.round(aspectRatio * 2)) // Adjust multiplier as needed

    // Determine row span (taller images span more rows)
    const rowSpan = Math.max(1, Math.round((1 / aspectRatio) * 2)) // Adjust for taller images

    return {
      ...img,
      colSpan,
      rowSpan,
    }
  })

  return (
    <div className="p-4 text-center">
      {/* Grid container */}
      <div
        className="grid gap-2"
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${gridColumnCount}, minmax(0, 1fr))`,
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
