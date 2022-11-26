import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog";
import Categories from "../Pages/Home/Category/Categories";
import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home";
import Signup from "../Pages/Home/Signup/Signup";
import Dashboard from "../Pages/Dashboard";
import PrivateRoute from "./PrivateRoute";
import CategoryBooks from "../Pages/Home/Category/CategoryBooks";


const router= createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element:<Home></Home>,
          
        },
        {
          path: '/login',
          element:<Login></Login>,
          
        },
        {
          path:'/signup',
          element:<Signup></Signup>
        },
        {
          path:'/category',
          element:<Categories></Categories>
        },
        {
          path:'/category/:id',
          element:<CategoryBooks></CategoryBooks>,
          loader : () => fetch(`http://localhost:5000/books/`)
        },
        {
          path: '/blog',
          element:<Blog></Blog>
        },
        {
          path: '/dashboard',
          element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>
        }

    ]
}
])

export default router;