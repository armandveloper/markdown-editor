import * as React from 'react'

type Props = {
  children?: React.ReactNode
  className?: string;
}

export const EditorBox = (props: Props) => {
  const { children, className = '' } = props
  return (
    <section className={`bg-[#15161a] text-white h-full flex flex-col ${className}`}>
      {children}
    </section>
  )
}
