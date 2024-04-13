import { useDispatch, useSelector } from "react-redux"
import { setCurrentPage } from "../slices/employeesSlice"

const usePagination = (sortedEmployees, itemsPerPage) => {
  const currentPage = useSelector((state) => state.employees.currentPage)

  const dispatch = useDispatch()

  const totalEmployeesLength = sortedEmployees.length
  const totalPages = Math.ceil(totalEmployeesLength / itemsPerPage)

  // Calculate number of employees to display on the current page
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = Math.min(startIndex + itemsPerPage, totalEmployeesLength)

  const currentEmployees = sortedEmployees.slice(startIndex, endIndex)

  const handlePageClick = (pageNumber) => {
    dispatch(setCurrentPage(pageNumber))
  }
  const generatePageNumbers = () => {
    const pageNumbers = []
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageClick(i)}
          className={i === currentPage ? "active" : ""}
        >
          {i}
        </button>
      )
    }
    return pageNumbers
  }

  return {
    currentEmployees,
    handlePageClick,
    currentPage,
    totalPages,
    generatePageNumbers,
    totalEmployeesLength,
    endIndex
  }
}
export default usePagination
