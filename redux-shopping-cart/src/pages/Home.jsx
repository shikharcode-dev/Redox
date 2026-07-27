import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  return (
    <section className="min-h-[90vh] bg-slate-950 flex items-center">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        <div>

          <span className="text-blue-500 font-semibold uppercase tracking-wider">
            Welcome To
          </span>

          <h1 className="text-6xl font-black text-white mt-4 leading-tight">
            Redux Shopping Cart
          </h1>

          <p className="text-slate-400 mt-6 text-lg leading-8">

            Build modern shopping applications using React,
            FakeStore API and Redux Toolkit.

          </p>

          <Link
            to="/products"
            className="inline-flex items-center gap-3 mt-10 bg-blue-600 hover:bg-blue-700 transition px-7 py-4 rounded-xl text-white font-semibold"
          >
            Shop Now
            <FaArrowRight />
          </Link>

        </div>

        <div>

          <img
            src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=900"
            alt="shopping"
            className="rounded-3xl shadow-2xl"
          />

        </div>

      </div>

    </section>
  );
};

export default Home;