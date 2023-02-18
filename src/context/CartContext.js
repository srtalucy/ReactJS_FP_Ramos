import { useContext, createContext, useState } from "react";

export const CartContext= createContext([]);

export const useCartContext = ()=>{
   return useContext(CartContext);
  
}

const CartProvider=({children})=>{
    //Estado del cart provider
    const [itemsCart, setItemsCart]= useState([])
    //funciones del cart provider
   
    const isInCart = (id)=>{
        const elementExists = itemsCart.some((elemento)=>elemento.id === id);
        return elementExists;
    }

    const addProduct = (product, qty)=>{
        const newList = [...itemsCart];
        //verifico si el producto existe en el arreglo
        // si existe, actualice la propiedad quantity de ese producto
        if(isInCart(product.id)){
            const productIndex = itemsCart.findIndex(element=>element.id===product.id);
            newList[productIndex].quantity = newList[productIndex].quantity + qty;
            newList[productIndex].totalPrice = newList[productIndex].quantity * newList[productIndex].precio;
            
            setItemsCart(newList)
        } else{
        //si no existe, agregue el producto al listado
            const newProduct={...product, quantity:qty, totalPrice: qty*product.precio}
            // {id:1,title:"camisa", quantity:3}
            const newList = [...itemsCart];
            newList.push(newProduct);
            setItemsCart(newList);
        }
    }
    const getTotalProducts = ()=>{
        const totalProducts = itemsCart.reduce((acc,item)=>acc + item.quantity,0);
        return totalProducts;
    }
    const finalTotalPrice=()=>{
        const finalTotalPrice= itemsCart.reduce((acc, i)=> acc+i.totalPrice, 0);
        return finalTotalPrice;
    }
    const removeProduct = (idProduct)=>{
        const copyArray = [...itemsCart];
        const newArray = copyArray.filter(elm=>elm.id !== idProduct);
        setItemsCart(newArray);
    }
    const clearItemsCart=()=>{
        setItemsCart([])
    }
   
    //Render de cart provider
    return(
       <CartContext.Provider value={{itemsCart, addProduct, getTotalProducts, removeProduct, clearItemsCart, finalTotalPrice}}>
        {children}
       </CartContext.Provider>
    )
}
export default CartProvider;