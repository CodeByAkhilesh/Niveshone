import React, { useState } from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Button from '../Button'
import ToolCard from '../ToolCard'

const Calculator = () => {

  const [toolsData, setToolsData] = useState([
      {
        img: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/eSL9Lyo3BED9dy8wd3Pb/media/66f3b701b357f2c831b07d10.svg",
        headding: "SIP Returns",
        pera: "Understand how your SIP will generate wealth.",
      },
      {
        img: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/eSL9Lyo3BED9dy8wd3Pb/media/66f3c1e23a21e2347a699cdf.svg",
        headding: "Compound Interest",
        pera: "Calculate compound interest with ease with our CI calculator.",
      },
      {
        img: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/eSL9Lyo3BED9dy8wd3Pb/media/66f3ba58ebb7b675517168b7.svg",
        headding: "Lumpsum",
        pera: "See how your lumpsum investment will grow over time.",
      },
      {
        img: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/eSL9Lyo3BED9dy8wd3Pb/media/66f3c045b357f2af55b08386.svg",
        headding: "Goal Setting",
        pera: "Calculate investment amount to reach your Financial Goals.",
      },
      {
        img: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/eSL9Lyo3BED9dy8wd3Pb/media/66f3c045b357f2e5d7b08387.svg",
        headding: "Retirement Fund",
        pera: "Calculate investment to achieve retirement life.",
      },
      {
        img: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/eSL9Lyo3BED9dy8wd3Pb/media/66f3c04591f1804fc91ea10d.svg",
        headding: "Education",
        pera: "Plan your child's higher education by investing today.",
      },
    ]);

  return (
    <div className=''>
      <Navbar/>
      <div className='lg:w-205.75 xl:w-302.5 mx-auto pt-10 lg:py-10 md:px-10 xl:px-15'>
        <h1 className="text-3xl md:text-4xl mx-8 lg:mx-0 xl:w-302.5 lg:text-6xl font-bold text-white md:mb-10 lg:mb-2 mt-20 md:mt-30 tracking-tighter">
        Financial Tools To {" "}
        <span className="bg-linear-to-r from-[#3aab50] to-[#268eff] bg-clip-text text-transparent">
          Plan Your Goals.
        </span>
      </h1>
      </div>
      <div className="py-10 md:py-15 xl:py-5 flex flex-col md:flex-row flex-wrap gap-y-15 md:px-10 xl:px-15  items-center md:justify-between lg:w-205.75 xl:w-302.5 mx-auto mb-20">
        {toolsData.map((toolData, index)=>{
          return(
            <ToolCard key={index} data={toolData}/>
          )
        })}
    </div>
      <Footer/>
    </div>
  )
}

export default Calculator
