import { useEffect, useState } from "react";
import axios from 'axios'
import '../../css/order/order.css'
import Cart from "./Cart";

const Order = () => {
    const [stock, setStock] = useState([]);
    const imagePath = '../../asstes/Cocktail.jpg'
    const [cartItems, setCartItems] = useState([])
    useEffect(() => {
        getStock();
    }, [])

    const getStock = async () => {
        const stockData = await axios('/order/getItems').then((data) => {
            return data.data
        }).catch((err) => {
            console.log(err);
        })
        setStock([...stockData])
    }


    const addToCart = (itemCode, itemName, unitPrice) => {

        let productList = []
        let isAvaliable = false
        const product = {
            itemCode,
            itemName,
            unitPrice,
            isAvailable:true
        }




    }

    return (
        <div className="orderContainer">
            <h1>Order Items</h1>

            <div className="rpoductContainer">
                <div className="itemContainer">
                    {
                        stock.map((item) => {
                            return (
                                <div className="item" key={item.item_code}>
                                    <div className="item_image">
                                        <img src={require('../../assets/Cocktail.jpg')} alt="asdasd" width={170} height={170} />
                                    </div>
                                    <div className="details">
                                        <div className="itemName"><h2>{item.item_name}</h2></div>
                                        <div className="price"><h4>Rs {item.unit_price}</h4></div>
                                        <div className="quantity"><h6>Quanitiy in Stock {item.quantiy}</h6></div>
                                        <div >
                                            <button className="cartBtn"
                                                onClick={() => { addToCart(item.item_code, item.item_name, item.unit_price) }}>Add to Cart</button>
                                        </div>
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>
                <Cart />
            </div>
        </div>
    );
}

export default Order;