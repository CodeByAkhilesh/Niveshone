import React from 'react'

const Footer = () => {
  return (
    <div className='bg-linear-to-r from-[#3aab517b] to-[#268fff7b]'>
        <div className='h-30 w-302.5  flex items-center mx-auto'>
        <div className='h-full flex items-center w-1/3 pl-20'>
            <img className='w-30' src="src\assets\brand-logo-web.png" alt="" />
        </div>
        <div className='h-full flex items-center w-1/3 font-medium text-center'>
            <p className='text-white'>&copy; 2025 Nivesh one FS - All Rights Reserved.</p>
        </div>
        <div className='h-full flex items-center w-1/3 text-white text-center font-medium'>
            <p><span className='mr-2'>&#8505;</span>Mutual Fund investments are subject to market risks, read all scheme related documents carefully.</p>
        </div>
      
    </div>
    </div>
  )
}

export default Footer
