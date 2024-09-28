import app from 'src/config/app'

interface IProps {
  englishLabel: string
  japaneseLabel: string
  img: string
}

export default function CategoryRecord(props: IProps) {
  const { englishLabel, japaneseLabel, img } = props
  return (
    <div className='size-[288px] bg-primary-300 relative p-6'>
      <div className='absolute size-[240px] bg-black bg-opacity-70 top-6 left-6 flex flex-col text-[22px] leading-[27px] text-primary-300 uppercase items-center justify-center z-10 gap-[10px]'>
        <span className=' font-inter text-primary-300 uppercase text-[25px] leading-[30px]'>{englishLabel}</span>
        <span className='text-white inline-block h-6 w-[160px] bg-primary-400 text-center text-sm'>
          {japaneseLabel}
        </span>
      </div>
      <div className='absolute size-[240px]  top-6 left-6'>
        <img className='size-[240px]' src={app.baseUrl.replace('v1/api/', 'images') + img} alt='imges'></img>
      </div>
    </div>
  )
}
