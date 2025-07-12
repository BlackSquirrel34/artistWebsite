/* import { Cover } from '@/blocks/cover/schema'
import { RichText } from '@/blocks/richText/schema'
import { Image } from '@/blocks/image/schema' */
import { HeroBlock } from '@/blocks/hero/schema'
import { ImageBlock } from '@/blocks/image/schema'
import { RichTextBlock } from '@/blocks/richText/schema'
import { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',
  labels: {
    singular: 'Seite',
    plural: 'Seiten',
  },
  admin: {
    group: 'Seiten und Navigationsmenü',
    // subpages must be created via Pages
    // upon rendering we'll just use the pages and query via the relationship
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
    {
      name: 'layout',
      label: 'Layout',
      type: 'blocks',
      blocks: [HeroBlock, ImageBlock],
    },
    // Add relationship to sub-pages
    {
      name: 'subPages',
      type: 'relationship',
      relationTo: 'subpages',
      hasMany: true, // allows multiple sub-pages
    },
  ],
}
