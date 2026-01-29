import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer" ;
import WhatsappIcon from "../components/ui/WhatsappIcon";
import founderImg from "../assets/founder-img.webp"

const AboutUs = () => {
  return (
    <div className="">
      <Navbar />
      <div className="min-h-screen w-full md:pt-35 md:pb-25 xl:w-302.5 mx-auto lg:px-10 flex flex-col lg:flex-row md:justify-between">
        <h3 className="text-3xl w-full font-bold text-whitentracking-tighter mt-30 md:pb-10 md:mt-0 text-white px-5 md:w-165 mx-auto lg:hidden">
          Meet{" "}
          <span className="bg-linear-to-r from-[#3aab50] to-[#268eff] bg-clip-text text-transparent">
            The Founder
          </span>
        </h3>
        <div className="left-content h-140 w-80 relative md:shrink-0 mx-auto mt-10 md:mt-0">
          <div className="h-full w-full bg-linear-to-r from-[#3aab50] to-[#268eff] rounded-2xl -rotate-3"></div>
          <div className="h-full w-full border border-[#268eff] top-0 left-0 absolute rounded-2xl overflow-hidden">
            <img
              className="h-full w-full object-cover"
              src={founderImg}
              loading="lazy"
              alt="Founder of Nivesh One Financial Services – trusted mutual fund advisor"
            />
          </div>
        </div>
        <div className="right-content px-10 h-140 md:w-190 lg:w-165 shrink-0 text-white flex items-center mx-auto">
          <div className="md:pl-10 w-full">
            <h3 className="text-4xl hidden lg:block w-full font-bold text-whitentracking-tighter pb-7">
              Meet{" "}
              <span className="bg-linear-to-r from-[#3aab50] to-[#268eff] bg-clip-text text-transparent">
                The Founder
              </span>
            </h3>
            <h1 className="text-4xl md:text-6xl font-bold leading-6 md:leading-8">
              Akhilesh R Yadav <br />{" "}
              <span className="text-[16px] tracking-tighter md:text-2xl font-medium text-[#3aab50]">
                AMFI Registered | NISM Certified | ARN-333858
              </span>
            </h1>
            <p className="md:text-[22px] leading-tight pt-5">
              <b> Nivesh One Finance Services </b> is a client-centric financial
              services brand committed to helping individuals achieve their
              financial goals through disciplined and goal-based mutual fund
              investing. We believe that successful investing is built on
              consistency, proper asset allocation, and a clear long-term
              approach rather than short-term market movements.
            </p>
            <p className="md:text-[22px] leading-tight pt-6">
              Our focus is on understanding each client’s financial needs, risk
              profile, and investment horizon to provide suitable mutual fund
              solutions. With an emphasis on transparency, simplicity, and
              ethical practices, we aim to build long-term relationships and
              support investors in their wealth creation journey.
            </p>
          </div>
        </div>
      </div>
      {/* WhatsApp Floating Icon */}
      <WhatsappIcon />
      <Footer />
    </div>
  );
};

export default AboutUs;
