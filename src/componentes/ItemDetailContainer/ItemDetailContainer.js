import { useEffect, useState } from 'react'
import {  useParams} from 'react-router-dom'
//Estilos
import './ItemDetailContainer.css'
import { getDoc, doc} from 'firebase/firestore';
import {db} from '../../services/firebase';
//Componentes
import ItemDetail from '../ItemDetail/ItemDetail'


//Core

/*#############################################
                 Logica
###############################################*/
const ItemDetailContainer = () => {//Funcion constructora

    const [item, setItem] = useState({});

    const { productosId } = useParams();
    
      useEffect(() => {
        const getData= async()=>{
          const queryRef= doc(db, 'listaDeProductos', productosId);
          const response = await getDoc(queryRef);
          const newDoc={
            id:response.id,
            ...response.data(),
          }
          console.log(newDoc);
          setItem(newDoc)
        }
        getData();
      }, [productosId]);
    
    return (
        <div className='ItemDetail-box'>
         
             <ItemDetail item={item}/>
            </div>
            
      
    )
}


export default ItemDetailContainer;
