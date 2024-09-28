interface IProps {
  englishLabel: string
  japaneseLabel: string
}

export default function CategoryItem(props: IProps) {
  const { englishLabel, japaneseLabel } = props
  return (
    <div className='w-[216px] h-[144px] bg-bg_primary flex flex-col font-inter justify-center items-center'>
      <div className='flex flex-col text-[22px] leading-[27px] text-primary-300 uppercase font-inter items-center justify-center'>
        <span>RECOMMENDED</span>
        <span>{englishLabel}</span>
      </div>
      <div className='h-[1px] w-[56px] bg-white mt-[10px] mb-2'></div>
      <span className='text-white'>{japaneseLabel}</span>
    </div>
  )
}
