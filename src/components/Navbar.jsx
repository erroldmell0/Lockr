import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-slate-800 text-white'>
      <div className="mycontainer flex justify-between items-center px-4 py-5 h-16">
        <div className="logo font-bold text-2xl">
          <span className='text-green-500'>&lt;</span>
          Lockr
          <span className='text-green-500'>/&gt;</span>
        </div>
        {/* <ul>
          <li className='flex gap-4'>
            <a className='hover:font-bold' href='/'>Home</a>
            <a className='hover:font-bold' href='#'>About</a>
            <a className='hover:font-bold' href='#'>Contact</a>
          </li>
        </ul> */}
        <button className='text-white bg-green-600 rounded-full flex justify-center items-center ring-1 ring-white'>
          <img className='invert h-10 py-1 px-1' src='/icons/github.svg' alt='github'/>
          <span className='font-bold px-1'>GitHub</span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
