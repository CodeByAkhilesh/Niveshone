import React from 'react'
import Slider from './Slider'

const BgLayout = ({section}) => {
  return (
    <div className='text-6xl text-white h-full w-full'>
      <div className="bg-linear-to-r from-[#3aab50] to-[#268eff] h-full w-full rounded-2xl relative z-10 text-black tracking-tighter text-5xl flex items-center justify-center font-black">
    {section}
      </div>
      <div className="h-full w-full border border-[#268eff] rounded-2xl top-0 -rotate-2 absolute"></div>
    </div>
  )
}

export default BgLayout
