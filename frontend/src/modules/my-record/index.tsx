import { ButtonPrimary } from 'src/components/ButtonComponent'
import BodyChart from './components/body-chart'
import CategoryRecord from './components/category-record'
import Diary from './components/diary'
import Exercise from './components/exercise'
import { useRecords } from './services/useRecordsQueries'

export default function MyRecord() {
  const { data } = useRecords()

  return (
    <div className='flex flex-col items-center max-w-[960px] flex-1 gap-[56px] mt-[56px]'>
      <div className='grid grid-cols-3 gap-x-12 h-[288px]'>
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

      <Exercise exercies={data?.exercise as any}></Exercise>
      <Diary></Diary>
      <div className='flex items-center mt-6 mb-[64px]'>
        <ButtonPrimary label='自分の日記をもっと見る'></ButtonPrimary>
      </div>
    </div>
  )
}
