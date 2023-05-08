
import { useState } from 'react';
import './App.css';
import FoodItem from './components/FoodItem/FoodItem';
import Header from './components/header/Header';
import foods from './data/foods';
import {Link, NavLink} from 'react-router-dom'
import Order from './components/Order/Order';
import Alert from 'react-bootstrap/Alert';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [cart,setCart] = useState([]);
  const [type, setType] = useState('');
  
  const notify = () => {
    
    if(cart.length>0){
      toast("การสั่งอาหารสำเร็จ กรุณารอสักครู่")
  setCart([])
    }
    else{
      toast("กรุณาสั่งอาหาร")
    }

    };
  function onOrderSubmit(event){
      event.preventDefault();

  }

  function onClickBeef(){
    setType('beef');
  }
  function onClickVegetable(){
    setType('vegetable');
  }
  function onClickDrinks(){
    setType('drinks');
  }
  function onClickFruit(){
    setType('fruit');
  }
  function onClickDessert(){
    setType('dessert');
  }
  function onClickAll(){
    setType('all');
    foods.map((food, index)=>{
      return <FoodItem  key={index} food={food} />
    })
  }

  function onAddtoCart(foodname,foodcount){
      let isexist = false;
      const result = cart.map((item)=>{
        if (item.name ===foodname){
          isexist = true;
          return {name:item.name, count:item.count+foodcount}
        }
        else{
          return item
        }
      })
      console.log(result)
      if (isexist){
        setCart(result)
      }
      else{
        setCart([...cart, {name:foodname,count:foodcount}])
      }
  }



  function clearCart(){
    setCart([]);
  }


  const filteredType =type==='all'? foods : foods.filter((food)=>{
   
    return food.type.includes(type);
  })

  const foodElements = filteredType.map((food, index)=>{
    
    return <FoodItem  key={index} food={food} onSubmit={onAddtoCart}/>
  })
  console.log(cart)

 

  return (
    <div className="App">
      
      <Header/>
      
      <div className='container'>
          <div className='menu'>
            <div className='menu-bar'>
              <div> 
                <img src='/images/groceries.png'onClick={onClickAll} />
                 </div>     
              <div>
                  <img src='/images/meat.png'onClick={onClickBeef}></img>
              </div>
              <div>
                  <img src='/images/vegetables.png'onClick={onClickVegetable}></img>
              </div>
              <div>
                  <img src='/images/ice-coffee.png'onClick={onClickDrinks}></img>
              </div>
              <div>
                  <img src='/images/harvest.png'onClick={onClickFruit}></img>
              </div>
              <div>
                  <img src='/images/ice-cream.png'onClick={onClickDessert}></img>
              </div>
            </div>

            <div className='menu-grid'>
                {foodElements}
            </div>
              
          </div>
          
          <div className='order'>
            <div className='order-yourorder'>
              <h2>Your Order</h2>
              <ul>{cart.map((item)=>{
                return <li>
                  {item.name} : {item.count}
                  
                </li>
              })}</ul>

              <button onClick={clearCart}>ลบรายการทั้งหมด</button>
              <button style={{backgroundColor:'lightgreen'}} onClick={notify}>ยืนยันการสั่งอาหาร</button>
              <ToastContainer />
            </div>

            
          </div>

          
      </div>
     
    </div>
  );
}

export default App;
