import logo from './logo.svg';
import { Provider } from 'react-redux';
import store from './redux/Store';
import './App.css';
import CakeContainer from './components/CakeContainer';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
     <CakeContainer/>
      </div>
      </Provider>
  )
}

export default App;
