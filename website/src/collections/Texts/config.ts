import { RichTextBlock } from '@/blocks/richText/schema'
import { CollectionConfig } from 'payload'

export const Texts: CollectionConfig = {
  slug: 'texts',
  labels: {
    singular: 'Text',
    plural: 'Texte',
  },
  admin: {
    group: 'Texte',
  },
  fields: [
    /*     {
      name: 'name',
      label: 'Name',
      type: 'text',
      required: true,
    }, */
    // each text must be associated with a toc-entry and vice versa
    // not sure whether we actualy will need this direction anywhere
    {
      name: 'TOCentry',
      type: 'relationship',
      relationTo: 'toc',
      // required: true,
    },
    {
      name: 'title',
      label: 'Überschrift',
      type: 'text',
      required: true,
    },
    {
      name: 'subtitle',
      label: 'Untertitel',
      type: 'text',
    },
    {
      name: 'author',
      label: 'Autor',
      type: 'text',
      required: true,
    },

    {
      name: 'layout',
      label: 'Content',
      type: 'blocks',
      blocks: [RichTextBlock],
    },
  ],
}
