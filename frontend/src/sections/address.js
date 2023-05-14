import React from 'react'
import BackToTop from './BackToTop'
import axios from 'axios'
import { useState } from 'react'
import {useEffect} from 'react'
export default function Address() {
const [email, setEmail] = useState('')

const handle = async(e)=> {
e.preventDefault()
console.log(email, setEmail)
try{
  window.alert(JSON.stringify('submitted'))
 await axios.get('http://localhost:5000/test', {email})
 .then(res=>{
  console.log(res)
  console.log(res.email)
 })
}
catch(e){
  console.log(e)
}
}
useEffect(()=> {
  handle()
})
  return (
    <div className='hurry'>
      
      <div className='hurry3'>
      <i class="fa-solid fa-dumpster-fire" style={{color:"orangered", fontSize:"2rem"}}><h4 style={{fontSize:"0.8rem", color:'white'}}>De~Frankys</h4></i>
      
      <diV className= 'hurry2'>
      <div className='woke'>
      <h5>Street Address: 4009 Pointe Lane</h5>
      <h5>City: Miami</h5>
      <h5>State: FL</h5>
      <h5>Telephone Number: 08132308599</h5>
      </div>
      <div className='woke'>
      <h5>Careers</h5>
      <h5>Blog</h5>
      <h5>Alumni</h5>
      <h5>Products</h5>
      </div>
      
      </diV>
      <div className='wokes'>
        <b><i class="fa-brands fa-facebook" style={{color:"blue", fontSize:"1.5rem"}}></i></b>
        <br/>
        <br/>
        <b><i class="fa-brands fa-instagram" style={{color:"red", fontSize:"1.5rem"}}></i></b>
        <br/>
        <br/>
        <b><i class="fa-brands fa-twitter" style={{color:"blue", fontSize:"1.5rem"}}></i></b>
        <br/>
        <br/>
        <b><i class="fa-brands fa-github" style={{color:"white", fontSize:"1.5rem"}}></i></b>
        <br/>
        <br/>
        </div>
        
      </div>
        <span>Designed by Davidbycode</span>
      <BackToTop/>
      <div>
        <form className='woked' >
        <lable htmlFor='email' style={{backgroundColor:'black', color:'white'}}>Email</lable>
        <input type='email' placeholder='Email Here'  style={{color:'black'}} value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
        <button onSubmit={handle} type='submit'>Send Here</button>
        </form>
        </div>
        
      </div>
  )
}
