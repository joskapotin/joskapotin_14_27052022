import type { RootState } from '../store'

const selectLoading = (state: RootState) => state.employees.isLoading
const selectIsError = (state: RootState) => state.employees.isError
const selectSaveMessage = (state: RootState) => state.employees.saveMessage
const selectEmployees = (state: RootState) => state.employees.list

export { selectLoading, selectIsError, selectSaveMessage, selectEmployees }
