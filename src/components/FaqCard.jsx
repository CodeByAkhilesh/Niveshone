import React from 'react'

const FaqCard = ({faqs, i, handleClick, activeIndex}) => {
  return (
        <div onClick={()=>handleClick(i)} className='w-[49%] h-fit overflow-hidden border border-[#268eef] rounded-lg shadow-[#73a3d2] shadow-md px-5 py-4 transition-all duration-500 ease-in-out'>
             <h1 className='text-white text-[30px] font-semibold flex items-center'>{faqs.question}</h1>
            {activeIndex == i &&( <p className='text-white mt-5'>{faqs.answer}</p>)}
        </div>
  )
}

export default FaqCard
