import { RichTextBlock } from '@/blocks/richText/schema'
import { CollectionConfig } from 'payload'

export const Texts: CollectionConfig = {
  slug: 'texts',
  labels: {
    singular: 'Text',
    plural: 'Texte',
  },
  admin: {
    group: 'Bilder und Texte',
    // make visible just for dev.
    // that's how we ensure no orphaned texts are created,  e.g.
    // that are not appearing on any page or where linking is inconsistent to pages collection
    // upon rendering we'll just use the toc and query via the relationship
    //  hidden: true,
  },
  fields: [
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
    /* {
      name: 'shownOnPage',
      type: 'relationship',
      relationTo: 'pages',
      required: true,
    }, */
    {
      name: 'layout',
      label: 'Content',
      type: 'blocks',
      blocks: [RichTextBlock],
    },
  ],
}

// after updating a text we need to run a hook and query if there are conflicts with what is
// currently stored in the pages collection. or maybe jsut update this one, too.
