import type { RootState } from '../store'

const selectIsLoading = (state: RootState) => state.employees.isLoading
const selectIsError = (state: RootState) => state.employees.isError
const selectMessage = (state: RootState) => state.employees.message
const selectEmployees = (state: RootState) => state.employees.list
const selectModalIsOpen = (state: RootState) => state.modal.isOpen

export { selectIsLoading, selectIsError, selectMessage, selectEmployees, selectModalIsOpen }
