import { HeroBlock } from '@/blocks/hero/schema'
import { CollectionConfig } from 'payload'

export const Subpages: CollectionConfig = {
  slug: 'subpages',
  labels: {
    singular: 'Sub-Page',
    plural: 'Sub-Pages',
  },
  fields: [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      label: 'Slug',
      type: 'text',
      admin: {
        position: 'sidebar',
      },
      required: true,
    },
    // each sub-page must be associated with some page
    {
      name: 'parentPage',
      type: 'relationship',
      relationTo: 'pages',
      required: true,
    },
    {
      name: 'layout',
      label: 'Layout',
      type: 'blocks',
      blocks: [HeroBlock],
    },
  ],
}
