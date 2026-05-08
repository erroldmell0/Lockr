import React from 'react'

const Footer = () => {
  return (
    <>
        <div className='bg-slate-800 text-white flex justify-between items-center fixed bottom-0 w-full'>
            <div className="logo font-bold text-2xl px-5">
                <span className='text-green-500'>&lt;</span>
                Lockr
                <span className='text-green-500'>/&gt;</span>
            </div>

            <div className='px-5 py-4'>
                &copy;errolnotfound
            </div>
        </div>
    </>
  )
}

export default Footer
