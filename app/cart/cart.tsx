"use client";
import React, { useContext } from "react";
import { useCart } from "../providers/CartProvider";

interface CartProps {}

const Cart = () => {
  const { cart, setCart } = useCart();

  if (cart && cart.length === 0) {
    return (
      <div className="text-2xl font-bold mt-5 mx-4">Your cart is empty</div>
    );
  }

  return (
    <div className="mt-4 grid grid-cols-1">
      <span className="text-2xl font-bold mx-4">Your order</span>
      <div className=" grid grid-cols-4 mt-5 mx-4">
        {cart.map((pizza) => (
          <React.Fragment key={pizza.id}>
            <div className="grid col-span-3 grid-cols-3 mt-6">
              <span className="col-span-1">{`${pizza.quantity}x`}</span>
              <div className="grid grid-rows-4 grid-cols-1 row-gap-0">
                <span className="text-sm font-bold">{pizza.name}</span>
                <span className=" text-xs">+{pizza.crust}</span>
                <span className=" text-xs">+{pizza.size}</span>
                <span className=" text-xs">+{pizza.toppingsString}</span>
              </div>
            </div>
            <span className="col-span-1 mt-6">${pizza.price}</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Cart;
