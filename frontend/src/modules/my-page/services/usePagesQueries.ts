import { useQuery } from '@tanstack/react-query'
import queryKeys from '../../../config/queryKeys'
import { pageService } from './pages.service'

export const useDiets = () => {
  return useQuery({
    queryKey: [queryKeys.diets],
    queryFn: () => pageService.getDiets()
  })
}
