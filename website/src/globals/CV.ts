import { GlobalConfig } from 'payload'

export const CV: GlobalConfig = {
  slug: 'cv',
  label: 'BIO',
  admin: {
    group: 'Personal',
  },
  fields: [
    {
      name: 'cvEvents',
      label: 'CV Events',
      type: 'array',
      minRows: 1,
      maxRows: 20,
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'year',
              label: 'Year',
              type: 'text',
              required: true,
            },
            {
              name: 'description',
              label: 'Description',
              type: 'text',
              required: true,
            },
          ],
        },
      ],
    },
  ],
}
