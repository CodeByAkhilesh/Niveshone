import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const AboutUs = () => {
  return (
    <div className="">
      <Navbar />
      <div className="min-h-screen w-full md:pt-35 md:pb-25 md:w-302.5 mx-auto md:px-10 flex flex-col md:flex-row md:justify-between">
        <div className="left-content h-140 w-80 relative md:shrink-0 mx-auto mt-30 md:mt-0">
          <div className="h-full w-full bg-linear-to-r from-[#3aab50] to-[#268eff] rounded-2xl -rotate-3"></div>
          <div className="h-full w-full border border-[#268eff] top-0 left-0 absolute rounded-2xl overflow-hidden">
            <img
              className="h-full w-full object-cover"
              src="\src\assets\founder-img.png"
              alt=""
            />
          </div>
        </div>
        <div className="right-content px-10 h-140 md:w-190 shrink-0 text-white flex items-center">
          <div className="md:pl-10 w-full">
            <h3 className="text-4xl hidden w-full font-bold text-whitentracking-tighter pb-10">
              Meet{" "}
              <span className="bg-linear-to-r from-[#3aab50] to-[#268eff] bg-clip-text text-transparent">
                The Founder
              </span>
            </h3>
            <h1 className="md:text-6xl font-bold leading-8">
              Akhilesh R Yadav <br />{" "}
              <span className="md:text-2xl font-bold text-[#3aab50]">
                250,000+ Youtube | 150,000+ Instagram
              </span>
            </h1>
            <p className="md:text-2xl leading-tight pt-5">
              As an entrepreneur and content creator, Ayushman has a passion for
              creating exceptional content that resonates with audiences. His
              journey began in February 2021 when he started making finance
              videos on YouTube for India's youth. After his success on Youtube,
              he launched his Instagram account in August 2022 and scaled to 1
              lakh followers in less than 4 months.
            </p>
            <p className="md:text-2xl leading-tight pt-6">
              Ayushman completed his BTech in Computer Science from IIITD in
              2020. He previously worked as a Software Engineer at HSBC and as a
              Product Manager at BharatPe.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
