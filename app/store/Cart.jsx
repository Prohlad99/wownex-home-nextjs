import { create } from "zustand";

export const useCartStore = create((set) => ({
  cartItems: [],
  addToCart: (value) => {
    set((state) => {
      const selectedItem = state.cartItems.find((item) => item.id === value.id);
      if (selectedItem) {
        selectedItem.quantity += 1;
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== selectedItem.id
        );
        state.cartItems.push(selectedItem);
      } else {
        state.cartItems.push({
          ...value,
          quantity: 1,
          position: state.cartItems.length,
        });
      }
    });
  },
  removeFromCart: (id) => {
    set((state) => {
      const selectedItem = state.cartItems.find((item) => item.id === id);
      if (selectedItem.quantity > 1) {
        selectedItem.quantity -= 1;
      } else {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
      }
    });
  },

  clearCart: () => {
    set((state) => {
      state.cartItems = [];
    });
  },
}));
