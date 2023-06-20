import React from "react";
import { useParams } from 'react-router-dom';
import MyData from "../products/data";
function ShirtsBoard () {
    const {hint} = useParams()
    const PrivateView = MyData.shirts.find(one => one.hint === hint)
    return (
        <div className="produced" style={{margin: "auto"}}>
            
        <div className="displaying">
            <img src={PrivateView.image} alt={PrivateView.name} />
            <div className="tags">
            <p>{PrivateView.name}</p>
            <p>Number of Stock:{PrivateView.numberOfStock}</p>
            <p>Description:{PrivateView.description}</p>
            <button>Add to Cart</button>
            </div>
        </div>
        </div>
    )
    
}
export default ShirtsBoard

