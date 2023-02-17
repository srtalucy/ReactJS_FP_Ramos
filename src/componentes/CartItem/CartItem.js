import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./CartItem.css";
import { Card } from "react-bootstrap";

export const CartItem = ({ item }) => {
  const { removeProduct } = useContext(CartContext);
    const total=0;
  return (
    <div className="cart-item-container">
      
      <Card className="card-separated">
        <div className="contenedorDetail cart-item-container">
          <Card.Img variant="top" src={item.imagen}></Card.Img>

          <Card.Body className="cart-info-container">
            <Card.Header as="h5">{item.nombre}</Card.Header>
            <Card.Title> € {item.precio}</Card.Title>
            <Card.Title>Cantidad: {item.quantity}</Card.Title>
            <Card.Title>Precio total:€{item.totalPrice}</Card.Title>
            <button className="restar" onClick={() => removeProduct(item.id)}>
          Eliminar producto
        </button>
          </Card.Body>
          
        
        </div>

        
      </Card>
      
    </div>
  );
};
