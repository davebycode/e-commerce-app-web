import React from 'react'
import Testimonies from './testimonies'
import { useReducer } from 'react'
export default function About() {
    const {about} = useReducer(null)

    const scrolling = (element)=> {
        window.scrollTo({
            top: element.current.offsetTop,
            behavior: 'smooth'
        })
    }

  return (
    <div>
      <h2 onClick={()=> scrolling(about)}>about</h2>

      <>
      <Testimonies ref={about}/>
      </>
    </div>


  )
}
