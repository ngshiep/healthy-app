import { ButtonPrimary } from 'src/components/ButtonComponent'
import CategoryItem from './components/category-item'
import ColumnItem from './components/column-item'
import ColumnSkeleton from './components/column-sekeleton'
import { useColumns } from './services/useColumnsQueries'

export default function Columns() {
  const { data, isLoading } = useColumns()
  return (
    <div className='flex flex-col items-center pt-[56px] max-w-[960px] min-h-[calc(100vh-192px)] relative'>
      <div className='grid grid-cols-4 gap-x-8'>
        <CategoryItem englishLabel='COLUMN' japaneseLabel='オススメ'></CategoryItem>
        <CategoryItem englishLabel='DIET' japaneseLabel='ダイエット'></CategoryItem>
        <CategoryItem englishLabel='BEAUTY' japaneseLabel='美容'></CategoryItem>
        <CategoryItem englishLabel='HEALTH' japaneseLabel='健康'></CategoryItem>
      </div>
      <div className='grid grid-cols-4 gap-x-2 gap-y-[18px] mt-[56px] mb-[24px]'>
        {!isLoading && data?.map((c) => <ColumnItem key={c.id} column={c}></ColumnItem>)}
        {isLoading &&
          Array(8)
            .fill(0)
            .map((_, index) => <ColumnSkeleton key={index}></ColumnSkeleton>)}
      </div>

      <div className='w-full flex items-center justify-center mt-[24px] mb-[64px]'>
        <ButtonPrimary label='コラムをもっと見る'></ButtonPrimary>
      </div>
    </div>
  )
}
