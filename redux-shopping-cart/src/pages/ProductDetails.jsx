import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/cartSlice";
import { getSingleProduct } from "../services/api";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await getSingleProduct(id);
        setProduct(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    console.log("🛒 Add To Cart Button Clicked");

    dispatch(addToCart(product));

    console.log("✅ Action Dispatched");
  };

  if (loading) {
    return (
      <h1 className="text-center text-white text-3xl mt-20">
        Loading...
      </h1>
    );
  }

  return (
    <section className="bg-slate-950 min-h-screen py-14">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6">

        <div className="bg-white rounded-2xl p-10">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-[450px] object-contain"
          />
        </div>

        <div>

          <span className="text-blue-500 uppercase">
            {product.category}
          </span>

          <h1 className="text-4xl font-bold text-white mt-3">
            {product.title}
          </h1>

          <h2 className="text-3xl text-green-400 mt-6">
            ₹ {product.price}
          </h2>

          <p className="text-slate-400 mt-8 leading-8">
            {product.description}
          </p>

          <button
            onClick={handleAddToCart}
            className="mt-10 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl text-white font-semibold"
          >
            Add To Cart
          </button>

        </div>

      </div>
    </section>
  );
};

export default ProductDetails;