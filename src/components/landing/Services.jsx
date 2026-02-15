import React from "react";
import ServiceCard from "../ui/ServiceCard";
import GradientBackground from "../ui/GradientBackground";
import SectionTitle from "../ui/SectionTitle";

const Services = () => {
  const serviceContent = [
    {
      id: "fund-selection",
      servicName: "Fund Selection Support",
      discription:
        "We assist investors in selection of mutual fund schemes based on their financial goals and risk profile.",
    },
    {
      id: "portfolio-management",
      servicName: "Portfolio Management & Reviwe",
      discription:
        "Regular review support to help investors track their mutual fund investments and make informed decisions.",
    },
    {
      id: "goal-based-investment",
      servicName: "Goal-Based Investment",
      discription:
        "Assistance in planning mutual fund investments according to personal financial goals such as education, retirement, or wealth planning.",
    },
    {
      id: "tex-saving",
      servicName: " Tax Saving (ELSS)",
      discription:
        "Guidance on ELSS mutual funds to help investors understand tax-saving options under Section 80C, as per applicable tax laws.",
    },
    {
      id: "sip-investment",
      servicName: "SIP Investment Services",
      discription:
        "Support for starting and managing SIP investments based on the investor’s goals, budget, and time horizon.",
    },
    {
      id: "online-services",
      servicName: "Online & Paperless Services",
      discription:
        "We help investors complete the mutual fund process online in a simple and paperless way for added convenience.",
    },
  ];

  return (
    <section className="flex-col flex items-center justify-center my-auto  md:mt-20 mt-10">

      {/* Heading  */}
      <header className="mx-5 xl:w-302.5 md:w-175.75 lg:w-240">
          <SectionTitle title={"How We Support"} gradientTitle={"Your Investments"} />
        </header>
      <div className="xl:w-302.5 md:w-175.75 mx-auto text-3xl md:text-6xl font-bold tracking-tight">
        <div className="py-5 md:py-15 flex flex-col md:flex-row md:flex md:flex-wrap gap-15 md:gap-20 md:px-5 xl:px-20 md xl:justify-between items-center ">
          {serviceContent.map((content) => {
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
