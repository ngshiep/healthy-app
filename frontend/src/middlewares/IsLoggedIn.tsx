import { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { UserService } from 'src/services/user.service'
import { urls } from '../config/urls'

const IsLoggedIn = ({ children }: { children: ReactNode }) => {
  const isLogin = !!UserService.getUser()
  return <>{isLogin ? <Navigate to={urls.web.blog} /> : children}</>
}

export default IsLoggedIn
