import React, { useState } from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import GoalsCard from '../GoalsCard'
import Button from '../Button';
import WhatsappIcon from '../WhatsappIcon';

function Products() {

   const [goalsData, setGoalsData] = useState([
      {
        img: "src/assets/Product-img/mutual-fund.png",
        headding: "Mutual Fund",
        pera: "Mutual funds are smart investment options designed to build long-term wealth and achieve financial goals efficiently.",
      },
      {
        img: "src/assets/Product-img/NFOs.png",
        headding: "NFO",
        pera: "New Fund Offer allows investors to invest early in newly launched mutual fund schemes at initial prices.",
      },
      {
        img: "src/assets/Product-img/SIP.png",
        headding: "SIP",
        pera: "Systematic Investment Plan allows investors to invest a fixed amount regularly in mutual funds for disciplined wealth growth.",
      },
      {
        img: "src/assets/Product-img/SWP.png",
        headding: "SWP",
        pera: "Systematic Withdrawal Plan lets investors withdraw a fixed amount regularly from their mutual fund investments.",
      },
      {
        img: "src/assets/Product-img/LAMF.png",
        headding: "Loan Against MF",
        pera: "Investors can avail a loan by pledging their mutual fund units, without redeeming their investments.",
      },
      {
        img: "src/assets/Product-img/FD.png",
        headding: "Fixed Deposits",
        pera: "Corporate Fixed Deposits are investment options offering fixed returns over a period, issued by companies.",
      },
    ]);

  return (
    <div className='overflow-'>
     <Navbar/>
     <div className='min-h-screen xl:w-302.5 mx-auto'>
      <h1 className="text-3xl md:text-4xl mx-5 md:mx-10 xl:mx-5 lg:mx-25 xl:w-302.5 lg:text-6xl font-bold text-white pt-28 md:pt-35">
          Wealth Building {" "}
          <span className="bg-linear-to-r from-[#3aab50] to-[#268eff] bg-clip-text text-transparent">
            Products.
          </span>
        </h1>
        <div className='flex flex-col md:flex-row justify-center flex-wrap items-center gap-15 mt-10 md:mt-15 mb-30'>
          {goalsData.map((data, index) => {
          return <GoalsCard key={index} goalsData={data}  />;
        })}
        </div>
        <div className='flex flex-col items-center mb-20 px-5'>
          <h1 className='text-xl md:text-3xl text-[#268eff] font-bold tracking-tight'>Free Investment Discussion</h1>
          <h1 className='text-[34px] md:text-5xl font-bold text-white tracking-tight md:mt-3'>Start Your Investment</h1>
          <div className=' md:flex items-center flex flex-col md:flex-row gap-5 md:gap-8 mt-3 md:mt-6'>
            <Button btnName={"Create Account"} to={"https://flow.assetplus.in/client_onboarding/?advisor=687d1770f49f08bc7d72268b"}/> <Button  btnName={"Chat On Whatsapp"} to={"https://wa.me/917984300929?text=Hi%20Mutual%20Fund"}/>
          </div>
        </div>

     </div>
     {/* WhatsApp Floating Icon */}
      <WhatsappIcon/>
     <Footer/>
    </div>
  )
}

export default Products
