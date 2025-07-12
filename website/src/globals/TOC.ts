import { GlobalConfig } from 'payload'

export const TOC: GlobalConfig = {
  slug: 'toc',
  label: 'Inhaltsverzeichnis',
  admin: {
    group: 'Bilder und Texte',
    // we ensure Texts are created from here so there are no orphans
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
