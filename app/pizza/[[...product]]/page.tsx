'use client'

import { CrustOption, Pizza, SizeOption, Topping } from '@/app/api/pizza/menu/[item]/route';
import {  useCart } from '@/app/providers/CartProvider'
import React, { useEffect, useId, useMemo, useState } from 'react'
import OptionSelector from '../OptionSelector/OptionSelector';
import { useRouter } from 'next/navigation';

interface Props {
  params: {product: string};
  searchParams: {product_id: string};
}

const Product = ({params: {product}, searchParams: {product_id}}: Props) => {
  const [pizza, setPizza] = useState<Pizza>();
  const {cart, setCart} = useCart();
  const [pizzaSize, setPizzaSize] = useState<SizeOption>()
  const [toppings, setToppings] = useState<Topping[]>([])
  const [crust, setCrust] = useState<CrustOption>()
  const [quantity, setQuantity] = useState<number>(1)
  const [error, setError] = useState<string|null>(null)
  const router = useRouter();


  const addToCart = (event: React.FormEvent) => {
    event.preventDefault()
    if(!pizza) {
      throw Error("Pizza object should be defined")
    }
    
    if (!pizzaSize || !crust) {
      setError('Please select both size and crust options.');
      return;
    }



    const toppingsString = toppings.map((topping) => topping.name).join(', ')
    console.log(toppingsString);
    setCart([...cart,{ 'id': pizza.id, crust: crust?.name, toppingsString: toppingsString, price, name: pizza.name, quantity, size: pizzaSize?.name }])
    router.push('/')
  }

  const price: number = useMemo(()=> {

      const crustPrice = crust? crust.price : 0;
      const toppingsPrice = toppings.reduce((acc, cur) => acc + cur.price, 0)
      const pizzaSizePrice = pizzaSize? pizzaSize.price :0 ;

      return quantity*(crustPrice + toppingsPrice + pizzaSizePrice)


  }, [toppings, crust, quantity, pizzaSize])

  useEffect(()=> {
     const setPizzaDetails = async () => {
        const resp = await fetch(`/api/pizza/menu/${product_id}`)
        const json = await resp.json()
        setPizza(json)
     }
     setPizzaDetails()
  }, [])


  const handlePizzaSizeChange = (size: string) => {
    if(pizzaSize && crust) {
      setError(null)
    }
    setPizzaSize(pizza?.sizes.find(s => s.name === size))
  }

  const handleCrustChange = (crust: string) => {
    if(pizzaSize && crust) {
      setError(null)
    }
    setCrust(pizza?.crusts.find(s => s.name === crust))
  }


  return (
    <div className='grid grid-cols-1 place-items-center'>
        {
          error && (
            <div className='mt-4 w-96 bg-error'>
             {error}
             </div>
          )
        }    
       
        {pizza ? (

        <form onSubmit={(event)=> addToCart(event)}>
           <OptionSelector
              title="Choose Pizza Size"
              options={pizza.sizes}
              selectedOption={pizzaSize?.name || ''}
              setSelectedOption={(size) => handlePizzaSizeChange(size)}
            />
            <OptionSelector
              title="Choose Crust Type"
              options={pizza.crusts}
              selectedOption={crust?.name || ''}
              setSelectedOption={(crust) => handleCrustChange(crust)  }
            />
            <span className='text-2xl font-bold mt-4'>Choose your toppings Size</span>
            <fieldset className='mt-6'>
              {pizza.toppings.map((topping: Topping)=> (
                    <div key={topping.name} className='grid grid-cols-3 w-96 items-center' >
                       <div className='col-span-2 form-control mt-2'>
                       <label className="cursor-pointer grid grid-cols-4">
                          <input id={topping.name} className='checkbox' type='checkbox' value={topping.name} checked={toppings.includes(topping)} onChange={(event) => setToppings([...toppings, topping])}/>
                          <span className="label-text">{topping.name}</span> 
                        </label>
                       </div>
                       <span className='col-span-1'>${topping.price}</span>
                    </div>
                 
              ))}
            </fieldset>

            <span className='text-2xl font-bold'>Quantity</span>
            <div className='grid grid-cols-3 w-96 items-center mt-6'>
                 <button className="btn btn-circle btn-outline" onClick={(event) => {
                  event.preventDefault()
                  if(quantity > 1)
                  {
                    setQuantity(quantity - 1)
                  }
                  
                 }}>-</button>

                 <span>{quantity}</span>

                 <button className="btn btn-circle btn-outline"onClick={(event) => {
                  event.preventDefault()
                  setQuantity(quantity + 1)
                 }}>+</button>

                 
            </div>
            

            <button className='btn btn-accent mt-4 w-96' onClick={(event) => addToCart(event)}>Add to Cart</button>


        </form>
      ): null}
      
    </div>
  )
}

export default Product
