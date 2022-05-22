import * as React from 'react'

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
    <section className="bg-[#15161a] text-white h-full flex flex-col">
      <header className="px-4 py-3 bg-[#1e1f23]">
        <h2 className="uppercase">Markdown</h2>
      </header>
      <textarea
        className="w-full block h-56 bg-inherit font-sourceCode flex-1 px-4 py-5 resize-none focus:outline-none"
        placeholder="Your code here"
        value={value}
        onChange={handleChange}
      />
    </section>
  )
}
