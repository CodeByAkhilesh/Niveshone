import React, { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ToolCard from "../components/ui/ToolCard";
import WhatsappIcon from "../components/ui/WhatsappIcon";
import sipIcon from "../assets/calculator-svgs/sip-return.svg";
import compoundIcon from "../assets/calculator-svgs/compound-intrest.svg";
import lumpsumIcon from "../assets/calculator-svgs/lumpsum.svg";
import goalIcon from "../assets/calculator-svgs/goal-setting.svg";
import retirementIcon from "../assets/calculator-svgs/retirement-fund.svg";
import educationIcon from "../assets/calculator-svgs/education.svg";

const Calculator = () => {
  // Calculator Content Data
  const toolsData = [
    {
      id: 1,
      img: sipIcon,
      alt: "SIP return calculator",
      heading: "SIP Returns",
      para: "Understand how your SIP will generate wealth.",
      link: "https://mweb.assetplus.in/calculators/sip_returns",
    },
    {
      id: 2,
      img: compoundIcon,
      alt: "Compound interest calculator",
      heading: "Compound Interest",
      para: "Calculate compound interest with ease with our CI calculator.",
      link: "https://mweb.assetplus.in/calculators/compound_interest",
    },
    {
      id: 3,
      img: lumpsumIcon,
      alt: "Lumpsum investment calculator",
      heading: "Lumpsum",
      para: "See how your lumpsum investment will grow over time.",
      link: "https://mweb.assetplus.in/calculators/lumpsum",
    },
    {
      id: 4,
      img: goalIcon,
      alt: "Goal setting investment calculator",
      heading: "Goal Setting",
      para: "Calculate investment amount to reach your Financial Goals.",
      link: "https://mweb.assetplus.in/calculators/goal_setting",
    },
    {
      id: 5,
      img: retirementIcon,
      alt: "Retirement fund calculator",
      heading: "Retirement Fund",
      para: "Calculate investment to achieve retirement life.",
      link: "https://mweb.assetplus.in/calculators/retirement_fund",
    },
    {
      id: 6,
      img: educationIcon,
      alt: "Education fund calculator",
      heading: "Education",
      para: "Plan your child's higher education by investing today.",
      link: "https://mweb.assetplus.in/calculators/education",
    },
  ];

  return (
    <>
      {/* Site Header  */}
      <header>
        <Navbar />
      </header>

      {/* Main Content  */}
      <main>
        <section>
          {/* Heading  */}
          <header className="lg:w-205.75 xl:w-302.5 mx-auto pt-10 lg:py-10 md:px-10 xl:px-15">
            <h1 className="text-3xl md:text-4xl mx-8 md:mx-0 lg:text-6xl font-bold text-white md:mb-0  lg:mb-2 mt-20 md:mt-30 tracking-tighter">
              Financial Tools To{" "}
              <span className="bg-linear-to-r from-[#3aab50] to-[#268eff] bg-clip-text text-transparent">
                Plan Your Goals.
              </span>
            </h1>
          </header>

          {/* Calculator Card Wrapper  */}
          <div className="py-10 md:py-15 xl:py-5 flex flex-col md:flex-row flex-wrap gap-y-15 md:px-10 xl:px-15  items-center md:justify-between lg:w-205.75 xl:w-302.5 mx-auto mb-20">
            {toolsData.map((toolData, index) => {
              return <ToolCard key={toolData.id} data={toolData} />;
            })}
          </div>
        </section>
      </main>

      {/* WhatsApp Floating Icon */}
      <WhatsappIcon />

      {/* Site Footer  */}
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Calculator;
