import { render, screen, fireEvent } from "../test-utils"
import EmployeesTable from "./EmployeesTable"

describe("renders Employees Table", () => {
  const employeesData = [
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
    {
      id: "4213691d-b9ff-47fa-b715-2625f841bcfc",
      avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/emsgulam/128.jpg",
      firstName: "Isla",
      lastName: "Hermann",
      jobTitle: "Corporate Optimization Supervisor",
      contactNo: "0420 619 455",
      address: "Hunter Summit East Jacksonland, Australian Capital Territory",
      age: 57,
      bio: "Rerum nihil magni eos ea ut velit. Dolore excepturi nihil. Omnis dignissimos quia suscipit dolore est rerum hic commodi. Rerum et vel distinctio. Dolorem dignissimos voluptatem est unde quia.",
      dateJoined: "2023-07-28T19:33:09.246Z",
    },
    {
      id: "ebab78ce-e056-4c4e-9a73-26bcf9c8e7bf",
      avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/sangdth/128.jpg",
      firstName: "Luke",
      lastName: "Murray",
      jobTitle: "Central Tactics Architect",
      contactNo: "0467 088 753",
      address: "Lilly Circuit Lillyburgh, South Australia",
      age: 56,
      bio: "Omnis voluptatibus quia omnis recusandae reprehenderit. Illo rem est cupiditate. Doloremque et est. Sunt laborum quasi veniam voluptatum repellendus placeat nobis.",
      dateJoined: "2023-03-07T12:45:39.960Z",
    },
    {
      id: "0fd36973-cabe-4a11-81be-2af93c3c84d8",
      avatar:
        "https://s3.amazonaws.com/uifaces/faces/twitter/igorgarybaldi/128.jpg",
      firstName: "Madison",
      lastName: "Murray",
      jobTitle: "Internal Group Designer",
      contactNo: "0495 970 447",
      address: "Aidan Court East Amber, Western Australia",
      age: 25,
      bio: "Modi neque expedita. Sapiente fugit sunt sapiente laborum culpa et suscipit est consequuntur. Voluptate pariatur magnam sed non. Omnis eaque illum quod facere qui sed vel. Possimus unde ea iusto accusamus sit molestias soluta distinctio aut.",
      dateJoined: "2015-09-13T20:22:25.093Z",
    },
    {
      id: "c006e23d-9af5-467a-9926-7de596dac6ae",
      avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/spbroma/128.jpg",
      firstName: "Summer",
      lastName: "Hermiston",
      jobTitle: "Lead Optimization Representative",
      contactNo: "0487 556 885",
      address: "Dylan Manor Nguyentown, Tasmania",
      age: 37,
      bio: "Porro omnis porro. Suscipit excepturi sapiente iure veniam. Nesciunt et sapiente esse.",
      dateJoined: "2024-01-05T19:30:28.000Z",
    },
    {
      id: "1ead9699-ce5b-4ccb-91f9-90c8a6cd74d1",
      avatar:
        "https://s3.amazonaws.com/uifaces/faces/twitter/bublienko/128.jpg",
      firstName: "Stephanie",
      lastName: "Sanford",
      jobTitle: "District Tactics Technician",
      contactNo: "0440 829 196",
      address: "Lockman Run Georgialand, Australian Capital Territory",
      age: 32,
      bio: "Aut dolorum et animi qui aliquid qui rerum fugiat. Ut eum voluptas eveniet debitis est sed. Fugit ipsam est iure rerum voluptas nesciunt laudantium esse.",
      dateJoined: "2022-07-16T08:35:42.005Z",
    },
    {
      id: "f8ab25dd-60fd-4ee4-8aea-74755ee6a2ed",
      avatar:
        "https://s3.amazonaws.com/uifaces/faces/twitter/guiiipontes/128.jpg",
      firstName: "Phoenix",
      lastName: "Fahey",
      jobTitle: "International Division Representative",
      contactNo: "0434 559 516",
      address: "Koelpin Crescent Davidshire, South Australia",
      age: 46,
      bio: "Accusantium ex voluptas. A soluta reprehenderit dolor perferendis sunt dignissimos. Magnam sapiente suscipit. Quam sint qui. Cupiditate maxime earum.",
      dateJoined: "2023-01-13T05:50:57.902Z",
    },
    {
      id: "ab4b259c-948d-40ed-9622-2d536d2c783a",
      avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/vc27/128.jpg",
      firstName: "Phoenix",
      lastName: "Farrell",
      jobTitle: "Senior Infrastructure Planner",
      contactNo: "0481 301 733",
      address: "Angelina Junction Ivystad, South Australia",
      age: 66,
      bio: "Sit ut in veritatis aliquam. Soluta aut a deleniti culpa et. Maiores voluptas illum sint quia et sit consequatur voluptatem culpa. Et sint nam voluptatum et debitis. Qui nulla beatae. Repellat libero dolores et facilis ipsa eveniet.",
      dateJoined: "2018-12-03T09:24:49.349Z",
    },
  ]
  const initialState = {
    companyInfo: {
      companyName: "Welch, Feeney and Bauch",
      companyMotto: "leading-edge iterate e-markets",
      companyEst: "2022-11-03T08:19:26.531Z",
    },
    employees: [...employeesData],
    filteredEmployees: [...employeesData],
    status: "idle",
    error: null,
    currentPage: 1,
  }

  it("check modal open on clicking employee", async () => {
    render(<EmployeesTable />, {
      preloadedState: {
        employees: initialState,
      },
    })
    fireEvent.click(screen.getByText("1b498e26-6f65-4742-a682-a43056fbf434"))
    await screen.findByTestId("emp-modal")
    expect(screen.getByTestId("emp-modal")).toBeInTheDocument()
  })

  it("check modal close", async () => {
    render(<EmployeesTable />, {
      preloadedState: {
        employees: initialState,
      },
    })
    fireEvent.click(screen.getByText("1b498e26-6f65-4742-a682-a43056fbf434"))
    await screen.findByTestId("emp-modal")

    fireEvent.click(screen.getByText("×"))
    expect(screen.queryByTestId("emp-modal")).not.toBeInTheDocument()
  })

  it("check pagination buttons", async () => {
    const { store } = render(<EmployeesTable />, {
      preloadedState: {
        employees: initialState,
      },
    })

    fireEvent.click(screen.getByText("Next"))
    expect(store.getState().employees.currentPage).toBe(2)
    expect(screen.getByRole("button", { name: "Next" })).toContainHTML(
      'disabled=""'
    )

    fireEvent.click(screen.getByText("Prev"))
    expect(store.getState().employees.currentPage).toBe(1)
    expect(screen.getByRole("button", { name: "Prev" })).toContainHTML(
      'disabled=""'
    )
  })
})
