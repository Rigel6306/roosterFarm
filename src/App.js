
import './App.css';
import Login from './components/customer/Login';
import Nav from './components/customer/Nav'
import AddStaff from './components/delivery/AddStaff';
import Order from './components/order/Order';
import Farm from './components/productionStoc/Farm';
import Outlet from './components/productionStoc/Outlet';


function App() {
  return (
    <div className="App">

        {/* <Nav/> */}
        {/* <Login/> */}
        {/* <Farm/> */}
        <Outlet/>
        {/* <AddStaff/> */}
        {/* <Home/> */}
  
        {/* <Order/> */}
    
    </div>
  );
}

export default App;
