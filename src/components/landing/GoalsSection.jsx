import InfoCard from "../ui/InfoCard";
import Button from "../ui/Button";
import GradientBackground from "../ui/GradientBackground";
import { goalsData } from "../../data/goalsSectionData";

const GoalsSection = () => {
  return (
    <section id="financial-goals">
      {/* Section Heading  */}
      <header>
        <h2 className="text-white text-center text-3xl md:text-5xl tracking-tighter font-semibold mt-20 mb-10 px-5">
          Every Goal Needs a First Step in the Right Direction
        </h2>
      </header>

      {/* Goals Card Wrapper  */}
      <ul className="py-10 md:py-15 xl:py-5 flex flex-col md:flex-row flex-wrap gap-y-15 md:px-10 xl:px-15  items-center md:justify-between lg:w-205.75 xl:w-302.5 mx-auto">
        {goalsData.map((data) => {
          return (
            <li key={data.id}>
              <InfoCard cardData={data} />
            </li>
          );
        })}
      </ul>

      <div className="text-center mt-15">
        <Button
          btnName={"START A SIP"}
          to={
            "https://flow.assetplus.in/client_onboarding/?advisor=687d1770f49f08bc7d72268b"
          }
        />
      </div>
      <div className="flex flex-col relative h-48 w-[90vw] md:w-175.75 lg:w-239.5 xl:w-302.5 mx-auto mt-20 md:mt-20 text-2xl md:text-5xl">
        <GradientBackground
          content={"Committed To Helping You Achieve Financial Freedom"}
        />
      </div>
    </section>
  );
};

export default GoalsSection;
