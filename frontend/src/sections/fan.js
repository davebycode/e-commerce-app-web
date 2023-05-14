import React from "react";
import { CartProduce } from "./carted";
import { useContext } from "react";
function Fan ({name, price}) {
    const {dispatch} = useContext(CartProduce)

    const handle = ()=> {
        dispatch ({type: 'AddToCart', payload: {name,price}})
    }
    return (
        <div className="produce">
            
            <div className="display">
            <img src="./images/fan.jpg" alt="shirt"/>
            <div className="tags">
            <p>Fan</p>
            <p>Price Tag: #10,500</p>
            <button onClick={handle}>Add to Cart</button>
            </div>
            </div>

        </div>
    )
}
export default Fan