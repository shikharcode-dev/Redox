import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/cartSlice";
import { getProducts } from "../services/api";

const Products = () => {
  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProducts();
        setProducts(response.data);
      } catch (err) {
        setError("Failed to fetch products.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
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

  if (error) {
    return (
      <h1 className="text-center text-red-500 text-2xl mt-20">
        {error}
      </h1>
    );
  }

  return (
    <section className="bg-slate-950 min-h-screen py-14">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-4xl font-bold text-white mb-10">
          Products
        </h1>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {products.map((product) => (

            <div
              key={product.id}
              className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:scale-105 transition"
            >

              <img
                src={product.image}
                alt={product.title}
                className="w-full h-60 object-contain bg-white p-6"
              />

              <div className="p-5">

                <h2 className="text-white font-semibold line-clamp-2">
                  {product.title}
                </h2>

                <p className="text-blue-500 font-bold text-xl mt-3">
                  ₹ {product.price}
                </p>

                <button
                  onClick={() => handleAddToCart(product)}
                  className="w-full mt-5 bg-green-600 hover:bg-green-700 py-3 rounded-xl text-white font-semibold transition"
                >
                  Add To Cart
                </button>

                <Link
                  to={`/products/${product.id}`}
                  className="block mt-3 text-center bg-blue-600 hover:bg-blue-700 py-3 rounded-xl text-white"
                >
                  View Details
                </Link>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Products;