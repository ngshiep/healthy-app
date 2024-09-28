import axiosService from 'src/_api/axios.service'
import { urls } from 'src/config/urls'
import { IRecord } from 'src/types/record.type'
import { SuccessResponse } from 'src/types/response.type'

export const recordService = {
  async getRecords() {
    const url = urls.api.records
    const res = await axiosService.get<SuccessResponse<IRecord>>(url)
    return res.data.data
  }
}
