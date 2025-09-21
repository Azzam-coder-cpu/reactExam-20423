import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Product } from "../types/Product";
import Navbar from "../components/Navbar";

const ProductDetails = () => {

  const { id } = useParams<{ id: string }>(); 
  const [product, setProduct] = useState<Product | null>(null);

  const getProduct = async () => {
    try {
      const res = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await res.json();
      setProduct(data);
    } catch (err) {
      console.error("Error fetching product details:", err);
    }
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  if (!product) {
    return <p>Loading product...</p>;
  }


    return(
         <div className="bg-gray-100">
            <Navbar />
    <div className="bg-[#F4F4F4]">
      <div className="mx-auto max-w-3xl px-3 py-5 text-center md:py-10">
        <h1
          className="text-3xl font-semibold leading-tight text-[#1E1E1E] md:text-[40px]"
        >
          All-in-One E-commerce App
        </h1>
        <h2 className="mt-5 text-lg font-medium text-[#1E1E1E]">
          Discover premium products and enjoy shopping with us. Risk Free
          Shopping!
        </h2>
      </div>
    </div>

    <div className="container mx-auto max-w-6xl p-6">
      <div
        className="flex flex-col overflow-hidden rounded-lg border border-green-200 bg-white lg:flex-row"
      >
        <div className="lg:w-1/2">
          <img
            className="h-96 w-full object-cover"
            src={product.thumbnail}
            alt="Product Image"
          />
        </div>

        <div className="p-6 lg:w-1/2">
          <h2 className="mb-4 text-3xl font-bold text-gray-800">{product.title}</h2>
          <p className="mb-2 text-sm text-gray-500">{product.category}</p>

          <p className="mb-6 text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque ultrices massa ac auctor vestibulum. Aenean at nisi nec
            nisl luctus lacinia.
          </p>

          <p className="mb-6 text-2xl font-semibold text-gray-800">{product.price}</p>

          <button
            className="w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>

    <footer className="relative z-50 bg-[#191F33]">
      <div className="flex flex-col items-center px-4 py-12">
        <div>
          <a
            className="mb-8 flex items-center justify-center gap-5 text-white"
            href="/"
          >
            <img
              alt="Logo"
              className="color-transparent"
              width="50"
              src="https://baitussalam.org/images/logo-2.svg"
            />
            <span className="text-3xl font-semibold tracking-wider"
              >Bait-us-Salam</span>
          </a>
          <p className ="max-w-xl text-center text-lg font-medium text-white">
            Shop Today!
          </p>
        </div>
      </div>
      <div className ="bg-[#2E3447]">
        <div className ="px-3 py-3 text-center">
          <span className ="text-[#767E94]"
            >Coded with 💙 by <br></br>
            <a
              href="https://www.linkedin.com/in/abdulbasitprofile/"
              target="_blank"
              className="text-white"
            >
              Muhammad Azzam </a>in Karachi
          </span>
        </div>
      </div>
    </footer>
  </div>
    )
}

export default ProductDetails;