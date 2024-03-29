import React from "react";
import {  useParams } from 'react-router-dom';
import MyData from "../products/data";
function PoloBoard () {
    
    const {hint} = useParams()
    const PoloView = MyData.polos.find(two => two.hint === hint)
    
    return (
        <div className="produced" style={{margin: "auto"}}>
        <div className="displaying">
            <img src={PoloView.image} alt={PoloView.name}/>
            <div className="tags">
            <p>{PoloView.name}</p>
            <p>Number of Stock: {PoloView.numberOfStock}</p>
            <p>Description: {PoloView.description}</p>
    
            {/* <Link to='/cart'><button >Add to Cart</button></Link> */}
            
            </div>
        </div>
        </div>
    )
    
}
export default PoloBoard

