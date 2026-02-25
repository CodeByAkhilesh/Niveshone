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
        <section className="lg:w-205.75 xl:w-302.5 mx-auto px-4">
          {/* page main heading */}
          <header className="pt-30 md:pt-40 md:px-10 lg:px-0">
            <SectionTitle title={"Get in Touch"} gradientTitle={"With Us."} />
          </header>
          <figure className="w-full md:w-140 lg:w-full text-white rounded-2xl md:overflow-hidden flex flex-col lg:flex-row items-center justify-between mb-20 xl:mb-0 mx-auto border border-[#268eff] shadow-xl shadow-blue-400">
            {/* Contect Us Visual Image  */}
            <img
              src={contectUsImg}
              alt="User contacting financial advisor through mobile for mutual fund consultation"
              loading="lazy"
              decoding="async"
            />
            {/* Contect Us Content  */}
            <article className="left-content flex flex-col md:justify-center lg:w-1/2 mx-10 md:mx-20 lg:mx-10 my-10 ">
              <h3 className="font-bold text-3xl text-[#268eff]">Contact Us</h3>
              <p className="xl:w-110">
                To get in touch, please use the details or references provided
                below. I will respond as soon as possible.
              </p>
              <h4 className="text-xl md:text-2xl font-bold pt-4 flex gap-4">
                <span>
                  <RiPhoneFill /> {/* Phone Icon  */}
                </span>
                +91-7232933333
              </h4>
              <h4 className="text-xl md:text-2xl font-bold pt-4 flex items-center gap-4">
                <span>
                  <RiMailFill /> {/* Mail Icon  */}
                </span>
                Niveshonefs@gmail.com
              </h4>
              <div className="pt-5 mx-auto lg:mx-0">
                <Button
                  btnName={"Chat on whatsapp"}
                  to={"https://wa.me/917984300929?text=Hi%20Mutual%20Fund"}
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
