import {useCartContext} from './cartItemContext'
import '../../css/order/checkout.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Checkout = () => {
    const [deliveryinfo,setDeliveryInfo] = useState({
            firstName:undefined,
            lastName:undefined,
            addrsLine1:undefined,
            addrsLine2:undefined,
            city:undefined,
            zip:undefined,
            contact:undefined,
            paymentOption:undefined
    });

    const handleValues = (e)=>{
            let prevState = deliveryinfo
            setDeliveryInfo({...prevState,[e.target.name]:e.target.value})

            console.log(deliveryinfo)
      
    }
    let navigate = useNavigate();
    const handleSubmit = ()=>{
    
        deliveryinfo.paymentOption==='card'?navigate("/order/paymetPortal"):navigate("/order/checkout/processed")

    }

    const cart = useCartContext();
 
    let total = 0 
    return (
        <div className="checkoutContainer container">
          

            <div className="chekoutForm Regular bg-light my-4 rounded shadow p-2">
                <h4>Delivery Information</h4>
                <form>
                    <table>
                        <tbody>
                        <tr>
                            <td><label htmlFor="firstName">First Name</label></td>
                            <td><input type="text" value={deliveryinfo.firstName||""} onChange={handleValues} name="firstName" required id="" /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="lastName">Last Name</label></td>
                            <td><input type="text" value={deliveryinfo.lastName||""}  onChange={handleValues} name="lastName" required id="" /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="addrsLine1">Address Line 1</label></td>
                            <td><input type="text" value={deliveryinfo.addrsLine1||""}  onChange={handleValues}  name="addrsLine1" required id="" /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="">Address Line 2</label></td>
                            <td><input type="text" value={deliveryinfo.addrsLine2||""} onChange={handleValues}  name="addrsLine2" required id="" /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="city">City</label></td>
                            <td><input type="text" value={deliveryinfo.city||""} onChange={handleValues}  name="city" required id="" /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="zip">ZIP code</label></td>
                            <td><input type="text" value={deliveryinfo.zip||""} onChange={handleValues}  name="zip" required id="" /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="contact">Contact Number</label></td>
                            <td><input type="text" value={deliveryinfo.contact||""}  onChange={handleValues} name="contact" required id="" /></td>
                        </tr>
                        <tr>
                            <td><h4>Payment Method</h4></td>
                        </tr>
                      
                        <tr>
                            <td><label htmlFor="card">Card Payment</label></td>
                            <td><input type="radio" value="card" onChange={handleValues}    name="paymentOption" id="card" /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="cod">COD</label></td>
                            <td><input type="radio" value="cod"  onChange={handleValues}   name="paymentOption" id="cod" /></td>
                        </tr>
                
                            <tr>
                                <td>
                               
                                </td>
                            </tr>
                        </tbody>
                    </table>
                             
                </form>
            </div>
            
            <div className="orderDetails Regular  my-4 rounded shadow p-4 mx-2">
                <div className="h1">Order Details</div>

                    {cart.map((item,i)=>{
                        total = total+item.unitPrice*item.quantity
                        return(
                           <div className="itemContainer">
                            <div className="itemName">{item.itemName}</div>
                            <div className="itemName">{item.quantity}</div>
                            <div className="itemName">X{item.unitPrice}</div>
                            <div className="itemName">={item.unitPrice*item.quantity}</div>
                           </div>  
                        )
                    })}

                    <h2>Total {total}</h2>
                    <button type='submit' className='checkoutbtn' onClick={handleSubmit}>Confirm Order</button>  
            </div>

        </div>
    );
}
 
export default Checkout;