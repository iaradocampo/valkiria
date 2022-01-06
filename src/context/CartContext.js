import { createContext, useState, useContext } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

function CartContextProvider ({children}){

    const [cart, setCart] = useState([]);

    const addItem = (item) => {

        const exist = cart.find( (x) => x.item.id === item.item.id);

        if (exist){
            setCart(cart.map( (x) => x.item.id === item.item.id ? { ...exist, quantity: exist.quantity + item.quantity } : x) 
            );
        }else {

            setCart( [...cart, { ...item, quantity: item.quantity }] );
        }
    }

    const addOneItem = (item) => {

        const exist = cart.find( (x) => x.item.id === item.item.id);

        if (exist){
            setCart(cart.map( (x) => x.item.id === item.item.id ? { ...exist, quantity: exist.quantity + 1 } : x) 
            );
        }else {

            setCart( [...cart, { ...item, quantity: item.quantity }] );
        }
    }

    const onRemove = (item) => {

        const exist = cart.find( (x) => x.item.id === item.item.id);

        if (exist.quantity === 1) {
            setCart(cart.filter( (x) => x.id !== item.item.id));
        } else {

            setCart(cart.map( (x) => x.item.id === item.item.id ? { ...exist, quantity: exist.quantity - 1 } : x)
            );
        }
    }

    const deleteItem = (id) => {
        
        const existId = cart.filter( (x) => x.item.id !== id);

        setCart(existId);
    }

    const emptyCart = () => {
        setCart([]);
    }

    const total = cart.reduce((a, b) => a + b.item.price * b.quantity, 0);

    const itemsOnCart = cart.reduce((a, b) => a + b.quantity, 0);

    return(
        <CartContext.Provider value={{cart, addItem, addOneItem, onRemove, deleteItem, emptyCart, total, itemsOnCart}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;