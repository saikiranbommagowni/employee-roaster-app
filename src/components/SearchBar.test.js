import { fireEvent, render, screen } from "../test-utils"
import SearchBar from "./SearchBar"

describe("renders Search Bar", () => {
  it("initial render", () => {
    render(<SearchBar />)
    expect(screen.getByTestId("search-bar")).toBeInTheDocument()
  })

  it("check search button", () => {
    render(<SearchBar />)
    expect(screen.getByRole("button", { name: "Search" })).toBeInTheDocument()
  })

  it("check search text value", async () => {
    render(<SearchBar />)
    fireEvent.change(screen.getByPlaceholderText("Search Employees"), {
      target: { value: "sarah" },
    })
    expect(screen.getByPlaceholderText("Search Employees").value).toBe("sarah")
  })
})
