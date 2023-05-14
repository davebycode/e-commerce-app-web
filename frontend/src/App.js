import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './sections/header';
import MainData from './sections/main';
import MainText from './sections/main_text';
import ShirtsDisplay from './sections/Shirts_page1';
import ShirtsBoard from './sections/Shirts_page2';
import PoloDisplay from './sections/Polo_page1';
import PoloBoard from './sections/Polo_page2';
import HandbagDisplay from './sections/handbag_page1';
import HandbagBoard from './sections/Handbag_page2';
import HeelDisplay from './sections/Heel_page1';
import HeelsBoard from './sections/Heel_page2';
import Flash from './sections/flash';
import Data from './sections/collections';
import Blender from './sections/blender';
import Fan from './sections/fan';
import Fridge from './sections/fridge'; 
import Iphone from './sections/i-phone';
import Television from './sections/television';
import Wristwatch from './sections/wristwatch';
import Fruits from './sections/fruits';
import FruitCollections from './sections/fruitcollections';
import Apple from './sections/apple';
import Banana from './sections/banana';
import Berry from './sections/berry';
import Okro from './sections/okro';
import Orange from './sections/orange';
import Pawpaw from './sections/pawpaw';
import Testimonies from './sections/testimonies';
import Why from './sections/why';
// import BackToTop from './sections/back to top';
import Address from './sections/address';
import Sports from './sections/sports';
import Slider from './sections/stretches';
import Sporting from './sections/sports_page1';
import FootBall from './sections/football';
import BasketBall from './sections/basketball';
import Cricket from './sections/cricket';
import Tennis from './sections/Tennis';
import Racket from './sections/Racket';
import Log from './sections/log';
// import { useState, useReducer } from 'react';
import Register from './sections/register';
// import { CartProduce, initialState, reducer } from './sections/carted';
// import { useReducer } from 'react';
import Display from './sections/cart';
// import Empty from './sections/empty';
import About from './sections/home';






function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Slider/>
      <MainText/>
      {/* <Empty/> */}
      <Routes>
    <Route path = '/login' element={<Log/>}/>   
    <Route path = '/login/register' element={<Register/>}/> 
    <Route path = '/cart' element = {<Display/>}/>  
    <Route path = '/about' element = {<About/>} /> 
    <Route path='/' element= {<MainData/>} /> 
    <Route path='/products' element= {<ShirtsDisplay/>} />
    <Route path='/products/:hint' element= {<ShirtsBoard/>}/>
    <Route path='/fitted' element= {<PoloDisplay/>} />
    <Route path='/fitted/:hint' element= {<PoloBoard/>}/> 
    <Route path='/bags/' element= {<HandbagDisplay/>} />
    <Route path='/bags/:hint' element= {<HandbagBoard/>}/>
    <Route path='/shoe' element= {<HeelDisplay/>} />
    <Route path='/shoe/:hint' element= {<HeelsBoard/>}/>
    </Routes>
    <div>
    <Flash/>
    <Routes>
    <Route path='/' element = {<Data/>} />
    <Route path='/first' element = {<Blender/>} />
    <Route path='/second' element = {<Fan/>} />
    <Route path='/third' element = {<Fridge/>} />
    <Route path='/fourth' element = {<Iphone/>} />
    <Route path='/fifth' element = {<Television/>} />
    <Route path='/sixth' element = {<Wristwatch/>} />
    </Routes>
    </div>
    <div>
    <Fruits/>
    <Routes>
    <Route path='/' element = {<FruitCollections/>} />
    <Route path='/apple' element ={<Apple/>}/>
    <Route path='/banana' element ={<Banana/>}/>
    <Route path='/berry' element ={<Berry/>}/>
    <Route path='/okro' element ={<Okro/>}/>
    <Route path='/orange' element ={<Orange/>}/>
    <Route path='/pawpaw' element ={<Pawpaw/>}/>
    </Routes>
    </div>
    <div>
      <Sports/>
      <Routes>
    <Route path='/' element= {<Sporting/>}/>
    <Route path='/football' element= {<FootBall/>} />
    <Route path='/basketball' element= {<BasketBall/>} />
    <Route path='/cricket' element= {<Cricket/>} />
    <Route path='/Tennis' element= {<Tennis/>} />
    <Route path='/Racket' element= {<Racket/>} />
      </Routes>
    </div>
    <Why/>
    <Testimonies/>
    <Address/>
      
      </BrowserRouter>
    
    </div>
    
        
  );

  
}

export default App;
