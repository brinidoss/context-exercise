
import './App.css';
import Header from './components/Header/Header';
import MenuList from './components/MenuList/MenuList';
import Sidebar from './components/Sidebar/Sidebar';
import { OrderContextProvider } from './context/OrderContextProvider';

function App() {
  return (
    <div className="App">
      <OrderContextProvider>
        <Header/>
        <main>
          <MenuList/>
          <Sidebar/>
        </main>
      </OrderContextProvider>
    </div>
  );
}

export default App;
