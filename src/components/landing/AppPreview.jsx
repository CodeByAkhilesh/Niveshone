import React from "react";
import Button from "../ui/Button";
import previewImg from "../../assets/mobile-previwe.webp";

const AppPreview = () => {
  return (
    <section className="xl:w-302.5 w-fit mx-auto pt-10">
      {/* Heading  */}
      <header>
        <h2 className="text-white text-center text-2xl md:text-3xl xl:text-5xl tracking-tighter font-semibold mt-5 md:mt-20 px-5">
          We make investing simple, transparent, and hassle-free.
        </h2>
      </header>
      <div className="py-10 flex flex-col md:flex-row">
        {/* App Preview Image  */}
        <figure className="md:w-1/2 lg:w-[50%] flex justify-center">
          <img
            className="h-80 md:h-120 lg:h-145"
            src={previewImg}
            alt="Mobile app interface for 100% digital and paperless mutual fund investment"
            loading="lazy"
            decoding="async"
          />
        </figure>
        <div className="px-5 mt-10 xl:w-[50%] text-white md:flex md:items-center">
          <div className="text-center md:text-left">
            <h3 className="py-2 text-xl font-semibold">All-in-One App</h3>
            <h4 className="py-5 text-4xl font-bold">
              100% Digital. <br />
              Transparent. <br />
              Effortless.
            </h4>
            <p className="py-2 pb-8 md:text-xl text-lg max-w-80 mx-auto ">
              From the first investment to complete financial independence,
              experience guidance and growth with one app.
            </p>
            <Button
              btnName={"FREE Consultation"}
              to={
                "https://flow.assetplus.in/client_onboarding/?advisor=687d1770f49f08bc7d72268b"
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPreview;
