import { GlobalConfig } from 'payload'

export const Navigation: GlobalConfig = {
  slug: 'header',
  label: 'Navigation',
  admin: {
    group: 'Seiten und Navigationsmenü',
    // hidden: true,
  },
  fields: [
    {
      name: 'logo',
      label: 'Logo',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'nav',
      label: 'Links',
      type: 'array',
      fields: [
        {
          name: 'label',
          label: 'Label',
          type: 'text',
        },
        // reference your Pages collection
        {
          name: 'page',
          label: 'Page',
          type: 'relationship',
          relationTo: 'pages',
          required: true,
        },
      ],
      minRows: 1,
      maxRows: 20,
      required: true,
    },
  ],
}

// we gonna access the slug for navigation buy querying for the slug on  the fornt-end.
// map over each nav item and generate links using page.slug. For example:
/* 
{header.nav.map((item) => (
  <a key={item.label} href={`/${item.page.slug}`}>
    {item.label}
  </a>
))} */

// well, another idea: ideally we want to popualte the header global automatically, by running a hook.
// it shoudl check for existing pages and subpages and popualte the list of links and sublinks accordingly.

// but i think this is overkill.
