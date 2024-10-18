'use client'
import { Url } from 'next/dist/shared/lib/router/router';
import Link from 'next/link';
import React, { ReactNode } from 'react'


interface CardProps {
    href?: Url;
    children?: ReactNode;
}

const Card: React.FC<CardProps> = ({href, children}) => {
  const content = ( 
   <div className='w-96 h-48 border-2 hover:border-gray-600 rounded' onClick={(event) => console.log(event)}>
         {children}
   </div>
  )

  if(href) {
      return (
          <Link href={href}>{content}</Link>
      );
  }
  return content
}

export default Card
