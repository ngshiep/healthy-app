import { createBrowserRouter, Navigate } from 'react-router-dom'
import { urls } from 'src/config/urls'
import ErrorPage404 from 'src/layouts/ErrorPage404'
import LayoutPrivate from 'src/layouts/pages/LayoutPrivate'
import LayoutPublic from 'src/layouts/pages/LayoutPublic'
import IsLoggedIn from 'src/middlewares/IsLoggedIn'
import MustLogin from 'src/middlewares/MustLogin'
import Blog from 'src/modules/blog'
import LoginPage from 'src/modules/login'
import MyPage from 'src/modules/my-page'
import MyRecord from 'src/modules/my-record'

export const router = createBrowserRouter([
  {
    path: urls.web.authentication.login,
    element: (
      <IsLoggedIn>
        <LoginPage />
      </IsLoggedIn>
    )
  },
  {
    path: '',
    element: <LayoutPublic />,
    children: [
      {
        path: urls.web.blog,
        element: <Blog />
      }
    ]
  },
  {
    path: '',
    element: (
      <MustLogin>
        <LayoutPrivate />
      </MustLogin>
    ),
    children: [
      { index: true, element: <Navigate to={urls.web.myPage} replace /> },
      {
        path: urls.web.myPage,
        element: <MyPage />
      },
      {
        path: urls.web.myRecord,
        element: <MyRecord />
      }
    ]
  },
  {
    path: '*',
    element: <ErrorPage404 />
  }
])
