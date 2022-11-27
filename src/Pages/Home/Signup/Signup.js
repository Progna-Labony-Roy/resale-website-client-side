import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";

const Signup = () => {
  const navigate=useNavigate();


  const { createUser, updateUser } = useContext(AuthContext);
  const [signupError, setSignupError] = useState();
  const [buyerSeller,setBuyerSeller] =useState();
  
  const handleSignin = (event) =>{
    event.preventDefault();
    const form = event.target;
    const name =form.name.value;
    const email= form.email.value;
    const password = form.password.value;
    console.log(buyerSeller);
    

    createUser(email,password)
    .then((result) =>{
      setSignupError('');
        const user=result.user;
        console.log(user);
        handleUpdateUser(name);
        form.reset();
        navigate('/');
        toast.success('User successfully login')
    })
    .catch((error) => {
        console.error(error);
        setSignupError(error.message);
    });
  }

    const handleUpdateUser=(name ,photoURL)=>{
      const profile={
        displayName:name ,
        photoURL:photoURL
      }
      updateUser(profile)
      .then( ()=>{})
      .catch(error => console.error(error));

  }

  return (
    <div className="flex justify-center">
      <div className="w-2/5 mt-12">
        <h2 className="text-2xl font-semibold">Please, Sign up</h2>
        <form onSubmit={handleSignin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="name"
              name="name"
              className="input input-bordered  w-full max-w-xs"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              name="email"
              className="input input-bordered  w-full max-w-xs"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              name="password"
              className="input input-bordered  w-full max-w-xs"
            />
          </div>

          <div className="w-full max-w-xs">
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">Buyer</span>
                <input
                  type="radio"
                  name="buyerSeller"
                  value="buyer"
                  className="radio checked:bg-blue-500"
                  defaultChecked
                  onChange={e =>setBuyerSeller(e.target.value )}
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">Seller</span>
                <input
                  type="radio"
                  name="buyerSeller"
                  value="seller"
                  className="radio checked:bg-blue-500"
                  onChange={e =>setBuyerSeller(e.target.value)}
                />
              </label>
            </div>
          </div>
          <div className="form-control mt-6">
            <input
              type="submit"
              value="SignUp"
              className="btn btn-success max-w-xs w-full"
            />
          </div>
        </form>
        <p>
          Already have an account?{" "}
          <Link to="/login" className="text-teal-400 font-bold hover:text-lg">
            Login
          </Link>
        </p>
        <p className="text-rose-600">{signupError}</p>
      </div>
    </div>
  );
};

export default Signup;
