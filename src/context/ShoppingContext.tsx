import { createContext } from 'react';
import { useState } from 'react';


export const ShoppingContext = createContext(null);

const Products = [{
    id: 0 as Number,
    price: 0 as Number,
    quantity: 0 as number,
    size: '' as String,
}]

export const ShoppingContextProvider = (props: any) => {
    const [cart, setCart] = useState(Products);

    const addToCart = (id: Number, price: Number, quantity: number, size: String) => {

        if (cart.find((item: any) => item.id === id)) {
            setCart((prev: any) => prev.map((item: any) => item.id === id ? { ...item, quantity: item.quantity + quantity } : item))
            return;
        }

        setCart((prev: any) => [...prev, { id: id, price: price, quantity: quantity, size: size }])
    }

    const removeFromCart = (id: Number) => {
        setCart((prev: any) => prev.filter((item: any) => item.id !== id))
    }

    // const quantity = (id: Number) => {
    //     let amount = cart.find((item: any) => item.id === id)?.quantity || 0 as any;
    //     return amount;
    // }

    // const increaseQuantity = (id: Number) => {
    //     if (quantity(id) > 8) { return; }
    //     setCart((prev: any) => prev.map((item: any) => item.id === id ? { ...item, quantity: item.quantity + 1 } : item))
    // }
        
    console.log(cart)

    const contextValue = { cart, addToCart, removeFromCart } as any;

    return (
        <ShoppingContext.Provider value={contextValue}>
            {props.children}
        </ShoppingContext.Provider>
    )
}


