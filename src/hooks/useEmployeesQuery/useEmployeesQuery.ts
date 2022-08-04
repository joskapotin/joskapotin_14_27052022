import { useQuery } from '@tanstack/react-query'

import api from '../../services/api'

function useEmployeesQuery() {
  const query = useQuery(['getEmployees'], () => api.getEmployees())
  return query
}

export default useEmployeesQuery
