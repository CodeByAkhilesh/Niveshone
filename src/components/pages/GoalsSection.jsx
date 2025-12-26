import GoalsCard from "../GoalsCard";
import Button from "../Button";
import BgLayout from "../BgLayout";
import { useState } from "react";

const GoalsSection = () => {
  const [goalsData, setGoalsData] = useState([
    {
      img: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_900/u_https://assets.cdn.filesafe.space/eSL9Lyo3BED9dy8wd3Pb/media/31bfa3fa-ac70-4297-8bc4-c563bf6771c7.png",
      headding: "Own House",
      pera: "Have a dream of owning your own house? Achieve that goal fast with the right financial plan.",
    },
    {
      img: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/eSL9Lyo3BED9dy8wd3Pb/media/bc53ae9a-2e80-4062-8d32-f8333bf9f391.png",
      headding: "Dream Car",
      pera: "Desiring to get your dream car? Invest in the right places to get your dream car sooner.",
    },
    {
      img: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/eSL9Lyo3BED9dy8wd3Pb/media/b50a54f9-647d-40c0-9e90-85d46d1c2787.png",
      headding: "Vacation",
      pera: "Vacation doesn't have to be just a dream. Enjoy your vacation without breaking your savings.",
    },
    {
      img: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/eSL9Lyo3BED9dy8wd3Pb/media/7181b4b5-7927-41e2-865f-c8acde09f7f3.png",
      headding: "Kids' Education",
      pera: "We all want the best for our Kids. Finances shouldn't stop them from pursuing their career.",
    },
    {
      img: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/eSL9Lyo3BED9dy8wd3Pb/media/e19f04f6-d6bf-4809-bd0d-f240f152f7cc.png",
      headding: "Happy Retirement",
      pera: "Getting close to retirement age? Plan your finances accordingly to retire early and happily.",
    },
    {
      img: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/eSL9Lyo3BED9dy8wd3Pb/media/afbc5965-c1ce-4c1b-bfb1-c440ef1ada4b.png",
      headding: "Childrens' Wedding",
      pera: "With the right financial plan, you don't have to sacrifice on the budget for your kids' wedding.",
    },
  ]);

  return (
    <div className="">
      <h1 className="text-white text-center text-3xl md:text-5xl tracking-tighter font-semibold mt-20 mb-10 px-5">
        Every Goal needs a first step in the Right Direction!
      </h1>

      <div className="py-10 md:py-15 xl:py-5 flex flex-col md:flex-row flex-wrap gap-y-15 md:px-10 xl:px-15  items-center md:justify-between lg:w-205.75 xl:w-302.5 mx-auto">
        {goalsData.map((data, index) => {
          return <GoalsCard key={index} goalsData={data} />;
        })}
      </div>
      <div className="mx-auto flex items-center justify-center mt-15 w-">
        <Button btnName={"START A SIP"} />
      </div>
      <div className="flex flex-col relative h-48 w-[90vw] md:w-175.75 lg:w-239.5 xl:w-302.5 mx-auto mt-20 md:mt-20">
        <BgLayout
          content={"Committed To Helping You Achieve Financial Freedom"}
        />
      </div>
    </div>
  );
};

export default GoalsSection;
