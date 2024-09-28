// import { useNavigate } from 'react-router-dom'
import Logo from 'src/assets/logo.png'
// import { urls } from 'src/config/urls'
// import { useUserContext } from 'src/contexts/UserProvide'
// import { authService } from 'src/services/auth.service'
// import { UserService } from 'src/services/user.service'
import customClassNames from 'src/utils/classNames'
// import { getRefreshTokenFromLS } from 'src/utils/utilsLocalStorage'

function Header() {
  // const navigate = useNavigate()
  // const clickToHomePage = () => {
  //   navigate(urls.web.blog)
  // }
  // const { user, setUser } = useUserContext()

  // const handleLogout = async () => {
  //   try {
  //     const refreshToken = getRefreshTokenFromLS()
  //     const res = await authService.logout(refreshToken || (user?.token ?? ''))
  //     if (res.status === 200) {
  //       navigate(urls.web.authentication.login)
  //     }
  //   } catch (error) {
  //     console.log(error)
  //   }
  //   setUser(null)
  //   UserService.removeUser()
  // }

  return (
    <div
      className={customClassNames(
        'fixed w-screen h-[64px]  flex items-center justify-between px-3 py-2 shadow-sm bg-bg_primary border border text'
      )}
    >
      <button onClick={clickToHomePage} className='flex items-center justify-start w-fit h-full gap-2'>
        <img alt='Logo' src={Logo} className=' flex-shrink-0 flex-grow-0 h-[30px] w-[24px] object-contain'></img>
        <h1 className='text-2xl font-semibold'>HI-KMS</h1>
      </button>
    </div>
  )
}

export default Header
