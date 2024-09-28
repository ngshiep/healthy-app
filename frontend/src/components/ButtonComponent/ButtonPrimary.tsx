interface IProps {
  label: string
}

export default function ButtonPrimary(props: IProps) {
  const { label } = props
  return (
    <button className='bg-gradient-to-b from-[#FF963C] to-[#FFCC21] rounded-md h-[56px] w-[296px] text-lg leading-[26px] text-white flex items-center justify-center font-light'>
      {label}
    </button>
  )
}
