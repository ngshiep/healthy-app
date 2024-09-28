import { useEffect } from 'react'
import { Outlet } from 'react-router'
import { useNavigate } from 'react-router-dom'
import { urls } from 'src/config/urls'
import { useUserContext } from 'src/contexts/UserProvide'
import ButtonToTop from 'src/layouts/pages/components/button-to-top'
import { authService } from 'src/services/auth.service'
import { UserService } from 'src/services/user.service'
import { getRefreshTokenFromLS } from 'src/utils/utilsLocalStorage'
import Footer from '../components/footer'
import Header from '../components/header'

export default function LayoutPrivate() {
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
    <div className='w-screen min-h-screen flex  flex-col !text-sm'>
      <div className='flex min-h-screen overflow-x-hidden w-screen'>
        <Header />
        <div className='flex-1 flex flex-col text-text_secondary w-full bg-white items-center'>
          <div className=' w-full  overflow-y-auto overflow-x-hidden mt-[64px] flex flex-col items-center justify-center'>
            <Outlet></Outlet>
            <Footer></Footer>
            <ButtonToTop></ButtonToTop>
          </div>
        </div>
      </div>
    </div>
  )
}
