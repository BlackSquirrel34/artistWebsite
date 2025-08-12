import { Page } from '@/payload-types'

// could be a page with texts only OR a global
export default function TextsOnly({ page }: { page: Page }) {
  // stil some todos left here
  // needs to to pre-processing: grab the slug and render dedicated sub-components.
  // we first need to ensure this has a slug-property.
  // that should eb the case, otherwise we wouldn't have come so far.

  // then cases for the slug that point to a global: /biographie, /ausstellungen, /kontakt
  // extract the json fields we'rei nterested in, give that as a prop to the resp. sub-components.

  return (
    <div>
      <pre className="mt-4 p-4 bg-gray-100 rounded overflow-x-auto">
        {JSON.stringify(page, null, 2)}
      </pre>
    </div>
  )
}
