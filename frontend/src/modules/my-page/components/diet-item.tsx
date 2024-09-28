import app from 'src/config/app'
import { IDiet } from 'src/types/diets.type'

export default function DietItem({ diet }: { diet: IDiet }) {
  return (
    <div className='size-[234px] relative'>
      <img
        src={app.baseUrl.replace('v1/api/', 'images') + diet.img}
        alt={diet.type}
        className='object-cover size-[234px]'
      ></img>
      <span className='text-white bg-primary-300 text-[15px] leading-[18px] p-2 absolute left-0 bottom-0 font-inter'>{`${diet.date}.${diet.type}`}</span>
    </div>
  )
}
