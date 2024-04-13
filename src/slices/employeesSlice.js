import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const fetchEmployees = createAsyncThunk(
  "employees/fetchEmployees",
  async () => {
    const response = await axios.get("http://localhost:3000/sample-data.json")
    return response.data
  }
)
const initialState = {
  companyInfo: {},
  employees: [],
  filteredEmployees: [],
  status: "idle",
  error: null,
  currentPage: 1
}

const employeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    filterEmployees: (state, { payload }) => {
      const searchText = payload.toLowerCase()
      state.filteredEmployees = state.employees.filter(
        (employee) =>
          employee.firstName.toLowerCase().includes(searchText) ||
          employee.lastName.toLowerCase().includes(searchText)
      )
    },
    setCurrentPage: (state, { payload }) => {
      state.currentPage = payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployees.pending, (state) => {
        state.status = "pending"
      })
      .addCase(fetchEmployees.fulfilled, (state, { payload }) => {
        state.status = "succeeded"
        state.employees = payload.employees
        state.filteredEmployees = payload.employees
        state.companyInfo = payload.companyInfo
      })
      .addCase(fetchEmployees.rejected, (state, { error }) => {
        state.status = "failed"
        state.error = error.message
      })
  },
})

export const { filterEmployees, setCurrentPage } = employeesSlice.actions
export default employeesSlice.reducer
