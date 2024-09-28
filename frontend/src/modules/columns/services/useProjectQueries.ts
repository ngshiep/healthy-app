import { useQuery } from '@tanstack/react-query'
import queryKeys from '../../../config/queryKeys'
import { columnService } from './columns.service'

export const useColumns = () => {
  return useQuery({
    queryKey: [queryKeys.columns],
    queryFn: () => columnService.getColumns()
  })
}
