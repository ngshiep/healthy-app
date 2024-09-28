import { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import customClassNames from 'src/utils/classNames'

interface IProps {
  children: ReactNode
  path?: string
  title: string
}
export default function NavItem(props: IProps) {
  const { children, path, title } = props
  return (
    <NavLink
      to={path ?? '#'}
      className={({ isActive }) =>
        customClassNames('relative rounded-md w-full', isActive && path ? ' text-primary-400' : 'text-white')
      }
    >
      <div className='h-12 w-[160px] flex items-center justify-start  cursor-pointer  gap-2'>
        {children}
        <span className={`text-base`}>{title}</span>
      </div>
    </NavLink>
  )
}
