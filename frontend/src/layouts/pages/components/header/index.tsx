import { useState } from 'react'
import { useNavigate } from 'react-router'
import IconChallenge from 'src/assets/icons/icon-challenge'
import IconClose from 'src/assets/icons/icon-close'
import IconInfo from 'src/assets/icons/icon-info'
import IconMenu from 'src/assets/icons/icon-menu'
import IconRecord from 'src/assets/icons/icon-record'
import Logo from 'src/assets/icons/logo'
import PopoverComponent from 'src/components/PopoverComponent'
import { urls } from 'src/config/urls'
import { useUserContext } from 'src/contexts/UserProvide'
import { loginService } from 'src/modules/login/services/login.service'
import { UserService } from 'src/services/user.service'
import customClassNames from 'src/utils/classNames'
import { getRefreshTokenFromLS } from 'src/utils/utilsLocalStorage'
import NavItem from '../nav-item'
import HeaderMenuItem from './header-menu-Item'

function Header() {
  const [anchorEl, setAnchorEl] = useState(null)
  const { user, setUser } = useUserContext()

  const handleCloseMenu = () => {
    setAnchorEl(null)
  }
  const handleOpenMenu = (event: any) => {
    setAnchorEl(event.currentTarget)
  }

  const navigate = useNavigate()
  const clickToMyPage = () => {
    navigate(urls.web.myPage)
  }

  const handleLogout = async () => {
    try {
      const refreshToken = getRefreshTokenFromLS()
      const res = await loginService.logout(refreshToken || (user?.token ?? ''))
      if (res.status === 200) {
        navigate(urls.web.authentication.login)
      }
    } catch (error) {
      console.log(error)
    }
    setUser(null)
    UserService.removeUser()
  }
  return (
    <header
      className={customClassNames(
        'fixed w-screen h-[64px]  flex items-center justify-center bg-bg_primary border border-border z-50 '
      )}
    >
      <div className='max-w-[960px] w-full flex items-center justify-between'>
        <button className='flex items-center justify-start w-fit h-full gap-2' onClick={clickToMyPage}>
          <Logo></Logo>
        </button>
        <div className={customClassNames('flex items-center ', user ? 'justify-center' : 'justify-end')}>
          {user && (
            <>
              <NavItem path={urls.web.myRecord} title='自分の記録'>
                <IconRecord></IconRecord>
              </NavItem>
              <NavItem title='チャレンジ'>
                <IconChallenge></IconChallenge>
              </NavItem>
              <NavItem title='お知らせ'>
                <div className='relative w-fit h-fit'>
                  <IconInfo></IconInfo>
                  <span className='absolute top-0 -right-2 inline-block size-4 rounded-full bg-primary-500 text-center text-[10px] leading-4 text-white'>
                    1
                  </span>
                </div>
              </NavItem>
            </>
          )}

          <button onClick={handleOpenMenu}>
            <div className='size-8'>
              <IconMenu
                className={customClassNames(
                  'size-8 w-full h-full cursor-pointer inline-block',
                  anchorEl ? 'hidden' : ''
                )}
              ></IconMenu>
              <IconClose
                className={customClassNames(
                  'size-8 w-full h-full cursor-pointer inline-block',
                  !anchorEl ? 'hidden' : ''
                )}
              ></IconClose>
            </div>
          </button>
        </div>
      </div>
      <PopoverComponent anchorElement={anchorEl} handleClose={handleCloseMenu}>
        <HeaderMenuItem title='自分の記録'></HeaderMenuItem>
        <HeaderMenuItem title='体重グラフ'></HeaderMenuItem>
        <HeaderMenuItem title='目標'></HeaderMenuItem>
        <HeaderMenuItem
          title='コラム一覧'
          onClick={() => {
            navigate(urls.web.column)
          }}
        ></HeaderMenuItem>
        <HeaderMenuItem title='設定'></HeaderMenuItem>
        {user && <HeaderMenuItem title='ログアウト' onClick={handleLogout}></HeaderMenuItem>}
        {!user && (
          <HeaderMenuItem
            title='ログイン'
            onClick={() => {
              navigate(urls.web.authentication.login)
            }}
          ></HeaderMenuItem>
        )}
      </PopoverComponent>
    </header>
  )
}

export default Header
