import React from 'react'
import { Link } from 'react-router-dom'

export default function Sporting() {
  return (
    <div className='first_one'>
        <div className='ones'>
          <Link to='/football'> <img src='./sports/football.jpg' alt=''/></Link>
          <Link to='/football'><p>Football</p></Link>
        </div>

        <div className='ones'>
          <Link to='/basketball'> <img src='./sports/basketball.jpg' alt=''/></Link>
          <Link to='/basketball'><p>Basketball</p></Link>
       </div>

        <div className='ones'>
          <Link to='/cricket'> <img src='./sports/cricket.jpg' alt=''/></Link>
          <Link to='/cricket'><p>Cricket</p></Link>
        </div>

        <div className='ones'>
          <Link to='/Racket'> <img src='./sports/Racket.jpg' alt=''/></Link>
          <Link to='/Racket'><p>Tennis</p></Link>
        </div>

        <div className='ones'>
          <Link to='/Tennis'> <img src='./sports/Tennis.jpg' alt=''/></Link>
          <Link to='/Tennis'><p>Ping-Pong</p></Link>
        </div>
      
    </div>
  )
}
