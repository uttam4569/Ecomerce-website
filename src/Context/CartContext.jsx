import { createContext, useContext, useState } from "react";

export const CartContext = createContext()

export const CartContextWrapper = ({ children }) => {
    const [cartItems, setCartItems] = useState([])
    return (
        <CartContext.Provider value={{ cartItems, setCartItems }}>
            {children}
        </CartContext.Provider>
    )
}


export const useCart = () => {
    return useContext(CartContext)
}