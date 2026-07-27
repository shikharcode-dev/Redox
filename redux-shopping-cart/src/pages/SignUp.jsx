import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {

    const users =
      JSON.parse(
        localStorage.getItem("reduxUsers")
      ) || [];

    users.push(data);

    localStorage.setItem(
      "reduxUsers",
      JSON.stringify(users)
    );

    navigate("/signin");

  };

  return (

    <div className="min-h-screen bg-slate-950 flex justify-center items-center px-5">

      <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 w-full max-w-md">

        <h1 className="text-4xl font-bold text-center text-white">

          Create Account

        </h1>

        <p className="text-center text-slate-400 mt-2 mb-8">

          Redux Shopping Cart

        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
        >

          <input
            placeholder="Full Name"
            {...register("name")}
            className="w-full bg-slate-800 p-3 rounded-xl text-white outline-none"
          />

          <input
            placeholder="Email"
            {...register("email")}
            className="w-full bg-slate-800 p-3 rounded-xl text-white outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            {...register("password")}
            className="w-full bg-slate-800 p-3 rounded-xl text-white outline-none"
          />

          <button
            className="w-full bg-blue-600 py-3 rounded-xl text-white font-semibold"
          >

            Create Account

          </button>

        </form>

        <p className="text-center mt-6 text-slate-400">

          Already have an account?

          <Link
            to="/signin"
            className="text-blue-500 ml-2"
          >
            Login
          </Link>

        </p>

      </div>

    </div>

  );

};

export default SignUp;