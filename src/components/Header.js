import { useSelector } from "react-redux"
import styles from "./Header.module.css"

const Header = () => {
  const { companyName, companyMotto, companyEst } = useSelector(
    (state) => state.employees.companyInfo
  )

  return (
    <div data-testid="header" className={styles.companyHeader}>
      <h2 className={styles.companyName}>{companyName}</h2>
      <div className={styles.companyDetails}>
        <span className={styles.companyMotto}>{companyMotto}</span>
        <span className={styles.companyEst}>
          Est: {new Date(companyEst).toLocaleDateString()}
        </span>
      </div>
    </div>
  )
}

export default Header
