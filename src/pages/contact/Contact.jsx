import React from "react";
import Button from "../../components/ui/Button";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { RiMailFill, RiPhoneFill } from "@remixicon/react";
import ContactForm from "./ContactForm";
import contectUsImg from "../../assets/contect_us.webp";
import SectionTitle from "../../components/ui/SectionTitle";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | Nivesh One Financial Services</title>
        <meta
          name="description"
          content="Get in touch with Nivesh One Financial Services for mutual fund investments and financial planning support."
        />
        <meta
          name="keywords"
          content="Contact Financial Advisor, Mutual Fund Consultation"
        />
      </Helmet>

      {/* Site header  */}
      <header>
        <Navbar />
      </header>

      {/* Site Main Content  */}
      <main>
        <section className="min-h-screen lg:w-205.75 xl:w-302.5 mx-auto px-4">
          {/* page main heading */}
          <header className="pt-30 md:pt-40 md:px-10 lg:px-0">
            <SectionTitle title={"Get in Touch"} gradientTitle={"With Us."} />
          </header>
          <figure className="w-full  md:w-140 lg:w-full h-181.75 md:h-250 lg:h-117.75 text-white rounded-2xl md:overflow-hidden flex flex-col lg:flex-row items-center justify-center mb-20 xl:mb-0 mx-auto border border-[#268eff] shadow-xl shadow-blue-400">
            {/* Contect Us Visual Image  */}
            <img
              src={contectUsImg}
              alt="User contacting financial advisor through mobile for mutual fund consultation"
              loading="lazy"
              decoding="async"
              className=" w-full h-full md:h-160 lg:h-full object-cover lg:w-80 xl:w-100"
            />
            {/* Contect Us Content  */}
            <article className="left-content flex flex-col w-full text-wrap md:justify-center lg:w-120 px-5 md:mx-20 lg:mx-0 my-10 h-full">
              <h3 className="font-bold text-3xl text-[#268eff]">Contact Us</h3>
              <p className="xl:w-110">
                To get in touch, please use the details or references provided
                below. I will respond as soon as possible.
              </p>
              <h4 className="md:text-2xl font-bold pt-4 flex gap-2">
                <span>
                  <RiPhoneFill /> {/* Phone Icon  */}
                </span>
                +91-7984300926
              </h4>
              <h4 className="md:text-2xl font-bold pt-4 flex items-center gap-2">
                <span>
                  <RiMailFill /> {/* Mail Icon  */}
                </span>
                yadavakhileshramnath@gmail.com
              </h4>
              <div className="pt-5 mx-auto lg:mx-0">
                <Button
                  btnName={"Chat on whatsapp"}
                  to={"https://wa.me/917984300926?text=Hi%20Nivesh%20One"}
                  target={"_blank"}
                />
              </div>
            </article>
          </figure>

          {/* Contect Form  */}
          <ContactForm />
        </section>
      </main>

      {/* Site Footer  */}
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Contact;
