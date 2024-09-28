import app from 'src/config/app'
import { IColumn } from 'src/types/column.type'

interface IProps {
  column: IColumn
}

export default function ColumnItem(props: IProps) {
  const { img, time, title, tag } = props.column
  return (
    <div className='flex flex-col'>
      <div className='relative w-[234px] h-[145px] '>
        <img
          src={app.baseUrl.replace('v1/api/', 'images') + img}
          alt='imges'
          className='w-[234px] h-[145px] object-fill'
        ></img>
        <span className='absolute bottom-0 text-white font-inter text-[15px] leading-[30px] bg-primary-300 px-2'>
          {time}
        </span>
      </div>
      <span className=' text-[15px] leading-[22px] two-line-truncate mt-2'>{title}</span>
      <div className='flex overflow-hidden w-full h-6 gap-2'>
        {tag.map((t) => (
          <a href='#' className='text-sm leading-[22px] text-primary-400' key={t}>
            #{t}
          </a>
        ))}
      </div>
    </div>
  )
}
