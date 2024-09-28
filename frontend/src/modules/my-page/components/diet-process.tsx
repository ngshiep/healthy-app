import { CircularProgress } from '@mui/material'

interface IProps {
  date: string
  percent: number
}

export default function DietProcess(props: IProps) {
  const { date, percent } = props
  return (
    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
      <CircularProgress
        variant='determinate'
        value={percent}
        size={180}
        sx={{
          '& .MuiCircularProgress-circle': {
            strokeWidth: 1.5,
            color: '#ffff',
            border: '1px solid #FFCC21',
            boxShadow: '#FFCC21 0px 8px 24px'
          }
        }}
      />
      <div className='flex items-end justify-centers absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white gap-1'>
        <span className='text-[18px] leading-[22px] text-shadow'>{date}</span>
        <span className='text-[25px] leading-[30px] text-shadow'>{percent}%</span>
      </div>
    </div>
  )
}
