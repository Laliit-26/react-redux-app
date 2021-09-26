import logo from './logo.svg';
import { Provider } from 'react-redux';
import store from './redux/Store';
import './App.css';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HooksCakeContainer/>
     <CakeContainer/>
      </div>
      </Provider>
  )
}

export default App;
