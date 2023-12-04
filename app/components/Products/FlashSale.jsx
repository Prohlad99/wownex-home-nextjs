"use client";
import { products } from "@/utilities/products";
import { motion } from "framer-motion";
import Link from "next/link";
import ProductCard from "./ProductCard";

const FlashSale = () => {
  const productsAnimation = {
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
    hidden: { y: 200, opacity: 1 },
  };
  return (
    <div className=" w-full h-auto px-2 md:px-10">
      <div className="grid items-center h-auto border-b-[1px] py-3  bg-white px-4 rounded-t-[15px] border-blue-400">
        <div className="grid grid-cols-12 w-full ">
          <div className="col-span-8 md:flex gap-3">
            <h1 className="md:text-xl font-bold">
              Flash <span className="text-[#FF4747]">SALE</span>
            </h1>
            <p>
              Ending in{" "}
              <span className="bg-[#FF4747] md:px-2 md:py-1 text-[12px] px-1 rounded-md text-white">
                10h: 30m: 10s
              </span>
            </p>
          </div>
          <div className="col-span-4 justify-self-end">
            <button className="md:px-4 px-1 text-[12px] md:text-base py-1 rounded-full border-[1px] border-[#FF4747] text-[#FF4747] ">
              <Link href="/category">View All</Link>
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-4 bg-white p-4 rounded-b-[15px]">
        {products.map((product, index) => (
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={productsAnimation}
          >
            <ProductCard key={index} product={product} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FlashSale;
