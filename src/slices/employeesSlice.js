import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  searchTerm: "",
  companyInfo: {},
  employees: [],
  status: "idle",
  error: null,
}

const employeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload
    },
  },
})

export const { setSearchTerm } = employeesSlice.actions
export default employeesSlice.reducer
