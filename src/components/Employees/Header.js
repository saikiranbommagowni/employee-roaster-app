import { useSelector } from "react-redux";
const Header = () => {
    const { companyName, companyMotto, companyEst } = useSelector(state => state.employees.companyInfo);

  return (
    <div className="header">
      <h2 className="company-name">{companyName}</h2>
      <div className="company-details">
        <span className="company-motto">{companyMotto}</span>
        <span className="company-est">Est: {new Date(companyEst).toLocaleDateString()}</span>
      </div>
    </div>
  )
}

export default Header
