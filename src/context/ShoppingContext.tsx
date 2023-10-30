import { createContext, useEffect } from 'react';
import { useState } from 'react';

export const ShoppingContext = createContext(null);

const Products = [] as any;

export const ShoppingContextProvider = (props: any) => {
    const [cart, setCart] = useState(Products);
    const [quantity, setQuantity] = useState(0);
    const [total, setTotal] = useState(0);

    const addToCart = (id: Number, price: Number, quantity: number, size: String, name: String, image: String) => {

        if (cart.find((item: any) => item.id === id && item.size === size)) {
            setCart((prev: any) => prev.map((item: any) => item.id === id && item.size === size ? { ...item, quantity: quantity } : item))
            return;
        }

        setCart((prev: any) => [...prev, { id: id, price: price, quantity: quantity, size: size, name: name, image: image }])
    }

    const removeFromCart = (id: Number) => {
        setCart((prev: any) => prev.filter((item: any) => item.id !== id))
    }

    const increaseQuantity = () => {
        if (quantity > 8) { return; }

        setQuantity(quantity + 1)
    }

    const decreaseQuantity = () => {
        if (quantity < 1) { return; }
        setQuantity(quantity - 1)
    }

    const decreaseBasketQuantity = (id: Number, size: String) => {
        setCart((prev: any) => prev.map((item: any) => item.id === id  && item.size === size && item.quantity > 1 ? {...item, quantity: item.quantity - 1} : item ))
    }


    const increaseBasketQuantity = (id: Number, size: String) => {

        setCart((prev: any) => prev.map((item: any) => item.id === id  && item.size === size && item.quantity < 9 ? {...item, quantity: item.quantity + 1} : item ))
    }

    useEffect(() => {

        let basket = 0

        if (cart.length === 0){
            setTotal(0)
            return 
        }

        cart.forEach((item: any) => {
            basket = basket + (item.price * item.quantity);
            setTotal(basket)
        })

    }, [cart])


    const contextValue = { cart, addToCart, removeFromCart, quantity, setQuantity, increaseQuantity, decreaseQuantity, total, increaseBasketQuantity, decreaseBasketQuantity } as any;

    return (
        <ShoppingContext.Provider value={contextValue}>
            {props.children}
        </ShoppingContext.Provider>
    )
}


