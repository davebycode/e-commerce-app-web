import React from 'react'
// import { useState } from 'react'
import {  Link } from 'react-router-dom'
// import Login from './login'
import { useForm } from 'react-hook-form'

export default function Register() {
    const {register, handleSubmit, formState:{errors}}= useForm()
    
const onSubmit = (data)=> {
const check = JSON.parse(localStorage.getItem(data.email))
if (check) {
    if(check.password === data.password) {
        console.log(`check.name You have successfully logged in`)
    }
    else {
        console.log('Emails dont match!')
    }
}
}
  
      
  return (
    
    <div className='data-form'>
      <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Register</h2>
      <label htmlFor='name'>Username</label>
         <input type='text' {...register('Username', {required:true})}/>
      <label htmlFor='fullName'>FullName</label>
         <input type='text' {...register('Fullname',{required:true})}/>
        <label htmlFor='email'>Email</label>
         <input type='email' {...register('email', {required:true})}/>
         {errors.email && <span style={{backgroundColor:'red'}}>'Email is mandatory'</span>}
        <label htmlFor='password'>Password</label>
        <input type="password" {...register('password', {required:true})}/>
        {errors.password && <span style={{backgroundColor:'red'}}>'Password is mandatory'</span>}
        <button type={'submit'}>Register</button>
        <Link to='/login'><p>Already have an account? Login Here</p></Link>
      </form>
      
    </div>
    
  )

    
  
}
