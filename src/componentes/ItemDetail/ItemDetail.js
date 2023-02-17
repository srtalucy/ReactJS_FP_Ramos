import React from "react";
import './ItemDetail.css';
import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount'
import { Link } from "react-router-dom";
import { useCartContext,  CartContext } from "../../context/CartContext";
import { useState } from "react";



const ItemDetail = ({item}) => {//Funcion constructora

   const {addProduct} =useCartContext(CartContext);
   const [ setQuantity] = useState(0);

   const onAdd= (contador)=>{
    addProduct(item, contador);
    setQuantity(contador);
   }
   
    return (

        <article className='itemDetail-producto'>
            <h1>DETALLE DEL PRODUCTO SELECCIONADO</h1>
            
            <Card className='card-separated'>
            <div className="contenedorDetail">
                <Card.Header as="h5">{item.nombre}</Card.Header>
                <Card.Img variant="top" src={item.imagen}>
                </Card.Img>
                <Card.Body>
                    <Card.Title> € {item.precio}</Card.Title>
                    <Card.Text>
                       Descripcion
                    </Card.Text>
                    </Card.Body>
                    </div>
                <ItemCount className='itemCount'initial={1} stock={5} onAdd={onAdd}></ItemCount>
                
                
            </Card>
            
            <h2><Link className= 'volverP' to='/cart'>Ver carrito</Link></h2>
            <h2><Link className='volverP'to='/Productos'>Volver a los productos</Link></h2>
        </article>


    )

}

/*#############################################
                 Exportacion
###############################################*/
export default ItemDetail;