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
import AdminRoute from "./AdminRoute";
import AddBooks from "../Pages/Dashboard/AddProduct";
import AddProduct from "../Pages/Dashboard/AddProduct";


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
          path:'/',
          element:<Categories></Categories>
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
          loader : ({params}) => fetch(`http://localhost:5000/category2/${params.id}`)
        },
        {
          path: '/blog',
          element:<Blog></Blog>
        },
        {
          path: '/dashboard',
          element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
          loader: () => fetch('http://localhost:5000/users'),
          children:[
            {
              path: '/dashboard',
              element:<MyOrders></MyOrders>
            },
            {
              path: '/dashboard/allusers',
              element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
              path: '/dashboard/addbooks',
              element:<AdminRoute><AddProduct></AddProduct></AdminRoute>
            },
            {
              path: '/dashboard/myproducts',
              element:<AdminRoute><AddProduct></AddProduct></AdminRoute>
            }

          ]
        }

    ]
}
])

export default router;