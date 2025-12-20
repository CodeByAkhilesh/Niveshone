import React from 'react'
import Button from '../Button'

const AppPreviwe = () => {
  return (
    <div className='w-[1210px] mx-auto pt-10'>
      <h1 className='text-white text-center text-3xl md:text-5xl tracking-tighter font-semibold mt-20 px-5'>We make investing simple, transparent, and hassle-free.</h1>
      <div className='py-10 flex'>
        <div className='left-content w-[50%] flex justify-center'>
        <img className='h-[580px]' src="src\assets\mobile-previwe.webp" alt="" />
        </div>
        <div className='right-content bg-black w-[50%] text-white flex items-center'>
            <div>
            <h3 className='py-2 text-xl font-semibold'>All-in-One App</h3>
            <h1 className='py-5 text-4xl font-bold'>100% Digital. <br />Transparent. <br />Effortless.</h1>
            <p className='py-2 pb-8 text-xl'>From the first investment to complete financial independence, experience guidance and growth with one app.</p>
            <Button btnName={"FREE Consultation"}/>
</div>
        </div>
      </div>
    </div>
  )
}

export default AppPreviwe
