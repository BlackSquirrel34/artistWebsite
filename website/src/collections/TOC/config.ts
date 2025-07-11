import { CollectionConfig } from 'payload'

export const TOC: CollectionConfig = {
  slug: 'toc',
  labels: {
    singular: 'Inhaltsverzeichnis',
    plural: 'Inhaltsverzeichnisse',
  },
  admin: {
    group: 'Texte',
  },
  fields: [
    {
      name: 'entries',
      label: 'Einträge',
      type: 'array',
      minRows: 1,
      fields: [
        {
          name: 'title',
          label: 'Titel',
          type: 'text',
          required: true,
        },
        {
          name: 'link',
          label: 'Link',
          type: 'text',
          required: true,
        },
        {
          name: 'author',
          label: 'Autor',
          type: 'text',
          required: true,
        },
        {
          name: 'textRelation',
          label: 'Verknüpfter Text',
          type: 'relationship',
          relationTo: 'texts',
          required: true,
        },
      ],
    },
  ],
}
