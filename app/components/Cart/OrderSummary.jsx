"use client";
import { useCartStore } from "@/app/store/Cart";

const OrderSummary = ({ review }) => {
  const { cartItems, clearCart } = useCartStore();
  let totalProduct = 0;
  let totalPrice = 0;
  const counter = (product) => {
    totalPrice += product.quantity * product.price;
    totalProduct += product.quantity;
  };

  cartItems.forEach((product) => counter(product));

  return (
    <div>
      {/* container  */}
      <div className="bg-[#FC5B5B] md:w-[340px] w-[300px] text-white grid justify-center p-2 rounded-md">
        {/* order details  */}
        <div className="tracking-widest leading-8">
          <h1 className="text-center text-2xl underline mb-8">Order Summary</h1>
          <p className="my-2">Selected Items: {cartItems.length}</p>
          <p className="my-2">Selected Products: {totalProduct}</p>

          <p className="my-2">Total Price: ${totalPrice}</p>
          <p className="my-2">Total Shipping Charge: $5</p>
          <p className="my-2">Tax: $114</p>
          <h2 className="my-2 text-xl mb-6">
            Grand Total: ${totalPrice + 5 + 114}
          </h2>
        </div>

        {/* button  */}
        {review ? (
          <div className="grid">
            <button className="border-[1px] border-l-indigo-400 bg-green-700 py-2 rounded-md my-2">
              Confirm Order
            </button>
          </div>
        ) : (
          <div className="grid">
            <button
              onClick={() => {
                if (window.confirm("Are you want to clear your cart?")) {
                  clearCart();
                }
              }}
              className="border-[1px] border-l-indigo-400 bg-black py-2 rounded-md my-2"
            >
              Clear Cart
            </button>
            <button className="border-[1px] border-l-indigo-400 bg-green-700 py-2 rounded-md my-2">
              <Link href="/checkout">Proceed Checkout</Link>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderSummary;
