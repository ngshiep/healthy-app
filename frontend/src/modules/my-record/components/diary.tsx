export default function Diary() {
  return (
    <div className='flex flex-col'>
      <span className='inline-block h-8 text-text_primary text-[22px] leading-[27px] uppercase font-inter'>
        My diary
      </span>
      <div className='grid grid-cols-4 gap-3'>
        {Array(8)
          .fill(1)
          .map((_, index) => {
            return <DiaryItem key={index}></DiaryItem>
          })}
      </div>
    </div>
  )
}

function DiaryItem() {
  return (
    <div className='size-[231px] p-4 border border-bg_primary flex flex-col text-text_primary gap-2'>
      <div className='text-[18px] leading-[22px] flex flex-col justify-start'>
        <span>2021.05.21 </span>
        <span>23:25</span>
      </div>
      <p className=' text-sm leading-[17px]'>私の日記の記録が一部表示されます。</p>
      <p className=' text-sm leading-[17px]'>
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…
      </p>
    </div>
  )
}
