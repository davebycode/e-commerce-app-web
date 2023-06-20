import React, { useReducer } from 'react'
import { Link} from 'react-router-dom'
import { initialState, reducer } from './logic'
import { useState } from 'react'

// import { useRef } from 'react'
// import Testimonies from './testimonies'

 function Header () {
   const [state, dispatch]= useReducer(reducer, initialState)
   const [setting, setSetting] = useState(false)
   

   
   

    return (
        <header>
         <i class="fa-solid fa-dumpster-fire" style={{color:"orangeRed"}}><Link to="/" style={{textDecoration: 'underline',fontSize: '3rem', textDecorationColor: 'orangeRed', textDecorationThickness: '5px'}}><span>De ~ Frankys</span></Link></i>
          <div>
              <ul className='bars-not'>
                <li><Link to='/login'><button className='one'>Login <i class="fa-solid fa-circle-user" style={{color:"white"}}></i></button></Link></li>
                <li><Link to='/cart'><i class="fa-solid fa-cart-shopping" 
       style={{color:"white"}} ></i>{state.count}</Link></li>
       </ul>
       <div >
         <div className='bars'>
       <i class="fa-solid fa-bars" onClick={()=> {setSetting(!setting)}} style={{color: 'white', fontSize: '1.5rem'}}></i> 
       </div>
       <div className={setting? "active": 'not-active'}>
        <div className='slide'>
       <Link to='/login'><button className='one' onClick={()=> {setSetting(!setting)}} style={{color: 'black'}}>Login <i class="fa-solid fa-circle-user" style={{color:"white", fontSize:"1rem"}}></i> </button></Link>
       <br/>
       <Link to='/cart'><h2 style={{color: "black", fontStyle: 'normal', textDecoration: 'none'}}>Cart: <i class="fa-solid fa-cart-shopping" 
       style={{color:"red",fontSize:"1rem"}}  onClick={()=> {setSetting(!setting)}} ></i>{state.count}</h2></Link>
      </div>
       </div>
       </div>
       </div>
       </header>

    )
 }
 export default Header




