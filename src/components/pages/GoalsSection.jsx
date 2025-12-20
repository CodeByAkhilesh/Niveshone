import React from 'react'
import ServiceCard from '../ServiceCard'
import GoalsCard from '../GoalsCard'
import Button from '../Button'
import BgLayout from '../BgLayout'

const GoalsSection = () => {
  return (
    <div>
        <h1 className='text-white text-center text-3xl md:text-5xl tracking-tighter font-semibold mt-20 mb-10 px-5'>Every Goal needs a first step in the Right Direction!</h1>

      <div className='py-10 md:py-15 xl:py-5 flex flex-col md:flex-row flex-wrap gap-y-15 md:px-10 xl:px-15  items-center md:justify-between md:w-[775px] xl:w-[1210px] mx-auto'>
            <GoalsCard/>
            <GoalsCard/>
            <GoalsCard/>
            <GoalsCard/>
            <GoalsCard/>
            <GoalsCard/>
      </div>
      <div className='mx-auto flex items-center justify-center mt-15 w-'>
        <Button btnName={"START A SIP"}/>
      </div>
      <div className='flex flex-col relative h-48 w-[90vw] md:w-[703px] lg:w-[958px] xl:w-[1210px] mx-auto mt-20 md:mt-20'>
      <BgLayout content={"Committed To Helping You Achieve Financial Freedom"}/>
    </div>
    </div>
  )
}

export default GoalsSection
