import axiosService from 'src/_api/axios.service'
import { urls } from 'src/config/urls'
import { IDiets } from 'src/types/diets.type'
import { SuccessResponse } from 'src/types/response.type'

export const pageService = {
  async getDiets() {
    const url = urls.api.diets
    const res = await axiosService.get<SuccessResponse<IDiets>>(url)
    return res.data.data
  }
}
