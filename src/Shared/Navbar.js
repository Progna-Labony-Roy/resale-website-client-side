import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

const Navbar = () => {
  const { user, googleSignIn, logOut } = useContext(AuthContext);
  const [createdUserEmail, setCreatedUserEmail] = useState('');

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };

  const handleGoogleSignin = () => {
    googleSignIn()
      .then((res) => {
        const user = res.user;
        console.log(user);
        setCreatedUserEmail(user.email);
        const currentUser={
          name:user.displayName,
          email:user.email,
status: "Buyer"
        }
        fetch("https://resale-web-server-eight.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(currentUser),
    })
      .then((res) => res.json())
      .then((data) => {
        setCreatedUserEmail(user.email);
        
      });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/category">Category</Link>
      </li>
      {user?.uid ? (
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      ) : (
       <>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li></>
      )}
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <Link className="btn btn-ghost normal-case text-xl">BookStore</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{navItems}</ul>
        </div>
        <div className="navbar-end">
          {user?.uid ? (
            <Link onClick={handleLogOut} className="btn btn-accent btn-sm">SignOut</Link>
          ) : (
            <Link onClick={handleGoogleSignin} className="btn btn-accent btn-sm">Google Signin</Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
