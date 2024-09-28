import { IExercise } from 'src/types/exescise.type'
import ExerciseItem from './exercise-item'

interface IProps {
  exercies: IExercise[]
}
export default function Exercise(props: IProps) {
  const { exercies } = props
  return (
    <div className='w-full h-[264px] flex flex-col px-6 py-4 text-white bg-bg_secondary'>
      <div className='flex items-start w-full'>
        <div className='flex flex-col items-start w-[96px] text-balance uppercase font-inter'>
          <span>MY</span>
          <span>EXERCISE</span>
        </div>
        <span className='text-[22px] leading-[27px] font-inter'>2021.05.21</span>
      </div>
      <div className='h-[192px] overflow-auto'>
        <div className='grid grid-cols-2  gap-x-10 gap-y-2'>
          {exercies?.map((e) => <ExerciseItem exercise={e} key={e.id}></ExerciseItem>)}
        </div>
      </div>
    </div>
  )
}
