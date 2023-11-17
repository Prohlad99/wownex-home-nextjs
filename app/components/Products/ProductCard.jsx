import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";
const ProductCard = (product) => {
  const { details, cPrice, pPrice, img, off, id } = product.product;
  console.log(details);
  return (
    <div className="w-full relative rounded-[15px] bg-white border border-gray-200  shadow dark:bg-gray-800 dark:border-gray-700 ">
      <a href="#">
        <img className="rounded-t-[15px] w-full" src={img} alt="" />
      </a>
      <div className="p-2">
        <a href="#">
          <h5 className="mb-2  font-semibold tracking-tight text-gray-900 dark:text-white">
            {details}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          <span className="text-xl mr-2 text-[#FF4747]">৳ {cPrice}</span>
          <sub>
            <del>৳ {pPrice}</del>
          </sub>
        </p>
        <Link
          href={`product/${id}`}
          className="inline-flex justify-center gap-2 items-center w-full px-3 py-2 text-sm font-medium text-center text-white bg-[#FF4747] rounded-lg hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <span>
            <IoCartOutline />
          </span>
          Order Now
        </Link>
      </div>
      <div className="absolute top-0 left-0 bg-[#FF4747] text-sm text-white w-[40px] flex justify-center items-center rounded-tl-[15px] rounded-br-[15px]">
        <p>-{off}%</p>
      </div>
    </div>
  );
};

export default ProductCard;
