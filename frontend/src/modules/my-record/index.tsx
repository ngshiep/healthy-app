import BodyChart from './components/body-chart'
import CategoryRecord from './components/category-record'

export default function MyRecord() {
  return (
    <div className='flex flex-col items-center mt-[56px] max-w-[960px] flex-1'>
      <div className='grid grid-cols-3 gap-x-12'>
        <CategoryRecord
          englishLabel='BODY RECORD'
          japaneseLabel='自分のカラダの記録'
          img='/MyRecommend-1.jpg'
        ></CategoryRecord>
        <CategoryRecord
          englishLabel='MY EXERCISE'
          japaneseLabel='自分の運動の記録'
          img='/MyRecommend-2.jpg'
        ></CategoryRecord>
        <CategoryRecord englishLabel='MY DIARY' japaneseLabel='自分の日記' img='/MyRecommend-3.jpg'></CategoryRecord>
      </div>
      <BodyChart></BodyChart>
      {/* <div className='grid grid-cols-4 gap-x-2 gap-y-[18px] mt-[56px] mb-[24px]'>
        {!isLoading && data?.map((c) => <ColumnItem key={c.id} column={c}></ColumnItem>)}
        {isLoading &&
          Array(8)
            .fill(0)
            .map((_, index) => <ColumnSkeleton key={index}></ColumnSkeleton>)}
      </div>
      <ButtonPrimary label='コラムをもっと見る'></ButtonPrimary> */}
    </div>
  )
}
