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
    <div className='w-[1210px] mx-auto text-6xl font-bold tracking-tight mt-25'>
      {/* <h1 className='text-white'>Committed to helping you achieve <br /> <span className='bg-linear-to-r from-[#3aab50] to-[#268eff] bg-clip-text text-transparent'> Financial Freedom</span></h1> */}
      <h1 className='text-white mb-10'>How We Support <span className='bg-linear-to-r from-[#3aab50] to-[#268eff] bg-clip-text text-transparent'> Your Investments </span></h1>
      <div className='py-15 flex flex-wrap gap-20 px-15 justify-between '>
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
