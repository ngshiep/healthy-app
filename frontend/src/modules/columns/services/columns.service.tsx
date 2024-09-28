import axiosService from 'src/_api/axios.service'
import { urls } from 'src/config/urls'
import { IColumn } from 'src/types/column.type'
import { SuccessResponse } from 'src/types/response.type'

export const columnService = {
  async getColumns() {
    const url = urls.api.columns
    const res = await axiosService.get<SuccessResponse<IColumn[]>>(url)
    return res.data.data
  }
}
