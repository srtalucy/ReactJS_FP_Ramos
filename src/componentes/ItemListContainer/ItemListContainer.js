
import '../ItemListContainer/ItemListContainer.css';
import { Link } from 'react-router-dom';
import AddCartBtn from '../AddCartBtn/AddCartBtn';
import Items from '../Items/Items';
import ItemList from '../ItemList/ItemList';
import React from "react";

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {collection, getDocs, query, where} from 'firebase/firestore';
import {db} from '../../services/firebase';




 export default function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const { precioProducto } = useParams();
  useEffect(() => {
    const getData = async () => {
      const queryRef = precioProducto ? query(collection(db, 'listaDeProductos'), where('estado', '==', precioProducto)) : collection(db, 'listaDeProductos');
      const response = await getDocs(queryRef);
      const docsInfo = response.docs.map(doc => {
        const newDoc = {
          id: doc.id,
          ...doc.data(),
        };
        return newDoc;
      });

      setProductos(docsInfo);
      // const newDoc = {
      //   id: response.docs[0].id,
      //   ...response.docs[0].data()
      // }
      // console.log(newDoc);
    };


    getData();
  }, [precioProducto]);

  return (
    <div className="productos_container">
     
      <ItemList items={productos} />
    </div>
  );


}

