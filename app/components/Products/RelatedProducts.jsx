"use client";
import { products } from "@/utilities/products";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
const RelatedProducts = () => {
  const productsAnimation = {
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
    hidden: { y: 200, opacity: 1 },
  };
  return (
    <div className=" w-full h-auto px-2  mt-6">
      <div className="grid items-center h-[50px] border-b-[1px]  bg-white px-4 rounded-t-[15px] border-blue-400">
        <div className="grid grid-cols-12 w-full">
          <div className="col-span-8 md:flex gap-3">
            <h1 className="md:text-xl font-bold">Related Products</h1>
          </div>
          <div className="col-span-4 justify-self-end">
            <button className="md:px-4 px-1 text-[12px] md:text-base py-1 rounded-full border-[1px] border-[#FF4747] text-[#FF4747]  ">
              View All
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-4 bg-white md:p-4 p-2 rounded-b-[15px]">
        {products.map((product, index) => (
          <motion.div 
          key={index}
           initial="hidden"
            whileInView="visible"
            variants={productsAnimation}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
