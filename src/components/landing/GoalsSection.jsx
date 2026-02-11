import InfoCard from "../ui/InfoCard";
import Button from "../ui/Button";
import GradientBackground from "../ui/GradientBackground";
import houseIcon from "../../assets/goals_img/house_icon.webp";
import dreamCarIcon from "../../assets/goals_img/dream_car_icon.webp";
import vacation_icon from "../../assets/goals_img/vacation_icon.webp";
import kidsEducationIcon from "../../assets/goals_img/kids_education.webp";
import retirementIcon from "../../assets/goals_img/retirement_icon.webp";
import childrensWeddingIcon from "../../assets/goals_img/childrens_wedding_icon.webp";

const GoalsSection = () => {
  const goalsData = [
    {
      id: "own_house",
      img: houseIcon,
      alt: "Own house goal planning through mutual fund investments",
      heading: "Own House",
      para: "Have a dream of owning your own house? Achieve that goal fast with the right financial plan.",
    },
    {
      id: "dream_car",
      img: dreamCarIcon,
      alt: "Investment planning for buying a dream car through goal-based mutual fund investing",
      heading: "Dream Car",
      para: "Desiring to get your dream car? Invest in the right places to get your dream car sooner.",
    },
    {
      id: "vacation",
      img: vacation_icon,
      alt: "Vacation goal planning through disciplined mutual fund investments",
      heading: "Vacation",
      para: "Vacation doesn't have to be just a dream. Enjoy your vacation without breaking your savings.",
    },
    {
      id: "kids_education",
      img: kidsEducationIcon,
      alt: "Children’s education goal planning through mutual fund investments",
      heading: "Kids' Education",
      para: "We all want the best for our children. Finances shouldn't stop them from pursuing their career.",
    },
    {
      id: "retirement",
      img: retirementIcon,
      alt: "Retirement planning through long-term mutual fund investments",
      heading: "Happy Retirement",
      para: "Getting close to retirement age? Plan your finances accordingly to retire early and happily.",
    },
    {
      id: "childrens_wedding",
      img: childrensWeddingIcon,
      alt: "Children’s wedding financial planning through long-term investments",
      heading: "Children's Wedding",
      para: "With the right financial plan, you don't have to sacrifice on the budget for your kids' wedding.",
    },
  ];

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
