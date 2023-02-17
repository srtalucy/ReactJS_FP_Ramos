import { useState } from "react";

import './ItemCount.css'

const ItemCount = ({stock, initial, onAdd})=>{
    const [contador, setContador]= useState(initial)
    const restar = ()=>{
        if(contador>1){
            setContador(contador-1)
        }
    }

    const sumar = ()=>{
        if(contador<stock){
            setContador(contador+1)
        }
    }

    return(
        <div className="itemC">
            <p>Stock disponible: {stock}</p>
            <div className="contador">
            <button className='buttonContador restar' disabled={stock===0} onClick={restar}> - </button>
            <p>{contador}</p>
            <button className="buttonContador sumar" disabled={stock===0} onClick={sumar}> + </button>
            </div>
            <button disabled={stock===0} onClick={()=>onAdd(contador)}>Agregar</button>
        </div>
    )
}

export default ItemCount;