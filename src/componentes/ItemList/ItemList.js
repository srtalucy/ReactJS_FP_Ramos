import './ItemList.css'
import Items from '../Items/Items';
import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom';
import {collection, getDocs} from 'firebase/firestore';
import {db} from '../../services/firebase';
import { Link } from 'react-router-dom';

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