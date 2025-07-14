import { Page } from '@/payload-types'

// we won't ever meet a global with imges only
export default function ImagesOnly({ page }: { page: Page }) {
  return (
    <div>
      <div>Hello from images only</div>

      <pre className="mt-4 p-4 bg-gray-100 rounded overflow-x-auto">
        {JSON.stringify(page, null, 2)}
      </pre>
    </div>
  )
}
