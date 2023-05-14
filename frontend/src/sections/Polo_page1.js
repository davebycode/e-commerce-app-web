import React from 'react'
import { Link } from 'react-router-dom';
import MyData from '../products/data';
function PoloDisplay (){
    return (
        <div className='produce'>
          {MyData.polos.map(round =>(
            <div className='display' key={round.hint} >
              <Link to={`/fitted/${round.hint}`}><img src={round.image} alt={round.name}/></Link>
              <div className='tags'>
              <Link to={`/fitted/${round.hint}`}><p>{round.name}</p></Link>
                  <p>{round.label}</p>
                  <p>{round.priceTag}</p>
                  </div>
            </div>
          ))}
      
            </div>
      )
}
export default PoloDisplay