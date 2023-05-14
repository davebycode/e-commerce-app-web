import React from "react";
import { useReducer, createContext } from "react";

export const initialState =  {
  products: []
}

export function reducer(state, action) {
  switch (action.type){
    case 'AddToCart':
      return{
        ...state,
        products: [state.products, action.payload]
      }
      case 'Remove':
        return {
          ...state,
          products: state.products.filter((product)=>  product.id !== action.payload)
        }
        default:
          return state
  }
}
export const CartProduce = createContext()