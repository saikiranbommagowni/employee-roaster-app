import { render, screen } from "../test-utils"

import Header from "./Header"

describe("renders Header", () => {
  const initialState = {
    companyInfo: {
      companyName: "Welch, Feeney and Bauch",
      companyMotto: "leading-edge iterate e-markets",
      companyEst: "2022-11-03T08:19:26.531Z",
    },
  }

  it("initial render", () => {
    render(<Header />, {
      preloadedState: {
        employees: initialState,
      },
    })
    expect(screen.getByTestId("header")).toBeInTheDocument()
    expect(
      screen.getByRole("heading", { value: "Welch, Feeney and Bauch" })
    ).toBeInTheDocument()
  })
})
