import React from 'react'
import { useState,useEffect } from 'react'

export default function BackToTop() {
const [Backtotop, setBacktotop] = useState(false)

useEffect(() => {
    window.addEventListener('scroll', () =>{
        if(window.scrollY > 100) {
            setBacktotop(true)
        }else {
            setBacktotop(false)
        }
    })
}, [])

const scrollup = ()=> {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

  return (
    <div>
        {Backtotop &&
      <button style={{fontSize: '3rem', backgroundColor: 'black', color: 'white'}} onClick={scrollup}> &rarr;Designed by Davidbycode</button>
        }
    </div>
  )
}
