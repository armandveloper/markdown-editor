import * as React from 'react'
import { EditorBox } from '../editor-box'
import { TabBar } from '../tab-bar'

type Props = {
  onChange: (value: string) => void
}

export const Editor = (props: Props) => {
  const { onChange } = props
  const [value, setValue] = React.useState('')

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value
    setValue(value)
    onChange(value)
  }
  return (
    <EditorBox>
      <TabBar title="Markdown" />
      <textarea
        data-testid="editor"
        className="w-full block h-56 bg-inherit font-sourceCode flex-1 px-4 py-5 resize-none focus:outline-none"
        placeholder="Your code here"
        value={value}
        onChange={handleChange}
      />
    </EditorBox>
  )
}
