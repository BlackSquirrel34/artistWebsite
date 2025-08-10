import { Page } from '@/payload-types'
import GridGallery from '../Gallery/GridGallery'
import BasicGridGallery from '../Gallery/BasicGridGallery'
import SpaceGridGallery from '../Gallery/SpaceGrid'
import TinyGridGallery from '../Gallery/TinyGrid'

// we won't ever meet a global with imges only
export default function ImagesOnly({ page }: { page: Page }) {
  // need to extract the images from the page
  // populate our data structure

  // render images in masonry or whatever nice grid
  return (
    <div>
      {/*  <div>Hello from images only</div> */}
      <div>
        <TinyGridGallery />
      </div>

      {/* <pre className="mt-4 p-4 bg-gray-100 rounded overflow-x-auto">
        {JSON.stringify(page, null, 2)}
      </pre> */}
    </div>
  )
}
