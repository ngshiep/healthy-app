import { useQuery } from '@tanstack/react-query'
import queryKeys from '../../../config/queryKeys'
import { recordService } from './records.service'

export const useRecords = () => {
  return useQuery({
    queryKey: [queryKeys.records],
    queryFn: () => recordService.getRecords()
  })
}
