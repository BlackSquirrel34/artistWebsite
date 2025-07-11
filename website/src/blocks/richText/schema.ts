import { Block } from 'payload'

export const RichTextBlock: Block = {
  slug: 'richText',
  fields: [
    {
      name: 'content',
      label: 'Content',
      type: 'richText',
      required: true,
    },
  ],
}
