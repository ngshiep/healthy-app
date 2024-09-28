import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router'
import UserProvider from 'src/contexts/UserProvide'
import { router } from './main.routes'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
})

export default function AppRoutes() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <RouterProvider router={router}></RouterProvider>
      </UserProvider>
    </QueryClientProvider>
  )
}
