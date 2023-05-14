import React from "react";
function MainData() {
    return(
        <div className="produce">
<div className='display'>
                 <a href='/products'><img src= './images/shirts.jpg' alt='shirt'/></a>
             <div className='tags'>
       <a href='/products'><p style={{color: 'black'}}>Shirt-Collections</p></a>
       <p style={{color: 'black'}}>medium</p>           
       <p style={{color: 'black'}}>4.8</p>
       </div>
       </div>
       
    

    
    <div className='display'>
                 <a href='/fitted'><img src= './images/polos.jpg' alt='polo'/></a>
             <div className='tags'>
       <a href='/fitted'><p style={{color: 'black'}}>Polo-Collections</p></a>
       <p style={{color: 'black'}}>Medium</p>           
       <p style={{color: 'black'}}>4.2</p>
       </div>
       </div>

       
    <div className='display'>
                 <a href='/bags'><img src= './images/bags.jpg' alt='bags'/></a>
             <div className='tags'>
       <a href='/bags'><p style={{color: 'black'}}>Bags-Collections</p></a>
       <p style={{color: 'black'}}>Various designs</p>           
       <p style={{color: 'black'}}>5.0</p>
       </div>
       </div>


       
    <div className='display'>
                 <a href='/shoe'><img src= './images/shoes.jpg' alt='shoes'/></a>
             <div className='tags'>
       <a href='/shoe'><p style={{color: 'black'}}>Shoe-Collections</p></a>
       <p style={{color: 'black'}}>Various designs and Sizes</p>           
       <p style={{color: 'black'}}>5.2</p>
       </div>
       </div>



       </div>
    )
    
}
export default MainData
