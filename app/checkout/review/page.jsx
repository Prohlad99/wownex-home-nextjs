"use client";
import Footer from "@/app/components/Footer/footer";
import { Navbar } from "@/app/components/Navbar/navbar";
import Link from "next/link";
import CartItem from "./../../components/Cart/CartItem";
import OrderSummary from "./../../components/Cart/OrderSummary";

const Review = () => {
  return (
    <div>
      <Navbar />
      <div className="md:w-[500px] w-[300px] h-[30px] mt-8 relative  mx-auto ">
        <div className="w-full flex justify-between items-center">
          <div className="h-[30px] w-[30px] rounded-full border-[2px] z-10 bg-white border-[#FC5B5B] flex items-center justify-center font-bold">
            <Link href="/checkout">1</Link>
          </div>
          <div className="h-[30px] w-[30px] rounded-full border-[2px] z-10 bg-white border-[#FC5B5B] flex items-center justify-center font-bold ">
            <Link href="/checkout/payment">2</Link>
          </div>
          <div className="h-[30px] w-[30px] rounded-full border-[2px] z-10 bg-white border-[#FC5B5B] flex items-center justify-center font-bold ">
            <Link href="/checkout/review">1</Link>
          </div>
        </div>
        <div className="bg-[#FC5B5B] w-full h-[2px] absolute top-[50%]"></div>
      </div>
      <div className="grid md:grid-cols-12 grid-cols-1  pt-[40px] md:h-[100vh] h-auto mb-4 justify-center">
        {/* cart item  */}
        <div className="grid md:col-span-8 col-span-full h-[400px] md:h-[500px] no-scrollbar">
          <div>
            <CartItem />
          </div>
        </div>

        {/* order summery  */}
        <div className="gird md:col-span-4 col-span-full justify-self-center">
          <div className="">
            <OrderSummary review={true} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Review;
