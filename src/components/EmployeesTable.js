import { useEffect, useMemo, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchEmployees } from "../slices/employeesSlice"
import sortIcon from "../assets/sortIcon.svg"
import usePagination from "../hooks/usePagination"
import useSorting from "../hooks/useSorting"
import EmployeeModal from "./EmployeeModal"
import styles from './EmployeesTable.module.css';

const EmployeesTable = () => {
  const [selectedEmployee, setSelectedEmployee] = useState(null)

  const filteredEmployees = useSelector(
    (state) => state.employees.filteredEmployees
  )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchEmployees())
  }, [dispatch])

  const { sortedEmployees, handleSort } = useSorting(filteredEmployees)
  const {
    currentEmployees,
    handlePageClick,
    currentPage,
    totalPages,
    generatePageNumbers,
    totalEmployeesLength,
    endIndex,
  } = usePagination(sortedEmployees, 5, styles)

  const columns = useMemo(
    () => [
      { header: "ID", accessor: "id" },
      { header: "Name", accessor: "firstName" },
      { header: "Contact No", accessor: "contactNo" },
      { header: "Address", accessor: "address" },
    ],
    []
  )

  const handleEmployeeClick = (employee) => {
    setSelectedEmployee(employee)
  }

  const handleCloseModal = () => {
    setSelectedEmployee(null)
  }

  return (
    <>
      <span className={styles.itemsCount}>
        Showing {endIndex} of {totalEmployeesLength}
      </span>
      <table>
        <thead>
          <tr>
            {columns.map(({ accessor, header }) => (
              <th key={accessor} onClick={() => handleSort(accessor)}>
                {header} <img src={sortIcon} alt="sort" />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentEmployees.map((employee) => {
            const { id, firstName, lastName, contactNo, address } = employee
            return (
              <tr key={id} onClick={() => handleEmployeeClick(employee)}>
                <td>{id}</td>
                <td className={styles.fullName}>
                  <img
                    src={`https://ui-avatars.com/api/?name=${firstName} ${lastName}`}
                    alt={firstName}
                  />
                  <span>{firstName} {lastName}</span>
                </td>
                <td>{contactNo}</td>
                <td>{address}</td>
              </tr>
            )
          })}
        </tbody>
      </table>

      <div className={styles.pagination}>
        <button
          onClick={() => handlePageClick(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        {generatePageNumbers()}
        <button
          onClick={() => handlePageClick(currentPage + 1)}
          disabled={currentPage === (totalPages || 1)}
        >
          Next
        </button>
      </div>
      
      {selectedEmployee && (
        <EmployeeModal employee={selectedEmployee} onClose={handleCloseModal} />
      )}
    </>
  )
}

export default EmployeesTable
