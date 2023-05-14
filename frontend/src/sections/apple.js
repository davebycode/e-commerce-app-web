import React, { useReducer } from 'react'
import { initialState, reducer } from './logic'

export default function Apple() {
    const [state, dispatch] = useReducer(reducer, initialState)

    const handleIncrement = ()=> {
        dispatch({type: 'Increased'})
    }
  return (
    <div className='produce'>
        <div className="display">
            <img src="./fruits/apple.jpg" alt="shirt"/>
            <div className="tags">
            <p>Apple</p>
            <p>Price Tag: #1,000</p>
            <button onClick={handleIncrement}>Add to Cart</button>
            </div>
            </div>

      
    </div>
  )
}


// import React, { useReducer } from "react";
// import { initialState, reducer } from "./reducer";

// const MyCounter = () => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   const handleIncrement = () => {
//     dispatch({ type: "increment" });
//   };

//   const handleDecrement = () => {
//     dispatch({ type: "decrement" });
//   };

//   return (
//     <div>
//       <h1>Counter: {state.count}</h1>
//       <button onClick={handleIncrement}>Increment</button>
//       <button onClick={handleDecrement}>Decrement</button>
//     </div>
//   );
// };

// export default MyCounter;
