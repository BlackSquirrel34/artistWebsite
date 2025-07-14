import { getPayload } from 'payload'
import config from '@/payload.config'

export default async function FetchNavData(): Promise<string> {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  // api calls
  // querying for the ownerName from Contact global
  const contactInfo = await payload.findGlobal({
    slug: 'contact',
    select: {
      contactDetails: true,
    },
  })

  if (!contactInfo || !contactInfo.contactDetails) {
    return 'Home'
  }

  const ownerName = contactInfo.contactDetails.name
  console.log('ownername queried with helper function: ', ownerName)

  return ownerName
}
