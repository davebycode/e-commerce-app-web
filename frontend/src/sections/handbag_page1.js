import React from 'react'
import { Link } from 'react-router-dom'
import MyData from '../products/data'
function HandbagDisplay (){
return (
  <div className='produce'>
    {MyData.bags.map(bag =>(
      <div className='display'>
        <Link to={`/bags/${bag.hint}`}><img src={bag.image} alt={bag.name}/></Link>
        <div className='tags'>
        <Link to={`/bags/${bag.hint}`}><p>{bag.name}</p></Link>
            <p>{bag.label}</p>
            <p>{bag.priceTag}</p>
            </div>
      </div>
    ))}

      </div>
)
  }
  export default HandbagDisplay

  

  


