import React, { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ToolCard from "../components/ui/ToolCard";
import sipIcon from "../assets/calculator-svgs/sip-return.svg";
import compoundIcon from "../assets/calculator-svgs/compound-intrest.svg";
import lumpsumIcon from "../assets/calculator-svgs/lumpsum.svg";
import goalIcon from "../assets/calculator-svgs/goal-setting.svg";
import retirementIcon from "../assets/calculator-svgs/retirement-fund.svg";
import educationIcon from "../assets/calculator-svgs/education.svg";
import SectionTitle from "../components/ui/SectionTitle";

const Calculator = () => {
  // Calculator Content Data
  const toolsData = [
    {
      id: "sip_calculator",
      img: sipIcon,
      alt: "SIP return calculator",
      heading: "SIP Returns",
      para: "Understand how your SIP will generate wealth.",
      link: "https://mweb.assetplus.in/calculators/sip_returns",
    },
    {
      id: "compound_interest_calculator",
      img: compoundIcon,
      alt: "Compound interest calculator",
      heading: "Compound Interest",
      para: "Calculate compound interest with ease with our CI calculator.",
      link: "https://mweb.assetplus.in/calculators/compound_interest",
    },
    {
      id: "lumpsum_calculator",
      img: lumpsumIcon,
      alt: "Lumpsum investment calculator",
      heading: "Lumpsum",
      para: "See how your lumpsum investment will grow over time.",
      link: "https://mweb.assetplus.in/calculators/lumpsum",
    },
    {
      id: "goal_calculator",
      img: goalIcon,
      alt: "Goal setting investment calculator",
      heading: "Goal Setting",
      para: "Calculate investment amount to reach your Financial Goals.",
      link: "https://mweb.assetplus.in/calculators/goal_setting",
    },
    {
      id: "retirement_calculator",
      img: retirementIcon,
      alt: "Retirement fund calculator",
      heading: "Retirement Fund",
      para: "Calculate investment to achieve retirement life.",
      link: "https://mweb.assetplus.in/calculators/retirement_fund",
    },
    {
      id: "education_calculator",
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
        <section className="lg:w-205.75 xl:w-302.5 mx-auto">
          {/* Heading  */}
          <header className="pt-30 md:pt-40 px-3 md:px-8">
            <SectionTitle title={"Financial Tools To"} gradientTitle={"Plan Your Goals."} />
          </header>

          {/* Calculator Card Wrapper  */}
          <div className="pt-4 md:py-10 lg:py-0 flex flex-col md:flex-row flex-wrap gap-y-15 md:px-10 xl:px-15  items-center md:justify-between mb-20">
            {toolsData.map((toolData, index) => {
              return <ToolCard key={toolData.id} data={toolData} />;
            })}
          </div>
        </section>
      </main>

      {/* Site Footer  */}
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Calculator;
