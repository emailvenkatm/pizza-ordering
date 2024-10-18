import Image from "next/image";
import { useState } from "react";
import Card from "./components/card/card";
import MenuCard from "./pizza/menucard/menucard";
import Cart from "./cart/cart";


export function metadata() {
  return {
    title: "Crazy Pizza App"
  }
}
interface MenuCategory {
  id: number;
  name: string;
  description?: string;
  products: MenuItem[];
  hidden?: boolean
}

interface MenuItem {
  id: number;
  name: string;
  price: string;
  description?: string;
  image?: string;
  isFeatured?: boolean;
  code: string;
  productTypeIds: number[]
}


async function fetchPizzaMenu() {
  const response = await fetch("http://localhost:3000/api/pizza/menu", {cache: "no-store"});
  const json = await response.json()
  return json

}


export default async function Home() {
  const menuData = await fetchPizzaMenu()

  return (
       
       <div className="grid grid-cols-3">
            <div className="col-span-2">
                {menuData?.result?.map((category: MenuCategory) => (
                        <div key={category.id}>

                            <div className="text-2xl font-bold ml-5 my-4">
                                {category.name}
                            </div>

                            <div className="my-12 grid grid-cols-2 gap-2 justify-items-center">
                                {
                                  category?.products.map(({id, name, image, description, price}: MenuItem) => (
                                      <MenuCard id={id} key={category.id} name={name} description={description} price={price} productImage={image} />
                                  ))
                                }
                            </div>

                        </div>
                      
                ))}
            </div>
            
            <div className="col-span-1 bg-gray-100">
                    <Cart>

                    </Cart>
            </div>

            

       </div>

     
  );
}
