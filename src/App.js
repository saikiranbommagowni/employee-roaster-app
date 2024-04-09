import { Provider } from 'react-redux';
import store from "./store";
import './App.css';
import Employees from './pages/Employees';

const App = () => {
  return (
    <Provider store={store}>
      <h1>Employees Roaster App</h1>
      <Employees />
    </Provider>
  )
}

export default App;
