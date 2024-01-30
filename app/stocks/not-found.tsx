import Link from 'next/link'
import React from 'react'

const NotFoundPage: React.FC = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className='text-center'>
        <p className='text-xl font-medium m-6'>Tkt not found.</p>
        <Link href='/' className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded'>
          Go Home
        </Link>
      </div>
    </div>
  )
}

export default NotFoundPage
