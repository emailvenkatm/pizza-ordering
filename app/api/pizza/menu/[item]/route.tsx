import { NextRequest, NextResponse } from "next/server";

export interface Topping {
    name: string;
    price: number;
  }
  
 export interface SizeOption {
    name: string;
    price: number;
  }
  
  export interface CrustOption {
    name: string;
    price: number;
  }
  
  export interface Pizza {
    id: string;
    name: string;
    description: string;
    image: string;
    sizes: SizeOption[];
    crusts: CrustOption[];
    toppings: Topping[];
  }
  


const pizzas: Pizza[] = [
    {
      id: "1",
      name: "Cheese Pizza",
      description: "Classic cheese pizza",
      image: "https://example.com/cheese_pizza.jpg",
      sizes: [
        { name: "Small", price: 10.95 },
        { name: "Medium", price: 12.95 },
        { name: "Large", price: 14.95 }
      ],
      crusts: [
        { name: "Thin", price: 0 },
        { name: "Thick", price: 2 }
      ],
      toppings: [
        { name: "Extra Cheese", price: 1 },
        { name: "Pepperoni", price: 1.5 },
        { name: "Mushrooms", price: 1 },
        { name: "Onions", price: 1 },
        { name: "Sausage", price: 1.5 },
        { name: "Bacon", price: 1.5 },
        { name: "Black Olives", price: 1 },
        { name: "Green Peppers", price: 1 },
        { name: "Pineapple", price: 1.5 },
        { name: "Spinach", price: 1 },
        { name: "Chicken", price: 2 }
      ]
    },
    {
      id: "2",
      name: "Pepperoni Pizza",
      description: "Pepperoni pizza with extra cheese",
      image: "https://example.com/pepperoni_pizza.jpg",
      sizes: [
        { name: "Small", price: 12.95 },
        { name: "Medium", price: 14.95 },
        { name: "Large", price: 16.95 }
      ],
      crusts: [
        { name: "Thin", price: 0 },
        { name: "Thick", price: 2 }
      ],
      toppings: [
        { name: "Extra Cheese", price: 1 },
        { name: "Pepperoni", price: 1.5 },
        { name: "Mushrooms", price: 1 },
        { name: "Onions", price: 1 },
        { name: "Sausage", price: 1.5 },
        { name: "Bacon", price: 1.5 },
        { name: "Black Olives", price: 1 },
        { name: "Green Peppers", price: 1 },
        { name: "Pineapple", price: 1.5 },
        { name: "Spinach", price: 1 },
        { name: "Chicken", price: 2 }
      ]
    },
    {
      id: "3",
      name: "Margherita Pizza",
      description: "Classic margherita pizza with fresh basil",
      image: "https://example.com/margherita_pizza.jpg",
      sizes: [
        { name: "Small", price: 11.95 },
        { name: "Medium", price: 13.95 },
        { name: "Large", price: 15.95 }
      ],
      crusts: [
        { name: "Thin", price: 0 },
        { name: "Thick", price: 2 }
      ],
      toppings: [
        { name: "Extra Cheese", price: 1 },
        { name: "Fresh Basil", price: 1 },
        { name: "Tomato Slices", price: 1 },
        { name: "Garlic", price: 0.5 }
      ]
    },
    {
      id: "4",
      name: "Hawaiian Pizza",
      description: "Hawaiian pizza with pineapple and ham",
      image: "https://example.com/hawaiian_pizza.jpg",
      sizes: [
        { name: "Small", price: 13.95 },
        { name: "Medium", price: 15.95 },
        { name: "Large", price: 17.95 }
      ],
      crusts: [
        { name: "Thin", price: 0 },
        { name: "Thick", price: 2 }
      ],
      toppings: [
        { name: "Pineapple", price: 1.5 },
        { name: "Ham", price: 1.5 },
        { name: "Extra Cheese", price: 1 }
      ]
    },
    {
      id: "5",
      name: "Alfredo Pizza",
      description: "Creamy alfredo sauce with grilled chicken",
      image: "https://example.com/alfredo_pizza.jpg",
      sizes: [
        { name: "Small", price: 14.95 },
        { name: "Medium", price: 16.95 },
        { name: "Large", price: 18.95 }
      ],
      crusts: [
        { name: "Thin", price: 0 },
        { name: "Thick", price: 2 }
      ],
      toppings: [
        { name: "Grilled Chicken", price: 2 },
        { name: "Spinach", price: 1 },
        { name: "Mushrooms", price: 1 },
        { name: "Extra Cheese", price: 1 }
      ]
    }
  ];
  
 

export function GET(request: NextRequest, {params: {item}}: {params: {item: string}}) {
        const pizza = pizzas.find((pizza: Pizza) => pizza.id === item);

        if (!pizza) {
        return NextResponse.json({ message: "Pizza not found" }, { status: 404 });
        }
        return NextResponse.json(pizza, { status: 200 });
}