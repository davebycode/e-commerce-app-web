import React from 'react'
import { Link } from 'react-router-dom';

export default function Testimonies() {
  return (
    <div className='resting'>
        <div className='rest'>
      <Link to='/'><h4>~ DeeFrankey ~</h4></Link>
      <i class="fa-regular fa-handshake" style={{color:"crimson"}}></i>
      <p><strong>D</strong>eeFrankeys is very unique in its own way! Specially made to bring goods down to the doorsteps of her customers</p>
      </div>
      <div className='rest'>
      <Link to='/'><h4>~ Payments ~</h4></Link>
      <i className="fa-solid fa-money-bill" style={{color:"green"}}></i>
      <p><strong>D</strong>elivery is made to you within the specified number of days given! Early payments brings about early delivery</p>
      </div>
      <div className='rest'>
        <Link to='/'><h4>~ Guaranty ~</h4></Link>
        <i className="fa-solid fa-house-lock" style={{color:"orangered"}}></i>
        <p><strong>T</strong>he safety of our customers goods is very important and yet the basis of trust for us. We care about your happiness!</p>
      </div>
    </div>
  )
}
