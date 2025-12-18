import React from 'react'
import ServiceCard from '../ServiceCard'
import GoalsCard from '../GoalsCard'

const GoalsSection = () => {
  return (
    <div>
      <div className='py-10 md:py-15 xl:py-5 flex flex-col md:flex-row flex-wrap gap-10 px-15 items-center md:justify-between md:w-[803px] xl:w-[1210px] mx-auto mt-20'>
            <GoalsCard/>
            <GoalsCard/>
            <GoalsCard/>
            <GoalsCard/>
            <GoalsCard/>
            <GoalsCard/>
      </div>
    </div>
  )
}

export default GoalsSection
