import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Button from "../components/ui/Button";
import InfoCard from "../components/ui/InfoCard";
import SectionTitle from "../components/ui/SectionTitle";
import { productsData } from "../data/productsData";
import { Helmet } from "react-helmet-async";

function Products() {
  return (
    <>
      <Helmet>
        <title>Investment Products | Nivesh One Financial Services</title>
        <meta
          name="description"
          content="Explore our range of investment products including mutual funds, SIP plans, and long-term wealth creation solutions."
        />
        <meta
          name="keywords"
          content="Investment Products, SIP Plans, Mutual Fund Products, Financial Services"
        />
      </Helmet>

      {/* Site Header  */}
      <header>
        <Navbar />
      </header>

      {/*Main Content  */}
      <main>
        <section className="min-h-screen lg:w-205.75 xl:w-302.5 mx-auto">
          {/*Heading  */}
          <header className="pt-30 md:pt-40 px-3 md:px-8">
            <SectionTitle
              title={"Wealth Building"}
              gradientTitle={"Products."}
            />
          </header>

          {/* Products Card Wrapper  */}
          <div className="flex flex-col md:flex-row justify-center flex-wrap items-center gap-15 mt-10 md:mt-15 mb-30">
            {productsData.map((data) => {
              return <InfoCard key={data.id} cardData={data} />;
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
                target={"_blank"}
              />{" "}
              <Button
                btnName={"Chat On Whatsapp"}
                to={"https://wa.me/917984300926?text=Hi%20Nivesh%20One"}
                target={"_blank"}
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
