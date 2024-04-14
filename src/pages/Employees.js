import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import EmployeesTable from "../components/EmployeesTable";

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