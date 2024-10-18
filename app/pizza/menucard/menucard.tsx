import Card from '@/app/components/card/card'
import React, { ReactNode } from 'react'

interface MenuCardProps{
    productImage?: string;
    name: string;
    description?: string;
    price: string;
    id: number;
    delegated?: ReactNode
}

const MenuCard: React.FC<MenuCardProps> = ({id, name, productImage, description, price, ...delegated}) => {
  return (
    <Card href={`/pizza?product_id=${id}`}>

        <div className="flex  rounded-lg overflow-hidden h-full">
            <div className={`flex flex-col p-4 ${productImage ? 'flex-grow' : 'w-full'}`}>
                <div className="text-lg font-bold">{name}</div>
                <div className="text-sm text-gray-600">{description}</div>
                <div className="text-sm font-bold mt-auto justify-self-end">{price}</div>
            </div>
            {productImage && (
                <img 
                src={productImage} 
                className="w-32  h-48 object-cover" 
                alt={name}
                />
            )}
        </div>
        
    </Card>
  )
}

export default MenuCard
