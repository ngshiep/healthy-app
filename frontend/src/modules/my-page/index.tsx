import IconDinner from 'src/assets/icons/icon-dinner'
import IConLunch from 'src/assets/icons/icon-lunch'
import IconMorning from 'src/assets/icons/icon-morning'
import IConSnack from 'src/assets/icons/icon-snack'
import { ButtonPrimary } from 'src/components/ButtonComponent'
import app from 'src/config/app'
import DietItem from './components/diet-item'
import DietProcess from './components/diet-process'
import PageChart from './components/page-chart'
import { useDiets } from './services/usePagesQueries'

export default function MyPage() {
  const { data } = useDiets()
  return (
    <div className='w-full flex-col flex-1 min-h-[calc(100vh-192px)] items-center justify-start flex relative'>
      {/* Header */}
      <div className='w-full flex h-[316px]'>
        <div className='h-full flex-1 relative'>
          <img className='h-full w-full object-cover' src={app.baseUrl.replace('v1/api/', 'images') + '/d01.jpg'}></img>
          <DietProcess date='21/05' percent={75}></DietProcess>
        </div>
        <div className='h-full flex-col items-center justify-center flex-[2]'>
          <PageChart></PageChart>
        </div>
      </div>
      <div className=' flex max-w-[960px] gap-[64px] my-6 items-center justify-center '>
        <IconMorning></IconMorning>
        <IConLunch></IConLunch>
        <IconDinner></IconDinner>
        <IConSnack></IConSnack>
      </div>
      <div className='grid grid-cols-4 gap-2 max-w-[960px]'>
        {data?.diets.map((d) => <DietItem key={d.id} diet={d}></DietItem>)}
      </div>
      <div className='w-full flex items-center justify-center mt-[28px] mb-[64px]'>
        <ButtonPrimary label='記録をもっと見る'></ButtonPrimary>
      </div>
    </div>
  )
}
