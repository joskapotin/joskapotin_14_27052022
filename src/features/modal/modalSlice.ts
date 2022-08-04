import { createSlice } from '@reduxjs/toolkit'

type InitialState = {
  isOpen: boolean
}

const initialState = {
  isOpen: false,
} as InitialState

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state: InitialState) => {
      state.isOpen = true
    },
    closeModal: (state: InitialState) => {
      state.isOpen = false
    },
  },
  extraReducers: builder => {
    builder.addCase('employees/getEmployees/pending', state => {
      state.isOpen = true
    })

    builder.addCase('employees/saveEmployee/pending', state => {
      state.isOpen = true
    })
  },
})

export const { openModal, closeModal } = modalSlice.actions
export default modalSlice.reducer
