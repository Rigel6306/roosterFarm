
import './App.css';
import Admin from './components/admin/Admin';
import Login from './components/customer/Login';
import Nav from './components/customer/Nav'
import AddStaff from './components/delivery/AddStaff';
import Order from './components/order/Order';
import CartProvider from './components/order/cartItemContext';
import Farm from './components/productionStoc/Farm';
import Outlet from './components/productionStoc/Outlet';


function App() {
  return (
    <div className="App">

        {/* <Nav/> */}
        {/* <Login/> */}
        {/* <Farm/> */}
        {/* <Outlet/> */}
        {/* <AddStaff/> */}
        {/* <Home/> */}
  
        <CartProvider>
            <Order/>
        </CartProvider>
        

        {/* <Admin/> */}
    
    </div>
  );
}

export default App;
