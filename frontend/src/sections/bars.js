import React from "react";
import { useState } from "react";

export default function Bars() {
  const [bars, setbars] = useState(true);
  const setting = () => {
    setbars(!bars);
  };
  return (
    <>
    <i
        class="fa-solid fa-bars"
        onClick={setting}
        style={{ backgroundColor: "white", fontSize: "1.8rem" }}
      ></i>
    
       {bars &&
       <div className="bars">
       <ul>
        <li>Home</li>
        <li>About</li>
        <li>Products</li>
        <li>Contacts</li>
        
        </ul> 
      </div>
    
       }
       </>
  );
}
