import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { CartItem } from '../CartItem/CartItem';


 export const CartContainer = () => {
  const {itemsCart, clearItemsCart, finalTotalPrice} = useContext(CartContext);
 
  console.log(itemsCart)

  const sendOrder= (event)=>{
    
    const newOrder={
      buyer:{
        nombre:"",
        telefono:" ",
        email:"",
      },
      items: itemsCart,
      total:finalTotalPrice(),
    }
  
  }

  return (
    <div>
    
     
      <div>
        {
          itemsCart.length>0 ?
          <>
            {
              itemsCart.map(item=>(
                <CartItem key={item.id} item={item}/>
              ))
            }
            <h4>Total a pagar: € {finalTotalPrice()}</h4>
            <button onClick={clearItemsCart}>Vaciar el carrito</button>
            <button>Ir a pagar</button>
          </>
          :
          <p>No has agregado productos</p>
        }
      </div>
      <div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
  <label for="floatingInput">Email address</label>
</div>
<div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
  <label for="floatingInput">Email address</label>
</div>
<div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
  <label for="floatingInput">Email address</label>
</div>
     
    </div>
  )
}
