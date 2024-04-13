import { Provider } from "react-redux"
import store from "./store"
import "./styles.css"
import Employees from "./pages/Employees"

const App = () => {
  return (
    <Provider store={store}>
      <div className="container">
        <div className="content">
          <Employees />
        </div>
      </div>
    </Provider>
  )
}

export default App
