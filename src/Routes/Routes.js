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
import AddProduct from "../Pages/Dashboard/AddProduct";
import MyProducts from "../Pages/Dashboard/MyProducts";
import ErrorElement from "../Shared/ErrorElement";
import SellerRoute from "../Routes/SellerRoute"
import AdminRoute from "../Routes/AdminRoute";
import MyWishList from "../Pages/Dashboard/MyWishList";
import Payment from "../Pages/Dashboard/Payment";
import Advertisements from "../Pages/Home/Category/Advertisements";


const router= createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      errorElement:<ErrorElement></ErrorElement>,
      children: [
        {
          path: '/',
          element:<Home></Home>,
          loader: ()=> fetch(`https://resale-web-server-eight.vercel.app/books`)
        },
        {
          path:'/',
          element:<Categories></Categories>
        },
        {
          path:'/',
          element:<PrivateRoute><Advertisements></Advertisements></PrivateRoute>,
          
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
          element:<PrivateRoute><CategoryBooks></CategoryBooks></PrivateRoute>,
          loader : ({params}) => fetch(`https://resale-web-server-eight.vercel.app/category2/${params.id}`)
        },
        {
          path: '/blog',
          element:<Blog></Blog>
        },
        {
          path: '/dashboard',
          element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
          loader: () => fetch('https://resale-web-server-eight.vercel.app/users'),
          errorElement:<ErrorElement></ErrorElement>,
          children:[
            {
              path: '/dashboard',
              element:<MyOrders></MyOrders>
            },
            {
              path: '/dashboard/mywishlist',
              element:<MyWishList></MyWishList>
            },
            {
              path: '/dashboard/allusers',
              element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
              path: '/dashboard/addbooks',
              element:<SellerRoute><AddProduct></AddProduct></SellerRoute>,
              // loader: ({params}) =>fetch(`https://resale-web-server-eight.vercel.app/books/${params.id}`)
            },
            {
              path: '/dashboard/myproducts',
              element:<MyProducts></MyProducts>,
              loader: ({params}) =>fetch(`https://resale-web-server-eight.vercel.app/books/${params.email}`)
            },
            {
              path: '/dashboard/payment/:id',
              element:<Payment></Payment>,
              loader: ({params}) =>fetch(`https://resale-web-server-eight.vercel.app/orderedBooks/${params.id}`)
            }

          ]
        }

    ]
}
])

export default router;