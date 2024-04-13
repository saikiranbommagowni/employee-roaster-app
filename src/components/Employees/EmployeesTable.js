import { useEffect, useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchEmployees } from "../../slices/employeesSlice"
import sortIcon from "../../assets/sortIcon.svg"
import usePagination from "../../hooks/usePagination"
import useSorting from "../../hooks/useSorting"

const EmployeesTable = () => {
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
    endIndex
  } = usePagination(sortedEmployees, 2)


  const columns = useMemo(
    () => [
      { header: 'ID', accessor: 'id' },
      { header: 'Name', accessor: 'firstName' },
      { header: 'Contact No', accessor: 'contactNo' },
      { header: 'Address', accessor: 'address' },
    ],
    []
  );

  return (
    <>
      <span className="items-count">Showing {endIndex} of {totalEmployeesLength}</span>
      <table className="employee-table">
        <thead>
          <tr>
            {columns.map(({accessor, header}) =>  <th onClick={() => handleSort(accessor)}>
              {header} <img src={sortIcon} alt="sort" />
            </th>)}
          </tr>
        </thead>
        <tbody>
          {currentEmployees.map(
            ({ id, firstName, lastName, contactNo, address }) => (
              <tr key={id}>
                <td>{id}</td>
                <td>
                  <img
                    src={`https://ui-avatars.com/api/?name=${firstName} ${lastName}`}
                    alt={firstName}
                  />
                  {firstName} {lastName}
                </td>
                <td>{contactNo}</td>
                <td>{address}</td>
              </tr>
            )
          )}
        </tbody>
      </table>

      <div className="pagination">
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
    </>
  )
}

export default EmployeesTable
