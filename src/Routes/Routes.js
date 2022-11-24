import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog";
import Category from "../Pages/Home/Category/Category";
import CategoryItems from "../Pages/Home/Category/CategoryItems";
import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home";
import Signup from "../Pages/Home/Signup/Signup";
import Dashboard from "../Pages/Dashboard";
import PrivateRoute from "./PrivateRoute";


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
          element:<Category></Category>
        },
        {
          path:'/category/:id',
          element:<CategoryItems></CategoryItems>,
          loader: ()=> fetch('data.json')
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