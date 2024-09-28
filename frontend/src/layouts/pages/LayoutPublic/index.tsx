import { useEffect } from 'react'
import { Outlet } from 'react-router'
import { useNavigate } from 'react-router-dom'
import { urls } from 'src/config/urls'
import { useUserContext } from 'src/contexts/UserProvide'
import { authService } from 'src/services/auth.service'
import { UserService } from 'src/services/user.service'
import { getRefreshTokenFromLS } from 'src/utils/utilsLocalStorage'
import TopBarProject from '../components/TopBarProject'

export default function LayoutPublic() {
  const navigate = useNavigate()
  const { setUser } = useUserContext()

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await authService.getUserInfo()
        UserService.setUser(res.data)
        const refreshToken = getRefreshTokenFromLS()
        setUser({ ...res.data, token: refreshToken })
      } catch (error) {
        navigate(urls.web.authentication.login)
        UserService.removeUser()
      }
    }
    fetch()
  }, [])

  return (
    <div className='w-screen h-screen flex  flex-col !text-sm'>
      <TopBarProject />
      <div className='flex overflow-x-hidden h-screen w-screen'>
        <div className='flex-1 flex flex-col text-text_secondary w-full'>
          <div className='bg-white h-full overflow-x-hidden mt-[50px] flex flex-col'>
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  )
}
