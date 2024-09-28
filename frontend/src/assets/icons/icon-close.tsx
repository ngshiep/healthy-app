export default function IconClose(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <rect opacity='0.01' width='32' height='32' fill='#FF963C' />
      <path d='M7 7L26 26' stroke='#FF963C' stroke-width='3' />
      <path d='M7 26L26 7' stroke='#FF963C' stroke-width='3' />
    </svg>
  )
}
