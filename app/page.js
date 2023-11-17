import Footer from "./components/Footer/footer";
import { Hero } from "./components/Hero/hero";
import { Navbar } from "./components/Navbar/navbar";
import Allproducts from "./components/Products/Allproducts";
import DiscountBanner from "./components/Products/DiscountBanner";
import FlashSale from "./components/Products/FlashSale";
import HotProduct from "./components/Products/Hotproduct";
import NewProducts from "./components/Products/NewProducts";

export default function Home() {
  return (
   <main>
    <Navbar/>
    <Hero/>
    <FlashSale/>
    <HotProduct/>
    <NewProducts/>
    <DiscountBanner/>
    <Allproducts/>
    <Footer/>
   </main>
  )
}
