import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import type { Employee } from '../../@types/types'
import type { Response } from '../../services/api'
import api from '../../services/api'

type InitialState = {
  isLoading: boolean
  isError: boolean
  getMessage: string | null
  saveMessage: string | null
  list: Employee[]
}

const initialState = {
  isLoading: false,
  isError: false,
  getMessage: null,
  saveMessage: null,
  list: [],
} as InitialState

const getEmployees = createAsyncThunk<Response, void, { rejectValue: string }>(
  'employees/getEmployees',
  async (_, thunkAPI) => {
    try {
      return await api.getEmployees()
    } catch (err) {
      const error = err as Error
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

const saveEmployee = createAsyncThunk<Response, Employee, { rejectValue: string }>(
  'employees/saveEmployee',
  async (employee, thunkAPI) => {
    try {
      return await api.saveEmployee(employee)
    } catch (err) {
      const error = err as Error
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    closeSaveMessage: (state: InitialState) => {
      state.isError = false
      state.saveMessage = null
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getEmployees.pending, state => {
        state.isLoading = true
      })
      .addCase(getEmployees.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.getMessage = action.payload.message
        state.list = action.payload.employees
      })
      .addCase(getEmployees.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.getMessage = action.payload as string
      })
      .addCase(saveEmployee.pending, state => {
        state.isLoading = true
      })
      .addCase(saveEmployee.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.saveMessage = action.payload.message
        state.list = action.payload.employees
      })
      .addCase(saveEmployee.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.saveMessage = action.payload as string
      })
  },
})

export default employeesSlice.reducer
export const { closeSaveMessage } = employeesSlice.actions
export { getEmployees, saveEmployee }
