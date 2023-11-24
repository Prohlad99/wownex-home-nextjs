"use client";
import { products } from "@/utilities/products";
import CartItem from "../components/Cart/CartItem";
import EmptyCart from "../components/Cart/EmptyCart";
import OrderSummary from "../components/Cart/OrderSummary";
import Footer from "../components/Footer/footer";
import { Navbar } from "../components/Navbar/navbar";
import { useCartStore } from "../store/Cart";
const Cart = () => {
  const { cartItems } = useCartStore();

  return (
    <div>
      <Navbar />
      {products?.length ? (
        <div className="grid md:grid-cols-12 grid-cols-1  pt-[40px] md:h-[100vh] h-auto mb-4 justify-center ">
          {/* cart item  */}
          <div className="grid md:col-span-8 col-span-full border-2 border-stone-400 rounded-lg p-2">
            <div
              className={` h-[300px] md:h-[400px] scroll-smooth scroll-m-1 overflow-y-scroll overflow-x-hidden `}
            >
              <div>
                <CartItem />
              </div>
            </div>
            <div className="mt-2 h-[200px] md:h-auto bg-slate-600 md:mx-10 mx-2 rounded-lg text-white">
              <div className="flex justify-center gap-10 p-2 tracking-widest leading-8">
                <div>
                  <p>Selected Items: 4</p>
                  <p>Selected Products: 10</p>
                  <p>Total Price: 5454</p>
                </div>
                <div>
                  <p>
                    Delivery Charge: <span>In Dhaka-100</span>
                    <br />
                    <span> Outside Dhaka-150</span>
                  </p>
                  <p>Grand Total: 5483</p>
                </div>
              </div>

              <div className="flex justify-between items-center mx-10">
                <button className=" bg-blue-600 rounded-full py-2 px-4 py-1 px-2 text-white">
                  Back to Shopping
                </button>
                <button className=" bg-red-600 rounded-full md:py-2 md:px-4 py-1 px-2 text-white">
                  Clear Cart
                </button>
              </div>
            </div>
          </div>

          {/* order summery  */}
          <div className="gird md:col-span-4 col-span-full justify-self-center">
            <div className="">
              <OrderSummary />
            </div>
          </div>
        </div>
      ) : (
        <EmptyCart />
      )}
      <Footer />
    </div>
  );
};

export default Cart;
