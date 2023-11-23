import { create } from "zustand";

async function getProducts() {
  const res = await fetch("http://localhost:5000/products");
  const val = await res.json();
  return val;
}
const products = [];
getProducts().then((data) => products.push(data));

export const useProductStore = create((set) => ({
  productItems: products,
}));
