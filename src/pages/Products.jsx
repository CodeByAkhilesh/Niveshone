import React  from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Button from "../components/ui/Button";
import InfoCard from "../components/ui/InfoCard";
import mutualFundIcon from "../assets/Product-img/mutual-fund.svg";
import nfoIcon from "../assets/Product-img/NFOs.svg";
import sipIcon from "../assets/Product-img/SIP.svg";
import swpIcon from "../assets/Product-img/SWP.svg";
import lamfIcon from "../assets/Product-img/LAMF.svg";
import fdIcon from "../assets/Product-img/FD.svg";

function Products() {
  // Products Content Data
  const productData = [
    {
      id: "mf_icon",
      img: mutualFundIcon,
      alt: "Mutual fund investment solutions provided by Nivesh One Financial Services",
      heading: "Mutual Fund",
      para: "Mutual funds are smart investment options designed to build long-term wealth and achieve financial goals efficiently.",
    },
    {
      id: "nfo_icon",
      img: nfoIcon,
      alt: "New Fund Offer NFO mutual fund investment opportunities by Nivesh One Financial Services",
      heading: "NFO",
      para: "New Fund Offer allows investors to invest early in newly launched mutual fund schemes at initial prices.",
    },
    {
      id: "sip_icon",
      img: sipIcon,
      alt: "Systematic Investment Plan SIP mutual fund option by Nivesh One Financial Services",
      heading: "SIP",
      para: "Systematic Investment Plan allows investors to invest a fixed amount regularly in mutual funds for disciplined wealth growth.",
    },
    {
      id: "swp_icon",
      img: swpIcon,
      alt: "Systematic Withdrawal Plan SWP facility for mutual fund investors at Nivesh One Financial Services",
      heading: "SWP",
      para: "Systematic Withdrawal Plan lets investors withdraw a fixed amount regularly from their mutual fund investments.",
    },
    {
      id: "lamf_icon",
      img: lamfIcon,
      alt: "Loan Against Mutual Fund LAMF facility available through Nivesh One Financial Services",
      heading: "Loan Against MF",
      para: "Investors can avail a loan by pledging their mutual fund units, without redeeming their investments.",
    },
    {
      id: "fd_icon",
      img: fdIcon,
      alt: "Fixed Deposit investment option offered by Nivesh One Financial Services",
      heading: "Fixed Deposits",
      para: "Corporate Fixed Deposits are investment options offering fixed returns over a period, issued by companies.",
    },
  ];

  return (
    <>
      {/* Site Header  */}
      <header>
        <Navbar />
      </header>

      {/*Main Content  */}
      <main>
        <section className="min-h-screen xl:w-302.5 mx-auto">
          {/*Heading  */}
          <header>
            <h1 className="text-3xl md:text-4xl mx-5 md:mx-10 xl:mx-5 lg:mx-25 xl:w-302.5 lg:text-6xl font-bold text-white pt-28 md:pt-35">
              Wealth Building{" "}
              <span className="bg-linear-to-r from-[#3aab50] to-[#268eff] bg-clip-text text-transparent">
                Products.
              </span>
            </h1>
          </header>

          {/* Products Card Wrapper  */}
          <div className="flex flex-col md:flex-row justify-center flex-wrap items-center gap-15 mt-10 md:mt-15 mb-30">
            {productData.map((data) => {
              return <InfoCard key={data.id} InfoData={data} />;
            })}
          </div>

          <article className="flex flex-col items-center mb-20 px-5">
            <h2 className="text-xl md:text-3xl text-[#268eff] font-bold tracking-tight">
              Free Investment Discussion
            </h2>
            <h3 className="text-[34px] md:text-5xl font-bold text-white tracking-tight md:mt-3">
              Start Your Investment
            </h3>

            {/* Buttons Wrapper Div */}
            <div className=" md:flex items-center flex flex-col md:flex-row gap-5 md:gap-8 mt-3 md:mt-6">
              <Button
                btnName={"Create Account"}
                to={
                  "https://flow.assetplus.in/client_onboarding/?advisor=687d1770f49f08bc7d72268b"
                }
              />{" "}
              <Button
                btnName={"Chat On Whatsapp"}
                to={"https://wa.me/917984300929?text=Hi%20Mutual%20Fund"}
              />
            </div>
          </article>
        </section>
      </main>

      {/* Site Footer  */}
      <footer>
      <Footer />
      </footer>
    </>
  );
}

export default Products;
