import { IExercise } from 'src/types/exescise.type'

export default function ExcerciseItem({ exercise }: { exercise: IExercise }) {
  return (
    <div className='w-full h-10 flex justify-between border-b border-b-[#777777]'>
      <div className='flex flex-col flex-1'>
        <div className='flex gap-3'>
          <span>&#x2022;</span>
          <span>{exercise.name}</span>
        </div>
        <span className='text-primary-300 text-base'>{exercise.calories}</span>
      </div>
      <span className='text-primary-300 text-base'>{exercise.time}</span>
    </div>
  )
}
