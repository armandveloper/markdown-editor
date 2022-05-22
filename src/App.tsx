import * as React from 'react'
import MarkdownIt from 'markdown-it/'
import { Editor, Preview } from '@/components'

const md = new MarkdownIt()

function App () {
  const [result, setResult] = React.useState('')

  const handleChange = (value: string) => {
    const result = md.render(value)
    setResult(result)
  }

  return (
    <div className="h-screen md:grid md:grid-cols-[1fr_1px_1fr]">
      <Editor onChange={handleChange} />
      <hr className='text-gray-400 bg-current h-full' />
      <Preview result={result} />
    </div>
  )
}

export default App
