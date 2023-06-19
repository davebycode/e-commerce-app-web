import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
// import Register from './register'
import { useState } from 'react'

function Log() {
    const {register, handleSubmit, formState:{errors}}= useForm()
    const [name, setName] = useState()
  const onSubmit = (data)=> {
  const check = JSON.parse(localStorage.setItem(data.email))
  data.preventDefault()
  if (check) {
    if(check.password === data.password) {
        alert(`${name}, you have successfully logged in`)
    }
    else {
        alert('Emails dont match!')
    }
  }
  }
  
      
  return (
    
    <div className='data-form'>
        <form className='log' onSubmit={handleSubmit(onSubmit)}>
      <h2>Login</h2>
      <div className='logs'>
        <label htmlFor='email'>Email</label>
         <input type='email' value={name} onChange={()=>setName(name)}{...register('email', {required:true})}/>
         {errors.email && <span style={{color:'red'}}>'Email is mandatory'</span>}
        <label htmlFor='password'>Password</label>
        <input type="password" {...register('password', {required:true})}/>
        {errors.password && <span style={{color:'red'}}>'Password is mandatory'</span>}
        <button type={'submit'}>Log In</button>
        <Link to='/login/register'><p>Don't have an account? Register here</p></Link>
        </div>
      </form>
      
    </div>
    
  )
  
    
  
  }
  


export default Log

