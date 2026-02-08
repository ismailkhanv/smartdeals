import React, { useReducer, useState } from 'react'
import './AddtoCart.scss'

const AddtoCart = () => {

    const cartData = (state,action) =>{
        switch(action.type){
            case 'cartadd': return {...state, cartCount: state.cartCount + 1};
            case 'cartminus': return {...state, cartCount: state.cartCount > 0 ? state.cartCount - 1 : 0};
            case 'default' : return state;
        }
    }

     let [state,dispatch] = useReducer(cartData, { cartCount: 1})

  return (
    <div className='sdAddCartWrapper'>
        <button className='sdCartBtn sdCartBtnMinus' onClick={()=>dispatch({type:'cartminus'}) }><i class="bi bi-dash-lg"></i></button>
        <span className='sdCartCount'>{state.cartCount}</span>
        <button className='sdCartBtn sdCartBtnAdd' onClick={()=> dispatch({type:'cartadd'})}><i class="bi bi-plus-lg"></i></button>
    </div>
  )
}

export default AddtoCart