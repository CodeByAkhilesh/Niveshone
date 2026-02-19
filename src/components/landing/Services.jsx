import React from "react";
import ServiceCard from "../ui/ServiceCard";
import GradientBackground from "../ui/GradientBackground";
import SectionTitle from "../ui/SectionTitle";
import {ourServices} from "../../data/ourServices"

const Services = () => {
  return (
    <section className="flex-col flex items-center justify-center my-auto  md:mt-20 mt-10">

      {/* Heading  */}
      <header className="mx-5 xl:w-302.5 md:w-175.75 lg:w-240">
          <SectionTitle title={"How We Support"} gradientTitle={"Your Investments"} />
        </header>
      <div className="xl:w-302.5 md:w-175.75 mx-auto text-3xl md:text-6xl font-bold tracking-tight">
        <div className="py-5 md:py-0 flex flex-col md:flex-row md:flex md:flex-wrap gap-15 md:gap-20 md:px-5 xl:px-20 md xl:justify-between items-center ">
          {ourServices.map((content) => {
            return (
              <div key={content.id}>
                <ServiceCard
                  serviceName={content.servicName}
                  discription={content.discription}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col relative h-48 w-[90vw] md:w-175.75 lg:w-239.5 xl:w-302.5 text-2xl md:text-5xl mx-auto mt-20 md:mt-20">
        <GradientBackground
          content={"Start SIP with Proper Mutual Fund Planning Support"}
        />
      </div>
    </section>
  );
};

export default Services;
