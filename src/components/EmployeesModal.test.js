import { render, screen, fireEvent } from "../test-utils"
import EmployeeModal from "./EmployeeModal"

describe("renders Employee Modal", () => {
  const employeeData = {
    id: "1b498e26-6f65-4742-a682-a43056fbf434",
    avatar: "https://ui-avatars.com/api/?name=Sarah+Kutch",
    firstName: "Sarah",
    lastName: "Kutch",
    jobTitle: "Central Functionality Executive",
    contactNo: "0463 429 337",
    address: "Hayes Terrace South Hollychester, Tasmania",
    age: 44,
    bio: "Laudantium ratione illo exercitationem. Commodi esse totam magnam veritatis reiciendis nobis sint culpa aut. Unde et excepturi id. Aspernatur aut reiciendis mollitia error dignissimos repellendus.",
    dateJoined: "2023-04-20T08:55:39.062Z",
  }

  const handleClose = jest.fn()

  it("check employee modal opened", () => {
    render(<EmployeeModal employee={employeeData} onClose={handleClose} />)
    expect(screen.getByTestId("emp-modal")).toBeInTheDocument()
  })
})
