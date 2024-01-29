
import './App.css';
import Login from './components/customer/Login';
import Nav from './components/customer/Nav'
import AddStaff from './components/delivery/AddStaff';
import Order from './components/order/Order';
import Farm from './components/productionStoc/Farm';
import Outlet from './components/productionStoc/Outlet';
import Home from './components/customer/Home';
import Signup from'./components/customer/Signup';
import About from './components/aboutAndContact/About';
import Contact from './components/aboutAndContact/contact';
function App() {
  return (
    <div className="App">

        {/* <Nav/> */}
        {/* <Login/> */}
        {/* <Farm/> */}
        {/* <Outlet/> */}
        {/* <AddStaff/> */}
        {/* <Home/> */}
        {/* <Signup/> */}
        {/* <Order/> */}
        {/* <About/> */}
        <Contact/>
    </div>
  );
}

export default App;
