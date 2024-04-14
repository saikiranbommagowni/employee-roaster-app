import { render, screen } from '../src/test-utils'
import App from "./App"

describe("App Component", () => {
  it("renders App component with Employees component", () => {
    render(<App />)
    expect(screen.getByTestId("dashboard")).toBeInTheDocument()
  });

})
