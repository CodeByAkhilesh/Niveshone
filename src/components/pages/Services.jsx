import React from 'react'
import ServiceCard from '../ServiceCard'

const Services = () => {
  return (
    <div className=''>
    <div className='w-[1210px] mx-auto text-6xl font-bold tracking-tight mt-20'>
      <h1 className='text-white'>Committed to helping you achieve <br /> <span className='bg-gradient-to-r from-[#3aab50] to-[#268eff] bg-clip-text text-transparent'> Financial Freedom</span></h1>
      <h2 className='text-white text-5xl font-medium mt-10 text-center'>How We Support Your Investments</h2>
      <div className='py-15 flex flex-wrap gap-10 items-center justify-center '>
      <ServiceCard/>
      <ServiceCard/>
      <ServiceCard/>
      <ServiceCard/>
      <ServiceCard/>
      <ServiceCard/>
      </div>
    </div>
    </div>
  )
}

export default Services
