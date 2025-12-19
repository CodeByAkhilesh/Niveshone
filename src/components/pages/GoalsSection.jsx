import React from 'react'
import ServiceCard from '../ServiceCard'
import GoalsCard from '../GoalsCard'
import Button from '../Button'

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
    </div>
  )
}

export default GoalsSection
