// the centralized renderBlock function available anywhere in the project
import HeroBlock from '@/blocks/hero/HeroBlock'
import ImageBlock from '@/blocks/image/ImageBlock'

// gets passed in one block and switches depending on its type
// still we get a problem here. need to elarn more about stuff.
/* export const renderBlock = (block: Page['layout'][0]) => {
    switch (block.blockType) {
      case 'hero':
        return <HeroBlock block={block} key={block.id} />
      case 'image':
        return <ImageBlock block={block} key={block.id} />
      default:
        return null
    }
  } */
