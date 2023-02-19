import { collection, query } from 'firebase/firestore';
import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { CartItem } from '../CartItem/CartItem';
import { db } from '../../services/firebase';
import { addDoc } from 'firebase/firestore';

const inputValues = [
  { label: 'Nombre', inputName: 'name' },
  { label: 'Apellido', inputName: 'surname' },
  { label: 'Email', inputName: 'email' },
  {label: 'Domicilio', inputName: 'domicilio'}
];
  const pagos=['Efectivo', 'Tarjeta de crédito', 'Tarjeta de débito', 'Mercado Pago', 'Transferencia',] 
 export const CartContainer = () => {
  const {itemsCart, clearItemsCart, finalTotalPrice} = useContext(CartContext);
  const [orderId, setOrderId]= useState(undefined);

 
  const [formValues, setFormValues] = useState({
    
    name: '',
    surname: '',
    email: '',
    domicilio:'',
  items: itemsCart,
  total: finalTotalPrice()
}
  );

  const handleChange = (evt) => {
    setFormValues({ ...formValues, [evt.target.name]: evt.target.value });
  };

  async function onSubmit() {
   const queryRef= collection(db, 'orders');
   const response= await addDoc(queryRef, formValues);
   setOrderId(response.id);
  }
 

  
 
    

  return (
    <div>
    
     <h3>Su numero de orden es: {orderId}</h3>
      <div>
        {
          itemsCart.length>0 ?
          <>
            {
              itemsCart.map(item=>(
                <CartItem Name={item.id} item={item}/>
              ))
            }
            <h4>Total a pagar: € {finalTotalPrice()}</h4>
            <button onClick={clearItemsCart}>Vaciar el carrito</button>
            
            
            <div>
            <h3>IR A PAGAR</h3>
            <div>
      {inputValues.map((elm) => (
        <div  className="inputContainer mt-5">
          <label>{elm.label}</label>
          <input 
            type="text"
            onChange={(evt) => handleChange(evt)}
            name={elm.inputName}
          />
        </div>
      ))}
      <div>
        <p>Métodos de pago</p>
        {
          pagos.map(p=>(
            <div className="form-check">
  <input className="form-check-input" type="radio" name="exampleRadios"  />
  <label className="form-check-label"  htmlFor="exampleRadios1">
    {p}
  </label>
</div>
          ))
        }
      </div>
      <button
        disabled={
          !(
            formValues.name !== '' &&
            formValues.surname !== '' &&
            formValues.email !== '' &&
            formValues.direccion!==''
          )
        }
        onClick={(evt) => onSubmit(evt)}
      >
        Crear orden
      </button>
    </div>
      
    </div>

          </>
          :
          <p>No has agregado productos</p>
        }
      </div>
        
    </div>
  )
}
