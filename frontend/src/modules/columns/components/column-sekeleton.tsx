import { Skeleton } from '@mui/material'
export default function ColumnSkeleton() {
  return (
    <div className='flex flex-col'>
      <div className='relative w-[234px] h-[145px] '>
        <Skeleton variant='rectangular' width={234} height={145} style={{ borderRadius: 4 }} />
      </div>
      <Skeleton variant='text' width='80%' height={22} />
      <Skeleton variant='text' width='80%' height={22} />
      <Skeleton variant='text' width='80%' height={22} />
    </div>
  )
}
