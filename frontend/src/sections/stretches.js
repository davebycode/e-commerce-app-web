import React from 'react'
import './App.css'
import mySlides from '../products/sliderProducts'
import { useState, useEffect } from 'react'


export default function Slider() {
  const [stated, setstated] = useState(0)
  useEffect(()=>{
    const time = setTimeout(()=>{
      if(stated === 3){
        setstated(0)
      }else {
        setstated(stated + 1)
      }
    }, 2000)
    return ()=> clearTimeout(time)
  },[stated])
  const styling = {
    backgroundImage: `url(${mySlides[stated].image})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    filter: 'brightness(70%)',
    height:'100%',
    paddingTop: '0'
  }
  const TheNext = (stated)=>{
    setstated(stated)
  }
  return (
    <div className='main-container'>
      <div style={styling}>
        <div className='describe'>
          {mySlides[stated].name}
          <br/>
          {mySlides[stated].description}
        </div>
          <div className='carousel'>
          {mySlides.map((stated)=>(
            <span key={stated} onClick={()=>TheNext(stated)}></span>
          ))}


          </div>
          </div>
      
    </div>
  )
}
