"use client";
import { useProductStore } from "@/app/store/Products";

const Test = () => {
  const { productItems } = useProductStore();
  const products = productItems[0];
  console.log(products);

  return (
    <div>
      <h1>I am tester {products?.length}</h1>
      {products?.map((item, index) => (
        <div key={index}>
          <h1>{item.details}</h1>
          {console.log(item.img[0])}
          <img src={item.img[0]} alt="" />
        </div>
      ))}
    </div>
  );
};

export default Test;
