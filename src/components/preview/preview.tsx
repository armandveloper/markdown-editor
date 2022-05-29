import { TabBar } from '../tab-bar'

type Props = {
  result: string
}

export const Preview = (props: Props) => {
  const { result } = props

  return (
    <section className="bg-[#15161a] text-white h-full flex flex-col">
    <TabBar title="Preview" />
    <div className="px-4 py-5" dangerouslySetInnerHTML={{ __html: result }} />
  </section>
  )
}
