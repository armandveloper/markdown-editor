import * as React from 'react'
import MarkdownIt from 'markdown-it'
import hljs from 'highlight.js'
import 'highlight.js/styles/github-dark.css'
import { Editor, Preview } from '@/components'

const md = new MarkdownIt({
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(str, { language: lang }).value
      } catch (__) {}
    }
    return '' // use external default escaping
  },
  linkify: true,
  typographer: true
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
