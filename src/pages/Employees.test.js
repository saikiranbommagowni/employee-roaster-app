import { render, screen } from "../test-utils"
import Employees from "./Employees"

test("renders Employees component", () => {
  const initialState = {
    companyInfo: {
      companyName: "Welch, Feeney and Bauch",
      companyMotto: "leading-edge iterate e-markets",
      companyEst: "2022-11-03T08:19:26.531Z",
    },
    employees: [
      {
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
      },
    ],
    filteredEmployees: [
      {
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
      },
    ],
    status: "idle",
    error: null,
    currentPage: 1,
  }
  render(<Employees />, {
    preloadedState: {
      employees: initialState,
    },
  })

  //   Check if child components are rendered
  const dashboardElement = screen.getByTestId("dashboard")
  const headerComponent = screen.getByTestId("header")
  const searchBarComponent = screen.getByTestId("search-bar")
  const employeesTableComponent = screen.getByTestId("emp-table")
  const employeesPaginationComponent = screen.getByTestId("emp-pagination")

  expect(dashboardElement).toBeInTheDocument()
  expect(headerComponent).toBeInTheDocument()
  expect(searchBarComponent).toBeInTheDocument()
  expect(employeesTableComponent).toBeInTheDocument()
  expect(employeesPaginationComponent).toBeInTheDocument()

  //   Check whether specific DOM nodes created
  const searchButton = screen.getByRole("button", { name: "Search" })
  const inputElement = screen.getByPlaceholderText("Search Employees")
  const employeeID = screen.getByText("1b498e26-6f65-4742-a682-a43056fbf434")
  const prevButton = screen.getByRole("button", { name: "Prev" })

  expect(searchButton).toBeInTheDocument()
  expect(inputElement).toBeInTheDocument()
  expect(employeeID).toBeInTheDocument()
  expect(prevButton).toBeInTheDocument()
})
