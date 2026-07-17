import React from 'react'

function Navbar() {
  return (
    <header className='h-18 pl-30 flex justify-between '>
        <div className='h-full w-20'>
            <img src="/images/Frame.png" alt="" />
        </div>
        <ul className='h-full w-100 flex items-center gap-10'>
            <li className='text-xl font-medium'>Home</li>
            <li className='text-xl font-medium'>About</li>
            <li className='text-xl font-medium'>Contact</li>
        </ul>
    </header>
  )
}

export default Navbar