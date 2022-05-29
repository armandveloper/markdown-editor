import { EditorBox } from '../editor-box'
import { TabBar } from '../tab-bar'

type Props = {
  result: string
}

export const Preview = (props: Props) => {
  const { result } = props

  return (
    <EditorBox>
      <TabBar title="Preview" />
      <div className="px-4 py-5" dangerouslySetInnerHTML={{ __html: result }} />
    </EditorBox>
  )
}
