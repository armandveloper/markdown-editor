import * as React from 'react'
import MarkdownIt from 'markdown-it/'
import { Editor, Preview } from '@/components'

const md = new MarkdownIt({
  linkify: true
})

function App () {
  const [result, setResult] = React.useState('')

  const handleChange = (value: string) => {
    const result = md.render(value)
    setResult(result)
  }

  return (
    <div className="h-screen divide-y divide-gray-300 md:grid md:grid-cols-2 md:divide-x md:divide-y-0">
      <Editor onChange={handleChange} />
      <Preview result={result} />
    </div>
  )
}

export default App
