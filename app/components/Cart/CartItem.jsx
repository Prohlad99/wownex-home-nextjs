"use client";
import { useCartStore } from "@/app/store/Cart";
import { useProductStore } from "@/app/store/Products";
import { products } from "./../../../utilities/products";
const CartItem = () => {
  const { cartItems } = useCartStore();
  const { productItems } = useProductStore();

  return (
    <div>
      {products?.map((product) => (
        <div
          key={product.id}
          className="my-3 shadow-lg text-white bg-[#FC5B5B] h-[100px] border-[1px] border-[#95A0A7] rounded-md items-center grid grid-cols-12 mx-1 md:mx-6"
        >
          {/* cart image  */}
          <div className="grid col-span-3">
            <img
              className="md:h-[90px] h-[50px] rounded-md ml-3"
              src={product.img[0]}
              alt=""
            />
          </div>

          {/* item details  */}
          <div className="grid col-span-6 justify-start">
            <h1 className="md:font-bold text-sm md:text-base font-semibold text-center">
              {product.details}
            </h1>
            <p className="my-1">Price: ${product.cPrice} </p>
            <p className="hidden md:block">Off : {product.off}%</p>
          </div>

          {/* action  */}
          <div className="grid col-span-3 justify-center text-center mr-4">
            <h1 className="center font-semibold text-sm md:text-base md:font-bold">
              Quantity
            </h1>
            <div className="flex mt-3 mb-4">
              <button
                onClick={() => removeFromCart(product.id)}
                className="border-l-[1px] border-b-[1px] border-t-[1px] rounded-l-md border-[#95A0A7] md:px-4 px-1 py-1 bg-black text-white"
              >
                -
              </button>
              <p className=" border-[1px] border-[#95A0A7] md:w-[80px] w-[30px] text-sm md:text-base text-center text-black bg-yellow-50">
                {product.quantity ? product.quantity : 1}
              </p>
              <button
                onClick={() => addToCart(product)}
                className="border-r-[1px] border-b-[1px] border-t-[1px] rounded-r-md border-[#95A0A7] md:px-4 px-1 py-1 bg-green-400"
              >
                +
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItem;
