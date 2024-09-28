import { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { useUserContext } from 'src/contexts/UserProvide'
import { UserService } from 'src/services/user.service'
import { urls } from '../config/urls'

const MustLogin = ({ children }: { children: ReactNode }) => {
  const { user } = useUserContext()
  const isLogin = !!(UserService.getUser() || user)
  return <>{!isLogin ? <Navigate to={urls.web.column} /> : children}</>
}

export default MustLogin
