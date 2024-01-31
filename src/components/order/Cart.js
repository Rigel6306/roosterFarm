import { useState } from 'react'
import '../../css/order/order.css'

const Cart = ({cartItems,setCart}) => {

    


      const handleRemove = (i)=>{
            setCart(cartItems.filter((item,index)=>index!==i))
      }

      const handleCount = (i,add)=>{
            const newCart = [...cartItems]

                  console.log(add)

                  add?newCart[i].quantity+=1:newCart[i].quantity-=1
               
                  setCart([...newCart]);


      }

    return (
            <div className="cartContainer">
                  
            {cartItems.map((item,i)=>{
                  return(
                        <div className="cartItemContainer" key={i}>
                             <div className="cardescAndBtn">
                                    <div className="itemDescription">
                                          <div className="cartItemName">{item.itemName}</div>
                                          <div className="cartItemPrice">{item.unitPrice}</div>
                                    </div>
                                    <div className="quantityContainer">
                                          <h4>{item.quantity}</h4>
                                    </div>
                                    <div className="cartButons">
                                          <div className="increse" onClick={(e)=>{handleCount(i,true)}}>+</div>
                                          <div className="decrese" onClick={(e)=>{handleCount(i,false)}} >-</div>
                                    </div>
                              </div> 
                              <div className="removeBtn" onClick={()=>{handleRemove(i)}} >Remove Item</div>
                        </div>
                  )
            })}

            </div>
      );
}
 
export default Cart;