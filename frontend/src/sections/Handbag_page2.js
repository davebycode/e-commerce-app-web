import React from "react";
import { useParams } from 'react-router-dom';
import MyData from "../products/data";
// import data from "../products/data";
// import AllBags from "../products/handbags";
function HandbagBoard () {
    const {hint} = useParams()
    const BagView = MyData.bags.find(three => three.hint === hint)
    
    return (
        <div className="produce" style={{width: '390px', margin: "auto"}}>
        <div className="display">
            <img src={BagView.image} alt={BagView.name}/>
            <div className="tags">
            <p>{BagView.name}</p>
            <p>Number of Stock: {BagView.numberOfStock}</p>
            <p>Description: {BagView.description}</p>
            <button>Add to Cart</button>
            </div>
        </div>
        </div>
    )
    
}
export default HandbagBoard

