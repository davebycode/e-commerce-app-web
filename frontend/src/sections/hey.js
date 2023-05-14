import React from 'react'
import axios from 'axios'

export default function Hey() {
    axios.post('/lazy', {
        name: 'baby',
        class: 'big babe',
        sex: 'Good at the work'
    }).then (response => {
        console.log(response.data)
    }).catch(err => {
  console.log(err)
    })
  return (
    <div>
      
    </div>
  )
}
