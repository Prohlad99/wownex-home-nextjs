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
        <div className="grid md:grid-cols-12 grid-cols-1  pt-[40px] md:h-[100vh] h-auto mb-4 justify-center">
          {/* cart item  */}
          <div className="grid md:col-span-8 col-span-full h-[400px] md:h-[500px] overflow-scroll">
            <div>
              <CartItem />
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
