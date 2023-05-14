// Cart.js
import React, { useContext } from "react";
import { CartProduce } from "./carted";
// import { Link } from "react-router-dom";

function Display() {
  const { state } = useContext(CartProduce);

  return (
    <div className="Cart">
      <h2></h2>
    
      </div>
  )
}
export default Display