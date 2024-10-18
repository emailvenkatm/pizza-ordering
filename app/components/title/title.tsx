import Link from 'next/link'
import React from 'react'

const Title = () => {
  return (
    <header className="bg-secondary w-full h-32 flex  items-center">
          <Link href='/'>

                     <h1 className="text-white text-xl font-bold ml-8">Awesome Pizza</h1>

          </Link>
     </header>
  )
}

export default Title
