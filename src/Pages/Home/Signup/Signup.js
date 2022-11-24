import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Signup = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm
  ();

  const [signupError, setSignupError] = useState()
   
  const handleSignup =() =>{

  }

    return (
      <div className="flex justify-center">
      <form onSubmit={handleSubmit(handleSignup)}>
        {/* register your input into the hook by invoking the "register" function */}
        <div className="form-control w-full max-w-xs my-5">
          <h2 className="text-center text-4xl font-bold mb-8">Sign Up</h2>
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            {...register("name", { required: "Please write your name" })}
            type="text"
            className="input input-bordered w-full max-w-xs my-2"
          />
          {errors.name && (
            <span className="text-red-500">This field is required</span>
          )}

          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            {...register("email", { required: "Email is required" })}
            type="text"
            name="email"
            className="input input-bordered w-full max-w-xs my-2"
          />
          {errors.email && (
            <span className="text-red-500">{errors.email.message}</span>
          )}
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            {...register("password", {
              required: "Please write your password",
              minLength: {
                value: 6,
                message: "Password must be atleast 6 characters",
              },
            })}
            type="password"
            className="input input-bordered w-full max-w-xs mt-2"
          />
          {errors.password && (
            <span className="text-red-500">{errors.password.message}</span>
          )}
        </div>
        <input
          type="submit"
          value="SignUp"
          className="btn btn-success my-3 w-full"
        />
         <div>
          {
            <p className="text-red-500 py-1"></p>
          }
        </div>
        <p>
          Already have an account{" "}
          <Link to="/login" className="text-green-500">
            Please Log in
          </Link>{" "}
        </p>
        <div className="divider">OR</div>
        <button className="btn btn-outline btn-accent w-full">
          CONTINUE WITH GOOGLE
        </button>
      </form>
    </div>
  );
};

export default Signup;