import type { RootState } from '../store'

const selectStatus = (state: RootState) => state.employees.status
const selectEmployees = (state: RootState) => state.employees.list
const selectModalIsOpen = (state: RootState) => state.modal.isOpen

export { selectStatus, selectEmployees, selectModalIsOpen }
