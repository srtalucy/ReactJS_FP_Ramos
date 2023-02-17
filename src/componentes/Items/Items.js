import './Items.css';
import AddCartBtn from '../AddCartBtn/AddCartBtn';
import { Link } from 'react-router-dom';

const Items = ({item})=>{
 
    return (
        <div className=" col-md-3 text-center mt-4 cardContainer">
          
            <div className="card" key={item.id}>
              <img src={item.imagen} alt='' className="img-top d-flex align-self-center"/>
              <h5>{item.nombre}</h5>
              <span className="d-flex text-center justify-content-center">€{item.precio}</span>
             
              <button className='btn detail'><Link to={`/item/${item.id}`}> Ver Detalle del Producto </Link></button>
            </div>
        </div>
      );
}

export default Items;