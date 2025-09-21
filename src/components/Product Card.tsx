import { Link } from "react-router-dom";
import type { Product } from "../types/Product";

// Product type for safety
export interface Props {
  product : Product
}

const ProductCard = ({ product }: Props) => {
  return (
    <div className="overflow-hidden rounded-lg border bg-white shadow-sm transition hover:shadow-md">
        <Link to={`/product/${product.id}`}>
      <img
        src={product.thumbnail}
        alt={product.title}
        className="h-48 w-full object-cover"
      />
      </Link>
      <div className="p-4">
        <Link to = {`/product/${product.id}`} >
        <h3 className="mb-2 text-lg font-semibold text-gray-800">
          {product.title}
        </h3>
        
        <p className="mb-4 text-gray-600">${product.price}</p></Link>
        <button className="w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;