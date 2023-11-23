"use client";
import Footer from "@/app/components/Footer/footer";
import { Navbar } from "@/app/components/Navbar/navbar";
import Link from "next/link";
import { useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";

const PaymentForm = () => {
  const [cvc, setCvc] = useState("");
  const [expiry, setExpiry] = useState("");
  const [focus, setFocus] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleInputFocus = (e) => {
    setFocus(e.target.name);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "card_number":
        setNumber(value);
        break;
      case "card_valid":
        setExpiry(value);
        break;
      case "cvc":
        setCvc(value);
        break;
      case "card_holder":
        setName(value);
        break;
      default:
        break;
    }
  };

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
      <div
        id="PaymentForm"
        className="border-[2px] border-[#FD9191] w-[450px] mx-auto pt-3 rounded-lg mt-8"
      >
        <Cards
          cvc={cvc}
          expiry={expiry}
          focused={focus}
          name={name}
          number={number}
        />
        <form className="max-w-md mx-auto bg-[#FD9191] p-8 rounded-b-lg shadow-xl mt-4">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="tel"
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              name="card_number"
              placeholder=" "
              id="card_number"
              className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              required
            />
            <label
              for="card_number"
              className="peer-focus:font-medium absolute text-base text-black dark:text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Card Number<span className="text-red-700">*</span>
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              type="text"
              name="card_holder"
              id="card_holder"
              className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="card_holder"
              className="peer-focus:font-medium absolute text-base text-black dark:text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Card Holder Name<span className="text-red-700">*</span>
            </label>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                type="tel"
                name="card_valid"
                id="card_valid"
                className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                for="card_valid"
                className="peer-focus:font-medium absolute text-base text-black dark:text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Valid Thru <span className="text-red-700">*</span>
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                type="tel"
                name="cvc"
                id="cvc"
                className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                for="cvc"
                className="peer-focus:font-medium absolute text-base text-black dark:text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                CVC <span className="text-red-700">*</span>
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-stone-900 text-white py-2 rounded-md"
          >
            <Link href="/checkout/review"> Next</Link>
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default PaymentForm;
