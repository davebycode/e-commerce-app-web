import React from "react";
import { useParams } from 'react-router-dom';
import MyData from "../products/data";
function HeelsBoard () {
    const {hint} = useParams()
    const HeelsView = MyData.Heels.find(four => four.hint === hint)
    
    return (
        <div className="produce" style={{width: '40%', margin: "auto"}}>
        <div className="displaying">
            <img src={HeelsView.image} alt={HeelsView.name}/>
            <div className="tags">
            <p>{HeelsView.name}</p>
            <p>Number of Stock:{HeelsView.numberOfStock}</p>
            <p>Description:{HeelsView.description}</p>
            <button>Add to Cart</button>
            </div>
        </div>
        </div>
    )
    
}
export default HeelsBoard

