import logo from './logo.svg';
import './App.css';
import CakeContainer from './Components/cakeContainer';
import { Provider } from 'react-redux';
import store from './redux/store';
import CakeContainerExternal from './Components/cakeContainerExternal';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
          <CakeContainer/>
          <CakeContainerExternal/>
        </div>
    </Provider>
  
  );
}

export default App;
