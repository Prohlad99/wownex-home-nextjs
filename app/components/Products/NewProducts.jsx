"use client";
import { products } from "@/utilities/products";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { useEffect } from "react";
import ProductCard from "./ProductCard";

const NewProducts = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <div className=" w-full h-auto px-2 md:px-10 mt-6">
      <div className="grid items-center h-[50px] border-b-[1px]  bg-white px-4 rounded-t-[15px] border-blue-400">
        <div className="grid grid-cols-12 w-full">
          <div className="col-span-8 md:flex gap-3">
            <h1 className="md:text-xl font-bold">New Arrivals</h1>
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
          <div data-aos="fade-up" key={index}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewProducts;
