import { Page } from '@/payload-types'
import { RichText } from '@payloadcms/richtext-lexical/react'

type RichTextProps = Extract<Page['layout'][0], { blockType: 'richtext' }>

export default function RichTextBlock({ block }: { block: RichTextProps }) {
  return (
    <div className="w-[360px] h-[360px] border border-solid border-red-500 border-2px">
      {/*  <h1>TextBlock</h1> */}

      {/*   Render Text Block. is it really called block.content?? */}
      <RichText data={block.content} />
    </div>
  )
}

/* const RenderAddTextItems = ({ addText }) => {
    return (
      <div>
        {addText &&
          addText.length > 0 &&
          addText.map((item) => (
            <div key={item.id} style={{ marginBottom: '2em' }}>
              <h2>{item.title}</h2>

    
              {item.layout &&
                item.layout.length > 0 &&
                item.layout.map((block) => {
                  if (block.blockType === 'richtext' && block.content) {
                    return (
                      <div key={block.id} style={{ padding: '1em', border: '1px solid #ccc' }}>

                        <RichText data={block.content} />
                      </div>
                    )
                  }
                  return null
                })}
            </div>
          ))}
      </div>
    )
  } */
