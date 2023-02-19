import './ItemList.css'
import Items from '../Items/Items';
import React from "react";

const ItemList = ({items})=>{
  return(
    <div className="col-12 containerProductos">
        
        {
            items.map(producto=>(
                
                    <Items key={producto.id} item={producto}/>
               
            ))
        }
    </div>
)

}

export default ItemList;