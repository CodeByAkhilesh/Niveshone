import React, { useState } from 'react'

const ServiceCard = ({serviceName, discription, index}) => {
  return (
    <div key={index} className='relative'>
        <div className='h-[385px] w-[291px] border border-[#268eff] rounded-2xl bg-black absolute top-0 z-10 px-7 py-10'>
          <h1 className='text-white text-4xl'>{serviceName}</h1>
          <p className='text-white text-xl font-medium tracking-wide pt-4'>{discription}</p>
        </div>
        <div className='h-[385px] w-[291px] border border-[#268eff] rounded-2xl -rotate-3 bg-linear-to-r from-[#3aab50] to-[#268eff]'></div>
    </div>
  )
}

export default ServiceCard
