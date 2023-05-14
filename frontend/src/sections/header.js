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
         <i class="fa-solid fa-dumpster-fire" style={{color:"orangeRed", fontSize:"2rem"}}><Link to="/" style={{textDecoration: 'underline', textDecorationColor: 'orangeRed', textDecorationThickness: '5px'}}>D<span>e</span> ~ Frankys</Link></i>
          <div>
              <ul className='bars-not'>
                <li><Link to='/login'><button className='one'>Login <i class="fa-solid fa-circle-user" style={{color:"white", fontSize:"1rem"}}></i></button></Link></li>
                <li><Link to='/cart'><i class="fa-solid fa-cart-shopping" 
       style={{color:"white",fontSize:"1rem"}} ></i>{state.count}</Link></li>
       </ul>
       <div >
         <div className='bars'>
       <i class="fa-solid fa-bars" onClick={()=> {setSetting(!setting)}} style={{color: 'white', fontSize: '1.5rem'}}></i> 
       </div>
       <div className={setting? "active": 'not-active'}>
        <div className='slide'>
       <Link to='/login'><button className='one' onClick={()=> {setSetting(!setting)}}>Login <i class="fa-solid fa-circle-user" style={{color:"red", fontSize:"1rem"}}></i> </button></Link>
       <br/>
       <br/>
       <br/>
       <br/>
       <Link to='/cart'><h2 style={{color: "orangered"}}>Cart :<i class="fa-solid fa-cart-shopping" 
       style={{color:"yellow",fontSize:"1rem"}}  onClick={()=> {setSetting(!setting)}} ></i></h2>{state.count}</Link>
      </div>
       </div>
       </div>
       </div>
       </header>

    )
 }
 export default Header




