import axiosService from 'src/_api/axios.service'
import { urls } from 'src/config/urls'

export const loginService = {
  login(email: string, password: string) {
    const url = urls.api.authentication.login
    return axiosService.request({
      method: 'POST',
      url: url,
      data: {
        email,
        password
      }
    })
  },
  logout(token: string) {
    const url = urls.api.authentication.logout
    return axiosService.request({
      method: 'POST',
      url: url,
      data: { token }
    })
  },
  getUserInfo() {
    const url = urls.api.authentication.user_info
    return axiosService.request({
      method: 'GET',
      url: url
    })
  }
}
