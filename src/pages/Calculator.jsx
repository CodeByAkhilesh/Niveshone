import React, { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ToolCard from "../components/ui/ToolCard";
import SectionTitle from "../components/ui/SectionTitle";
import { calculatorToolsData } from "../data/calculatorsToolData";
import { Helmet } from "react-helmet-async";

const Calculator = () => {
  return (
    <>
      <Helmet>
        <title>Investment Calculator | Nivesh One Financial Services</title>
        <meta
          name="description"
          content="Use our investment calculator to estimate your SIP returns and plan your financial future effectively."
        />
        <meta
          name="keywords"
          content="SIP Calculator, Investment Calculator, Mutual Fund Calculator, Lumpsum Calculator"
        />
      </Helmet>

      {/* Site Header  */}
      <header>
        <Navbar />
      </header>

      {/* Main Content  */}
      <main>
        <section className="min-h-screen lg:w-205.75 xl:w-302.5 mx-auto">
          {/* Heading  */}
          <header className="pt-30 md:pt-40 px-3 md:px-8">
            <SectionTitle
              title={"Financial Tools To"}
              gradientTitle={"Plan Your Goals."}
            />
          </header>

          {/* Calculator Card Wrapper  */}
          <div className="pt-4 md:py-10 lg:py-0 flex flex-col md:flex-row flex-wrap gap-y-15 md:px-10 xl:px-15  items-center md:justify-between mb-20">
            {calculatorToolsData.map((toolData, index) => {
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
