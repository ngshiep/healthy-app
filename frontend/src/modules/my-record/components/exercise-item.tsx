import { IExercise } from 'src/types/exescise.type'

export default function ExerciseItem({ exercise }: { exercise: IExercise }) {
  return (
    <div className='w-full h-10 flex justify-between border-b border-b-[#777777] text-white'>
      <div className='flex flex-col flex-1'>
        <div className='flex gap-3'>
          <span>&#x2022;</span>
          <span>{exercise.name}</span>
        </div>
        <span className='text-primary-300 text-base ml-4 leading-[18px]'>{exercise.calories}kcal</span>
      </div>
      <span className='text-primary-300 text-base'>{exercise.time} min</span>
    </div>
  )
}
