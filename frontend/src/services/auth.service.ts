import axiosService from 'src/_api/axios.service'
import configs from 'src/config'
import { SuccessResponse } from 'src/types/response.type'
import IUser from 'src/types/user.type'

export const authService = {
  async login() {
    const res = await axiosService.get(configs.url.api.authentication.login)
    return res.data.data
  },
  async logout() {
    const res = await axiosService.get<SuccessResponse<object>>(configs.url.api.authentication.logout)
    return res.data
  },
  async getUserInfo() {
    const res = await axiosService.get<SuccessResponse<IUser>>(configs.url.api.authentication.user_info)
    return res.data
  }
}
