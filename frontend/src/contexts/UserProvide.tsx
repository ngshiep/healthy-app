import { createContext, useContext, useState } from 'react'
import IUser from 'src/types/user.type'

const AppContext = createContext<{
  user: IUser | null
  setUser: (user: IUser | null) => void
}>({
  user: null,
  setUser: () => {}
})
export const useUserContext = () => {
  const context = useContext(AppContext)
  return context
}
export default function UserProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  const [user, setUser] = useState<IUser | null>(null)
  return (
    <AppContext.Provider
      value={{
        user,
        setUser
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
