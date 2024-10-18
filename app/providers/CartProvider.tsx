'use client'
import React, { ReactNode, useContext, useState } from 'react'

interface CardProviderProps {
    children: ReactNode
}

export interface Pizza {
    id: string;
    name: string;
    price: number;
    size?: string;
    crust?: string;
    // toppings?: string[];
    toppingsString: string;
    quantity?: number; 
  }
  
export interface CartContextType {
    cart: Pizza[];
    setCart: React.Dispatch<React.SetStateAction<Pizza[]>> ;
  }
  
export const CartContext = React.createContext<CartContextType | undefined>(undefined)

const CartProvider: React.FC<CardProviderProps> = ({children}) => {
  const [cart, setCart] = useState<Pizza[]>([])  
  const value = React.useMemo(()=> ( {cart, setCart} ), [cart]);
  


  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider


export  const useCart = (): CartContextType => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};