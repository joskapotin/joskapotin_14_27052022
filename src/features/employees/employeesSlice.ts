import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import type { Employee } from '../../@types/types'
import type { Response } from '../../services/api'
import api from '../../services/api'

type InitialState = {
  isLoading: boolean
  isError: boolean
  message: string | null
  list: Employee[]
}

const initialState = {
  isLoading: false,
  isError: false,
  message: null,
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
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getEmployees.pending, state => {
        state.isLoading = true
        state.message = 'Loading employees...'
      })
      .addCase(getEmployees.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.message = `Application ready. ${action.payload.message}`
        state.list = action.payload.employees
      })
      .addCase(getEmployees.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = `Application not ready. ${action.payload}`
      })
      .addCase(saveEmployee.pending, state => {
        state.isLoading = true
        state.message = 'Creating employee...'
      })
      .addCase(saveEmployee.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.message = action.payload.message
        state.list = action.payload.employees
      })
      .addCase(saveEmployee.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload as string
      })
  },
})

export default employeesSlice.reducer
export { getEmployees, saveEmployee }
