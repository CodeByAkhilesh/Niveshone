import React, { useState } from 'react'
import ServiceCard from '../ServiceCard'

const Services = () => {

const [serviceContent, setServiceContent] = useState([
    {
      servicName:"Fund Selection Support",
      discription:"We assist investors in selection of mutual fund schemes based on their financial goals and risk profile."
    },
    {
      servicName:"Portfolio Management & Reviwe",
      discription:"We assist investors in selection of mutual fund schemes based on their financial goals and risk profile."
    },
    {
      servicName:"Goal-Based Investment",
      discription:"We assist investors in selection of mutual fund schemes based on their financial goals and risk profile."
    },
    {
      servicName:"Goal-Based Investment",
      discription:"We assist investors in selection of mutual fund schemes based on their financial goals and risk profile."
    },
    {
      servicName:"Goal-Based Investment",
      discription:"We assist investors in selection of mutual fund schemes based on their financial goals and risk profile."
    },
    {
      servicName:"Goal-Based Investment",
      discription:"We assist investors in selection of mutual fund schemes based on their financial goals and risk profile."
    },
  ]);

  return (
    <div className=''>
    <div className='w-[1210px] mx-auto text-6xl font-bold tracking-tight mt-20'>
      <h1 className='text-white'>Committed to helping you achieve <br /> <span className='bg-linear-to-r from-[#3aab50] to-[#268eff] bg-clip-text text-transparent'> Financial Freedom</span></h1>
      <h2 className='text-white text-5xl font-medium mt-10 text-center'>How We Support Your Investments</h2>
      <div className='py-15 flex flex-wrap gap-20 justify-center '>
       {serviceContent.map((content, index)=>{
        return(
        <div key={index}>
        <ServiceCard serviceName={content.servicName} discription={content.discription} />
        </div>
       )})}
      </div>
    </div>
    </div>
  )
}

export default Services
