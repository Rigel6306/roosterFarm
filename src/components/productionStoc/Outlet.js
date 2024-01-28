import { useState } from "react";
import StockTransfer from "./stockTransfer";

const Outlet = () => {

    const date = new Date()
    const month = date.getMonth() + 1;
    const year = date.getFullYear()
    const day = date.getDate();

    const fullDate = `${day}/${month}/${year}`
    
    

    return (
        <div className="outletContainer">

<div className="farmHeading">
                <h1>Enter Production Details for  {fullDate} </h1>
            </div>

            <StockTransfer/>


        </div>
      );
}
 
export default Outlet;