import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const Login = () => {

  const location =useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signIn, googleSignIn } = useContext(AuthContext);

  const [loginError, setLoginError] = useState("");

  const handleGithubSignIn = () => {
    googleSignIn()
      .then((res) => {
        const user = res.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
        setLoginError(error.message);
      });
  };

  const handleLogin = (data) => {
    setLoginError("");
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex justify-center">
      <form onSubmit={handleSubmit(handleLogin)}>
        {/* register your input into the hook by invoking the "register" function */}
        <div className="form-control w-full max-w-xs my-5">
          <h2 className="text-center text-4xl font-bold mb-8">Login</h2>
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            {...register("email", { required: "Enter your email" })}
            type="text"
            className="input input-bordered w-full max-w-xs my-2"
          />
          {errors.email && (
            <span className="text-red-500">{errors.email.message}</span>
          )}
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            {...register("password", { required: "Wrong password" })}
            type="password"
            className="input input-bordered w-full max-w-xs mt-2"
          />
          {errors.password && (
            <span className="text-red-500">{errors.password.message}</span>
          )}
        </div>
        <label className="label">
          <span className="label-text">Forget password</span>
        </label>

        <input
          type="submit"
          value="login"
          className="btn btn-success my-3 w-full"
        />
        <div>
          {loginError && <p className="text-red-500 py-1">{loginError}</p>}
        </div>
        <p>
          New to doctors portal?{" "}
          <Link to="/signup" className="text-orange-500">
            Create an account
          </Link>{" "}
        </p>
        <div className="divider">OR</div>
        <button
          onClick={handleGithubSignIn}
          className="btn btn-outline btn-accent w-full"
        >
          CONTINUE WITH GOOGLE
        </button>
      </form>
    </div>
  );
};

export default Login;
