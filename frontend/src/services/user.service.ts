import configs from 'src/config'
import User from 'src/types/user.type'

export const UserService = {
  getUser: (): User | undefined => {
    try {
      if (localStorage.getItem(configs.StorageKeys.user)) {
        return JSON.parse(localStorage.getItem(configs.StorageKeys.user) as string) as User
      }
    } catch (error) {
      return undefined
    }

    return undefined
  },
  setUser: (user: any) => {
    if (user) localStorage.setItem(configs.StorageKeys.user, JSON.stringify(user))
  },
  removeUser: () => {
    localStorage.removeItem(configs.StorageKeys.user)
    localStorage.removeItem(configs.StorageKeys.access)
    localStorage.removeItem(configs.StorageKeys.refresh)
  },
  setRememberMe: (isRemember: string) => {
    localStorage.setItem(configs.StorageKeys.rememberMe, isRemember)
  }
}
