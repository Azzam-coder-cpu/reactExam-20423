import { useEffect, useState } from "react";
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import type { Product } from "../types/Product";
import { Link } from "react-router-dom";
import ProductCard from "../components/Product Card";
const Home = () =>        {
  const [products, setProducts] = useState<Product[]>([]);
  const getData = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setProducts(data.products);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

  useEffect(() => {
    getData();
  }, []);
             
    return(
          <div className="bg-gray-100">
            <Navbar />
            <Hero />

    <div className="container mx-auto bg-white p-6">
      <h1 className="mb-6 text-3xl font-bold text-gray-800">Featured Products</h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">


         {products.map((p) => (
            <Link key={p.id} to= {`/product/${p.id}`}>
           <ProductCard product={p} />
           </Link> 
          ))}
     </div>
    </div>
            <Footer/>
    </div>
   
    )
}

export default Home