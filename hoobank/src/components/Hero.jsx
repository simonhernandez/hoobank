import React from "react";

import styles from "../style";
import { discount, robot } from "../assets";

import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-[60%] ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-8 h-8" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount For{" "}
            <span className="text-white">1 Month</span> Account
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full relative">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
            The Next <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Generation</span> <br /> Payment
            Method.
          </h1>

          <div className="ss:flex hidden md:mr-4 mr-0 absolute top-0 right-16">
            <GetStarted />
          </div>
        </div>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.</p>
      </div>

      <div className="relative max-w-[669px] flex-[50%]">
        <img src={robot} alt="billing"  className="w-[100%] h-[100%] relative z-[5] ml-auto"/>
        <div className="absolute z-0 w-2/5 h-[35%] top-0 pink__gradient"></div>
        <div className="absolute z-[1] w-4/5 h-4/5 rounded-full bottom-40"></div>
        <div className="absolute z-0 w-1/2 h-1/2 right-20 bottom-20 blue__gradient"></div>
      </div>
    </section>
  );
};

export default Hero;
