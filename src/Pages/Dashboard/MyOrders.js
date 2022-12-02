import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  

  const url = `https://resale-web-server-eight.vercel.app/orderedBooks?email=${user?.email}`;

  const { data: orderedBooks = [] } = useQuery({
    queryKey: ["orderedBooks", user?.email],
    queryFn: async () => {
      const result = await fetch(url,{
        headers: {
            authorization: `bearer ${localStorage.getItem('accessToken')}`
        }
      });
      const data = await result.json();
      return data;
    },
  });

  return (
    <div className="overflow-x-auto">
      <table className="table table-compact w-full">
        <thead>
          <tr>
            <th></th>
            <th>Ordered book</th>
            <th>Location</th>
           <th>Email</th>
            <th>Payment</th>
          </tr>
        </thead>
        <tbody>
          {orderedBooks?.length && orderedBooks.map((orderedBook, i) => (
            <tr key={orderedBook._id} orderedBook={orderedBook}>
               <th>
         {i+1}
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={orderedBook.book_img} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{orderedBook.book_name}</div>
              <div className="text-sm opacity-50">Price:{orderedBook.resale_price}</div>
            </div>
          </div>
        </td>
        <td>
         {orderedBook.location}
        </td>
        <td>{orderedBook.email}</td>
        <th>
          {
            orderedBook.resale_price && !orderedBook.paid &&  <Link to={`/dashboard/payment/${orderedBook._id}`}><button className="btn btn-success btn-xs">Pay</button></Link>
          }
          {
            orderedBook.resale_price && orderedBook.paid &&  <span className="text-green-500">Paid</span>
          }
         
        </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrders;
