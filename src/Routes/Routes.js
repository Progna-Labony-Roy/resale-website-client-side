import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog";
import Categories from "../Pages/Home/Category/Categories";
import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home";
import Signup from "../Pages/Home/Signup/Signup";
import PrivateRoute from "./PrivateRoute";
import CategoryBooks from "../Pages/Home/Category/CategoryBooks";
import DashboardLayout from "../Layout/DashboardLayout";
import MyOrders from "../Pages/Dashboard/MyOrders";
import AllUsers from "../Pages/Dashboard/AllUsers";


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
          element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
          children:[
            {
              path: '/dashboard',
              element:<MyOrders></MyOrders>
            },
            {
              path: '/dashboard/allusers',
              element:<AllUsers></AllUsers>
            },

          ]
        }

    ]
}
])

export default router;