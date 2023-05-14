import React from 'react'
import MyData from '../products/data'
import { Link } from 'react-router-dom'
function ShirtsDisplay (){
  return (
    <div className='produce'>
      {MyData.shirts.map(dents =>(
        <div className='display' key={dents.hint}>
          <Link to={`/products/${dents.hint}`}><img src={dents.image} alt={dents.name}/></Link>
          <div className='tags'>
          <Link to={`/products/${dents.hint}`}><p>{dents.name}</p></Link>
              <p>{dents.label}</p>
              <p>{dents.priceTag}</p>
              </div>

        </div>
      ))}
  
        </div>
  )
  
 }


 export default ShirtsDisplay