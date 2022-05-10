import { NextPage } from "next"

interface Props {
  className?: string,
  stroke?: string
}
export const CaretDown: NextPage<Props> = ({ className, stroke }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className || 'h-6 w-6'} fill="none" viewBox="0 0 24 24" stroke={stroke || '#fff'} strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  )
}
