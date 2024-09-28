import { useEffect, useRef } from 'react'
import { Outlet } from 'react-router'
import { useNavigate } from 'react-router-dom'
import { urls } from 'src/config/urls'
import { useUserContext } from 'src/contexts/UserProvide'
import { authService } from 'src/services/auth.service'
import { UserService } from 'src/services/user.service'
import { getRefreshTokenFromLS } from 'src/utils/utilsLocalStorage'
import Footer from '../components/footer'
import HeaderPrivate from '../components/header-private'

export default function LayoutPrivate() {
  const navigate = useNavigate()
  const { setUser } = useUserContext()
  const containerRef = useRef<HTMLDivElement>(null)
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

  const handleScrollTop = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
  return (
    <div className='w-screen h-screen flex  flex-col !text-sm'>
      <div className='flex h-screen overflow-x-hidden w-screen'>
        <HeaderPrivate />
        <div className='flex-1 flex flex-col text-text_secondary w-full bg-white items-center'>
          <div
            className=' w-full min-h-full overflow-auto overflow-x-hidden pt-[64px] mb-[128px] relative flex flex-col items-center justify-center'
            ref={containerRef}
          >
            <Outlet></Outlet>
            <Footer></Footer>
            {/* <div className='absolute right-2 bottom-3 w-[36px] h-[36px]'>
              <IconButton onClick={handleScrollTop}>
                <svg width='48' height='48' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M24 0.5C36.9787 0.5 47.5 11.0213 47.5 24C47.5 36.9787 36.9787 47.5 24 47.5C11.0213 47.5 0.5 36.9787 0.5 24C0.5 11.0213 11.0213 0.5 24 0.5Z'
                    fill='white'
                    fillOpacity='0.01'
                    stroke='#777777'
                  />
                  <path
                    d='M30.5853 28.042L24.0003 21.6579L17.4153 28.042L16.5391 27.1925L24.0003 19.959L31.4615 27.1925L30.5853 28.042Z'
                    fill='#777777'
                  />
                </svg>
              </IconButton>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}
