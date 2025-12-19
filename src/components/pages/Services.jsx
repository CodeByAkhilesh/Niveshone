import React, { useState } from 'react'
import ServiceCard from '../ServiceCard'
import BgLayout from '../BgLayout';
import Slider from '../Slider';

const Services = () => {

const [serviceContent, setServiceContent] = useState([
    {
      servicName:"Fund Selection Support",
      discription:"We assist investors in selection of mutual fund schemes based on their financial goals and risk profile."
    },
    {
      servicName:"Portfolio Management & Reviwe",
      discription:"Regular review support to help investors track their mutual fund investments and make informed decisions."
    },
    {
      servicName:"Goal-Based Investment",
      discription:"Assistance in planning mutual fund investments according to personal financial goals such as education, retirement, or wealth planning."
    },
    {
      servicName:" Tax Saving (ELSS)",
      discription:"Guidance on ELSS mutual funds to help investors understand tax-saving options under Section 80C, as per applicable tax laws."
    },
    {
      servicName:"SIP Investment Services",
      discription:"Support for starting and managing SIP investments based on the investor’s goals, budget, and time horizon."
    },
    {
      servicName:"Online & Paperless Services",
      discription:"We help investors complete the mutual fund process online in a simple and paperless way for added convenience."
    },
  ]);

  return (
    <div className='pb-4 h-auto'>
    <div className='w-[310px] xl:w-[1210px] md:w-[703px] mx-auto text-3xl md:text-6xl font-bold tracking-tight mt-15 md:mt-25'>
      {/* <h1 className='text-white'>Committed to helping you achieve <br /> <span className='bg-linear-to-r from-[#3aab50] to-[#268eff] bg-clip-text text-transparent'> Financial Freedom</span></h1> */}
      <h1 className='text-white mb-10 px-5 text-3xl md:text-5xl lg:text-6xl'>How We Support <span className='bg-linear-to-r from-[#3aab50] to-[#268eff] bg-clip-text text-transparent'> Your Investments </span></h1>
      <div className='py-5 md:py-15 flex flex-col md:flex-row md:flex md:flex-wrap gap-15 md:gap-20 md:px-5 xl:px-20 md xl:justify-between items-center '>
       {serviceContent.map((content, index)=>{
        return(
        <div key={index}>
        <ServiceCard serviceName={content.servicName} discription={content.discription} />
        </div>
       )})}
      </div>
    </div>
    <div className='flex flex-col relative h-48 w-[90vw] md:w-[703px] lg:w-[958px] xl:w-[1210px] mx-auto mt-20 md:mt-20'>
      <BgLayout content={"Committed To Helping You Achieve Financial Freedom"}/>
    </div>
    </div>
  )
}

export default Services
