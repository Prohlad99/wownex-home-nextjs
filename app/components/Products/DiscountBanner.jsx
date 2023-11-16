"use client";

const DiscountBanner = () => {
  return (
    <div className="grid grid-cols-12 gap-4  h-auto mt-6 mx-2 md:mx-10">
      <div className="col-span-12 md:col-span-6 h-[240px] relative cursor-pointer overflow-hidden rounded-[15px]">
        <img
          className="hover:scale-125 w-full h-full transition-all ease-in-out delay-100"
          src="/assets/products/kitchen.png"
          alt=""
        />
        <div className="w-[247px] h-[132px] absolute top-4 left-4">
          <h1 className="font-bold text-[36px] text-[#FF4747]">40% Discount</h1>
          <p className="font-bold text-[36px]">on Kitchen items</p>
          <p className="text-[#666666] font-bold text-[36px]">SHOP NOW</p>
        </div>
      </div>
      <div className="col-span-12 md:col-span-6 h-[240px] relative cursor-pointer overflow-hidden rounded-[15px]">
        <img
          className="hover:scale-125 w-full h-full transition-all ease-in-out delay-100"
          src="/assets/products/trimmer.png"
          alt=""
        />
        <div className="w-[226px] absolute top-4 left-4 ">
          <p className="text-[#E7E8EC] font-semibold text-[24px]">ORIGINAL</p>
          <h1 className="text-[48px] text-white">
            <span className="tracking-[20px]">NOSE</span> <br />
            TRIMMER
          </h1>
        </div>
      </div>
    </div>
  );
};

export default DiscountBanner;
