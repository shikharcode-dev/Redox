import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";

const SignIn = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    const users = JSON.parse(localStorage.getItem("reduxUsers")) || [];

    const user = users.find(
      (item) =>
        item.email === data.email &&
        item.password === data.password
    );

    if (!user) {
      alert("Invalid Email or Password");
      return;
    }

    localStorage.setItem(
      "reduxCurrentUser",
      JSON.stringify(user)
    );

    navigate("/");
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-5">

      <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-xl">

        <div className="text-center mb-8">

          <h1 className="text-4xl font-bold text-white">
            Redux Shopping Cart
          </h1>

          <p className="text-slate-400 mt-2">
            Login to continue
          </p>

        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
        >

          <div>

            <label className="text-slate-300 text-sm">
              Email
            </label>

            <div className="relative mt-2">

              <FiMail
                className="absolute left-4 top-4 text-slate-400"
              />

              <input
                type="email"
                placeholder="Enter email"
                {...register("email", {
                  required: "Email is required",
                })}
                className="w-full bg-slate-800 rounded-xl py-3 pl-12 pr-4 text-white outline-none border border-slate-700 focus:border-blue-500"
              />

            </div>

            <p className="text-red-500 text-sm mt-1">
              {errors.email?.message}
            </p>

          </div>

          <div>

            <label className="text-slate-300 text-sm">
              Password
            </label>

            <div className="relative mt-2">

              <FiLock
                className="absolute left-4 top-4 text-slate-400"
              />

              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                placeholder="Enter password"
                {...register("password", {
                  required: "Password is required",
                })}
                className="w-full bg-slate-800 rounded-xl py-3 pl-12 pr-12 text-white outline-none border border-slate-700 focus:border-blue-500"
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
                className="absolute right-4 top-4 text-slate-400"
              >
                {showPassword ? (
                  <FiEyeOff />
                ) : (
                  <FiEye />
                )}
              </button>

            </div>

            <p className="text-red-500 text-sm mt-1">
              {errors.password?.message}
            </p>

          </div>

          <button
            className="w-full bg-blue-600 hover:bg-blue-700 transition rounded-xl py-3 font-semibold text-white"
          >
            Login
          </button>

        </form>

        <p className="text-center text-slate-400 mt-6">

          Don't have an account?

          <Link
            to="/signup"
            className="text-blue-500 ml-2"
          >
            Create Account
          </Link>

        </p>

      </div>

    </div>
  );
};

export default SignIn;