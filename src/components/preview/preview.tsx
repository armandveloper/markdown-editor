type Props = {
  result: string;
}

export const Preview = (props: Props) => {
  const { result } = props

  return (
    <section className="bg-[#15161a] text-white h-full flex flex-col">
    <header className="px-4 py-3 bg-[#1e1f23]">
      <h2 className="uppercase">Preview</h2>
    </header>
    <div className="px-4 py-5" dangerouslySetInnerHTML={{ __html: result }} />
  </section>
  )
}
