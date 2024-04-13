import { useState } from "react"
const useSorting = (filteredEmployees) => {
  const [sortColumn, setSortColumn] = useState("id") // Default sorting by ID
  const [sortOrder, setSortOrder] = useState("asc")

  // Handle column header click to change sorting
  const handleSort = (column) => {
    if (column === sortColumn) {
      // Toggle sorting order
      setSortOrder(sortOrder === "asc" ? "desc" : "asc")
    } else {
      // Reset sorting order when changing column
      setSortColumn(column)
      setSortOrder("asc")
    }
  }

  // Sort employees based on sortColumn and sortOrder
  const sortedEmployees = [...filteredEmployees].sort((a, b) => {
    const aValue = a[sortColumn]
    const bValue = b[sortColumn]
    return sortOrder === "asc"
      ? aValue.localeCompare(bValue)
      : bValue.localeCompare(aValue)
  })

  return { handleSort, sortedEmployees }
}
export default useSorting
