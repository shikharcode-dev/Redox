import { useSelector, useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} from "../Redux/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.cartItems);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <h1 className="text-3xl font-bold text-white">
          Your Cart is Empty 🛒
        </h1>
      </div>
    );
  }

  return (
    <section className="bg-slate-950 min-h-screen py-14">
      <div className="max-w-6xl mx-auto px-6">

        <div className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-bold text-white">
            Shopping Cart
          </h1>

          <button
            onClick={() => dispatch(clearCart())}
            className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg"
          >
            Clear Cart
          </button>
        </div>

        {cartItems.map((item) => (
          <div
            key={item.id}
            className="bg-slate-900 rounded-xl p-6 flex items-center justify-between mb-6"
          >
            <div className="flex items-center gap-6">

              <img
                src={item.image}
                alt={item.title}
                className="w-24 h-24 object-contain bg-white rounded-lg p-2"
              />

              <div>

                <h2 className="text-white font-semibold">
                  {item.title}
                </h2>

                <p className="text-green-400 mt-2">
                  ₹ {item.price}
                </p>

              </div>

            </div>

            <div className="flex items-center gap-3">

              <button
                onClick={() => dispatch(decreaseQuantity(item.id))}
                className="bg-red-600 px-3 py-2 rounded text-white"
              >
                -
              </button>

              <span className="text-white text-xl">
                {item.quantity}
              </span>

              <button
                onClick={() => dispatch(increaseQuantity(item.id))}
                className="bg-green-600 px-3 py-2 rounded text-white"
              >
                +
              </button>

              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="bg-red-700 px-4 py-2 rounded text-white ml-4"
              >
                Remove
              </button>

            </div>

          </div>
        ))}

        <div className="mt-10 flex justify-end">

          <div className="bg-slate-900 p-6 rounded-xl">

            <h2 className="text-white text-2xl font-bold">
              Total : ₹ {totalPrice.toFixed(2)}
            </h2>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Cart;