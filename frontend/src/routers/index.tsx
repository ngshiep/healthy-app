import { ThemeProvider } from '@emotion/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router'
import UserProvider from 'src/contexts/UserProvide'
import { router } from './main.routes'
import { theme } from './mui.config'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
})

export default function AppRoutes() {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <UserProvider>
          <RouterProvider router={router}></RouterProvider>
        </UserProvider>
      </QueryClientProvider>
    </ThemeProvider>
  )
}
