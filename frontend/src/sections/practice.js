import React from 'react'
import {useState} from 'react'
import { useEffect } from 'react'
import axios from 'axios'
export default function Practice() {
    const [data, setData] = useState()
    
    const response= async()=>{
        const responses= await axios.get('http://localhost:5000/mytest')
        setData(responses.data)
    }
    useEffect(()=>{
        response()
    },[])
    
  return (
    <div>
      {data}
    </div>
  )
}
