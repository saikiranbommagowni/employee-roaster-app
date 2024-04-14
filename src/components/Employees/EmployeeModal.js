import React, { useEffect, useRef } from "react"
import styles from "./EmployeeModal.module.css"

const EmployeeModal = ({ employee, onClose }) => {
  const modalRef = useRef(null)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [onClose])
  return (
    <div className={styles.modal}>
      <div ref={modalRef} className={styles.modalDialog}>
        <div className={styles.modalContent}>
          <div className={styles.modalHeader}>
            <h5 className={styles.modalTitle}>{employee.name}</h5>
            <button type="button" className={styles.close} onClick={onClose}>
              <span>&times;</span>
            </button>
          </div>
          <div className={`${styles.modalBody} ${styles.gridContainer}`}>
            <div className={styles.avatarContainer}>
              <img
                src={`https://ui-avatars.com/api/?name=${employee.firstName} ${employee.lastName}`}
                alt={employee.firstName}
                className={styles.avatar}
              />
            </div>
            <p className={styles.fullName}>
              {employee.firstName} {employee.lastName}
            </p>
            <div className={styles.employeeDetails}>
              <p className={styles.jobTitle}>{employee.jobTitle}</p>
              <p className={styles.age}>Age: {employee.age}</p>
              <p className={styles.dateJoined}>
                Joined on: {new Date(employee.dateJoined).toLocaleDateString()}
              </p>
            </div>
            <p className={styles.bio}>{employee.bio}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmployeeModal
