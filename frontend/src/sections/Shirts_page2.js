import React from "react";
import { useParams } from 'react-router-dom';
import MyData from "../products/data";
function ShirtsBoard () {
    const {hint} = useParams()
    const PrivateView = MyData.shirts.find(one => one.hint === hint)
    // const {image, name} = PrivateView
    return (
        <div className="produce" style={{width: '390px', margin: "auto"}}>
            
        <div className="display">
            <img src={PrivateView.image} alt={PrivateView.name} style={{justifyContent: 'center', textAlign: 'center'}}/>
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

