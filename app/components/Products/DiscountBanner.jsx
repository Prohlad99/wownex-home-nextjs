"use client";
import { motion } from "framer-motion";

const DiscountBanner = () => {
  const cardContent1 = {
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
    hidden: { y: 100, opacity: 0 },
  };
  const cardContent2 = {
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
    hidden: { y: 100, opacity: 1 },
  };
  return (
    <div className="grid grid-cols-12 gap-4  h-auto mt-6 mx-2 md:mx-10">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={cardContent2}
        className="col-span-12 md:col-span-6 h-[240px] relative cursor-pointer overflow-hidden rounded-[15px]"
      >
        <img
          className="hover:scale-125 w-full h-full transition-all ease-in-out delay-100"
          src="/assets/products/kitchen.png"
          alt=""
        />
        <div className="w-[247px] h-[132px] absolute top-5 left-4 md:top-4 md:left-4">
          <h1 className="font-bold md:text-[36px] text-2xl sm:text-3xl text-[#FF4747]">
            40% Discount
          </h1>
          <p className="font-bold md:text-[36px] text-2xl sm:text-3xl">
            on Kitchen items
          </p>
          <p className="text-[#666666] font-bold md:text-[36px] text-2xl sm:text-3xl">
            SHOP NOW
          </p>
        </div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={cardContent1}
        className="col-span-12 md:col-span-6 h-[240px] relative cursor-pointer overflow-hidden rounded-[15px]"
      >
        <img
          className="hover:scale-125 w-full h-full transition-all ease-in-out delay-100"
          src="/assets/products/trimmer.png"
          alt=""
        />
        <div className="w-[226px] absolute top-4 left-4 ">
          <p className="text-[#E7E8EC] font-semibold md:text-[24px] text-xl sm:text-2xl">
            ORIGINAL
          </p>
          <h1 className="md:text-[48px] text-3xl sm:text-4xl text-white">
            <span className="md:tracking-[20px] tracking-[10px] sm:tracking-[16px]">
              NOSE
            </span>{" "}
            <br />
            TRIMMER
          </h1>
        </div>
      </motion.div>
    </div>
  );
};

export default DiscountBanner;
