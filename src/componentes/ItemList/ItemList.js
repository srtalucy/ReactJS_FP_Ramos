import './ItemList.css'
import Items from '../Items/Items';
import React from "react";

const ItemList = ({items})=>{
  return(
    <div className="col-12 containerProductos">
        
        {
            items.map(producto=>(
                // <Link key={producto.id} to={`/item/${producto.id}`}>
                    <Items key={producto.id} item={producto}/>
                // </Link>
            ))
        }
    </div>
)

}

export default ItemList;