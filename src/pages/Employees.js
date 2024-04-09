import Header from "../components/Employees/Header";
import SearchBar from "../components/Employees/SearchBar";
import EmployeesTable from "../components/Employees/EmployeesTable";

const Employees = () => {

  return (
    <div className="dashboard">
      <Header />
      <SearchBar />
      <EmployeesTable />
    </div>
  )
}


export default Employees;