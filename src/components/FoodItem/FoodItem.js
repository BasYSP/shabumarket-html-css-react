import React, { useState } from 'react'
import Order from '../Order/Order';
import './FoodItem.css'

const FoodItem = (props) => {
    const [count, setCount] = useState(0);
    const { food,key,onSubmit } = props;

  function onClickPlus(){
    setCount(count+1)
  }
  function onClickMinus(){
    if (count>0){
      setCount(count-1)
    }
  }
  function submitOrder(event, key){
    event.preventDefault();
    if (count !== 0){
      onSubmit(food.name,count)
    }
    
  }
  
  return (
    <div>
      <form onSubmit={submitOrder}>
          <div className='menu-box'>
            <img src={food.picture} />
            <h3>{food.name}</h3>
            <div className='menu-count'>
              <h3>จำนวน</h3>
              <img src='/images/minus.png' onClick={onClickMinus}/>
                {count}
              <img src='/images/plus.png'onClick={onClickPlus}/>
            </div>
          </div>
          <input type='number' value={count} hidden></input>
          <div className='button-order'>
              <button type='submit' >สั่งอาหาร</button> 
          </div>
             
      </form>   
    </div>
  )
}

export default FoodItem