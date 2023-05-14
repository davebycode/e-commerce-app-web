import React from 'react'
import { useState } from 'react'
import { set } from 'react-hook-form'
export default function Empty() {
  const [products, setProducts] = useState([
    {
                name: "Check-Plain Shirt",
                category:"Shirts",
                hint: "Check-Plain Shirt",
                priceTag: "#3000",
                label: "M(medium)",
                image: "../shirt_images/check.jpg",
                numberOfStock: 9,
                reviews: 4.8,
                description: "The Royal blue sleeves are the best in the market, readily available and affordable. Very high in demand. ",
                id:'1000'
            },
            {
                name: "Red-Shirt",
                category:"Shirts",
                hint: "Red-Shirt",
                priceTag: "#3000",
                label: "M(medium)",
                image: "../shirt_images/red.jpg",
                numberOfStock: 9,
                reviews: 4.8,
                description: "The design is very creative; the price is also affordable",
                id:'2000'
            },
            {   name: "Yellow-Plain-Shirt",
                category:"Shirts",
                hint: "Yellow-Plain-Shirt",
                priceTag: "#3000",
                label: "M(medium)",
                image: "../shirt_images/yellow.jpg",
                numberOfStock: 9,
                reviews: 4.8,
                description: "A shirt that renders the real beauty of the primary color, yellow. One of the best in the market ",
                id:'3000'
        },
        {
                name: "Green thick-Sleeves",
                category:"Shirts",
                hint: "Green thick-Sleeves",
                priceTag: "#3000",
                label: "M(medium)",
                image: "../shirt_images/green.jpg",
                numberOfStock: 9,
                reviews: 4.8,
                description: "What is the essence of a fabric, if it cant withstand the issues of wear and tear ",
                id:'3500'
    
        },
        
            {
                name: "Peach-Fitted-Polo",
                category:"Shirts",
                hint: "Peach-Fitted-Polo",
                priceTag: "#1900",
                label: "M(medium)",
                image: "../polo_images/polo1.jpg",
                numberOfStock: 9,
                reviews: 4.8,
                description: "It never slacks! Best products by Cisca",
                id:450
    
            },
            {
                name: "Stripped-Polo",
                category:"Shirts",
                hint: "Stripped-Polo",
                priceTag: "#2800",
                label: "M(medium)",
                image: "../polo_images/polo2.jpg",
                numberOfStock: 9,
                reviews: 4.8,
                description: "Has a special offer that goes with it! Buy now to get the offer",
                id:550
            },
            {   name: "Olive-Polo",
                category:"Shirts",
                hint: "Olive-Polo",
                priceTag: "#3500",
                label: "M(medium)",
                image: "../polo_images/polo3.jpg",
                numberOfStock: 9,
                reviews: 4.7,
                description: "The texture fulfills the quality. Why not try now?",
                id:650
        },
        {
                name: "Spot-Dotted-Polo",
                category:"Shirts",
                hint: "Spot-Dotted-Polo",
                priceTag: "#2000",
                label: "M(medium)",
                image: "../polo_images/polo4.jpg",
                numberOfStock: 9,
                reviews: 4.2,
                description: "Belair has the best selling fabrics in Wolverhampton. The spot-dotted polo is not left out",
                id:250
        },
    
            {
                name: "Black-heels",
                category:"heels",
                hint: "Black-heels",
                priceTag: "#9,500",
                label: "39",
                image: "../heels/black.jpg",
                numberOfStock: 12,
                reviews: 4.8,
                description: "Easily affordable",
                id:700
            },
            {
                name: "Green",
                category:"heels",
                hint: "Green Crocodile Skin",
                priceTag: "#13,000",
                label: "41",
                image: "../heels/green.jpg",
                numberOfStock: 13,
                reviews: 4.5,
                description: "Very compatible with suits",
                id: 750
            },
            {   name: "Date heels",
                category:"heels",
                hint: "Date heels",
                priceTag: "#14,000",
                label: "40",
                image: "../heels/date.jpg",
                numberOfStock: 10,
                reviews: 4.7,
                description: "Mostly worn out on dates nights",
                id:800
        },
        {
                name: "Red-colored heels",
                category:"heels",
                hint: "Red-colored heels",
                priceTag: "#12,000",
                label: "41",
                image: "../heels/red.jpg",
                numberOfStock: 7,
                reviews: 5.1,
                description: "The multi colored heels can match with any outfit",
                id:850
        },
            {
                name: "Purple handbags",
                category:"bag",
                hint: "Purple handbags",
                priceTag: "#15,500",
                label: "2 in 1",
                image: "../handbags/purple.jpg",
                numberOfStock: 12,
                reviews: 4.7,
                description: "Best quality made with pure leather ",
                id:600
            },
            {
                name: "The Golden brown",
                category:"bag",
                hint: "The Golden brown",
                priceTag: "#15,000",
                label: "3 in 1",
                image: "../handbags/brown.jpg",
                numberOfStock: 9,
                reviews: 5.1,
                description: "The durability is guaranteed",
                id:500
            },
            {   name: "The Multicolored Artistic bag",
                category:"bag",
                hint: "The Multicolored Artistic bag",
                priceTag: "#14,500",
                label: "2 in 1",
                image: "../handbags/multi.jpg",
                numberOfStock: 5,
                reviews: 4.6,
                description: "Art is the fufillment of beauty. Very strong and its durabilty is certain ",
                id:400
        },
        {
                name: "The Spotless-Snowy handbag",
                category:"bag",
                hint: "The Spotless-Snowy handbag",
                priceTag: "#15,000",
                label: "2 in 1",
                image: "../handbags/white.jpg",
                numberOfStock: 10,
                reviews: 4.9,
                description: "It has synthetic leader and withstand heat ",
                id:300
        },
        {
            name: "khaki-black handbag",
            category:"bag",
            hint: "khaki-black handbag",
            priceTag: "#10,000",
            label: "2 in 1",
            image: "../handbags/black.jpg",
            numberOfStock: 12,
            reviews: 4.6,
            description: "Black matches with any outfit. ",
            id: 200
    }
    
  ])

  const [search, setSearch] = useState('')

  const filteredproducts = products.filter((produce) => {
    if (
      produce.name.toLowerCase().includes(search) ||
        produce.priceTag.toLowerCase().includes(search)||
        produce.hint.toLowerCase().includes(search)
        ){
          return produce
        }
})
  
  return (
    <div className='flash'>

      <label htmlFor='name'>Search</label>
      <input
      type='text'
      onChange={(e)=>{setSearch(e.target.value.toLowerCase())}}
      />
      <div>
        {filteredproducts.map((data)=> (
          <div>
          <h4>{data.name}</h4>
          <h4>{data.description}</h4>
          <h4>{data.hint}</h4>
            </div>

        ))}
      </div>
    </div>
  )
}
