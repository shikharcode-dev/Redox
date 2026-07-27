import { Link, useNavigate } from "react-router-dom";
import { FiShoppingCart, FiLogOut } from "react-icons/fi";
import { useSelector } from "react-redux";

const Navbar = () => {
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart.cartItems);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  console.log("🛒 Navbar Re-rendered");
  console.log("Current Cart:", cartItems);

  const logout = () => {
    localStorage.removeItem("reduxCurrentUser");
    navigate("/signin");
  };

  return (
    <nav className="bg-slate-950 border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        <Link
          to="/"
          className="text-3xl font-bold text-blue-500"
        >
          Redux Shopping Cart
        </Link>

        <div className="flex items-center gap-8">

          <Link
            to="/"
            className="text-slate-300 hover:text-blue-500"
          >
            Home
          </Link>

          <Link
            to="/products"
            className="text-slate-300 hover:text-blue-500"
          >
            Products
          </Link>

          <Link
            to="/cart"
            className="relative"
          >
            <FiShoppingCart className="text-2xl text-white" />

            <span
              className="absolute -top-2 -right-2 bg-blue-600 text-white w-5 h-5 rounded-full flex justify-center items-center text-xs"
            >
              {totalItems}
            </span>
          </Link>

          <button onClick={logout}>
            <FiLogOut className="text-2xl text-red-500" />
          </button>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;