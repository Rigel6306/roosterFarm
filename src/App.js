
import './App.css';
import Admin from './components/admin/Admin';
import Login from './components/customer/Login';
import PaymentPortal from './components/customer/PaymentPortal';

import AddStaff from './components/delivery/AddStaff';
import RootLayout from './components/layouts/rootLayout';
import Checkout from './components/order/Checkout';
import Order from './components/order/Order';
import CartProvider from './components/order/cartItemContext';
import OrderProcessed from './components/order/orderProcessed';
import Farm from './components/productionStoc/Farm';
import Outlet from './components/productionStoc/Outlet';
import {createBrowserRouter, Routes, Route,Link, createRoutesFromElements, RouterProvider} from 'react-router-dom'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(

     
      <Route path='/' element={<RootLayout/>}>
        <Route  index element={<Admin/>} />   
        <Route path='farm' element={<Farm/>}  />    
        <Route path='order' element={ <Order/> }/>
        <Route path='/order/checkout' element={<Checkout/>}/>
        <Route path='/order/paymetPortal' element={<PaymentPortal/>}/>
        <Route path='/order/checkout/processed' element={<OrderProcessed/>}/>  
      </Route>
      
   
    )
  )

  
  return (
    <div className="App">
        {/* <Home/> */}
        {/* <AddStaff/> */}
        {/* <Login/> */}
        {/* <Outlet/> */}
          
      <CartProvider>
        <RouterProvider router={router}/>
      </CartProvider>
    </div>
  );
}

export default App;
