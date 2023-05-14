import React from 'react'
import MyData from '../products/data'
import { Link } from 'react-router-dom'
// import OverviewBoard from './overview'
function HeelDisplay (){
  return (
    <div className='produce'>
      {MyData.Heels.map(heels =>(
        <div className='display' key={heels.hint}>
          <Link to={`/shoe/${heels.hint}`}><img src={heels.image} alt={heels.name}/></Link>
          <div className='tags'>
          <Link to={`/shoe/${heels.hint}`}><p>{heels.name}</p></Link>
              <p>{heels.label}</p>
              <p>{heels.priceTag}</p>
              </div>
        </div>
      ))}
  
        </div>
  )

  }


 export default HeelDisplay