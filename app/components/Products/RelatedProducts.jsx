"use client";
import { products } from "@/utilities/products";
import ProductCard from "./ProductCard";
const RelatedProducts = () => {
  return (
    <div className=" w-full h-auto px-2 md:px-10 mt-6">
      <div className="grid items-center h-[50px] border-b-[1px]  bg-white px-4 rounded-t-[15px] border-blue-400">
        <div className="grid grid-cols-12 w-full">
          <div className="col-span-8 md:flex gap-3">
            <h1 className="md:text-xl font-bold">Related Products</h1>
          </div>
          <div className="col-span-4 justify-self-end">
            <button className="px-4 py-1 rounded-full border-[1px] border-[#FF4747] text-[#FF4747] ">
              View All
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2  md:grid-cols-5 gap-1 md:gap-4 bg-white p-4 rounded-b-[15px]">
        {products.map((product, index) => (
          <ProductCard product={product} />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
