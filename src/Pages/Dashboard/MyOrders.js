import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const {email , displayName} =user;

  const url = `https://resale-web-server-eight.vercel.app/orderedBooks?email=${user?.email}`;

  const { data: orderedBooks = [] } = useQuery({
    queryKey: ["orderedBooks", user?.email],
    queryFn: async () => {
      const result = await fetch(url,{
        headers: {
            authorization: `bearer ${localStorage.getItem('Token')}`
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
            <th>Buyer name</th>
            <th>Ordered book</th>
           
            <th>Payment</th>
          </tr>
        </thead>
        <tbody>
          {orderedBooks?.length && orderedBooks.map((orderedBook, i) => (
            <tr key={orderedBook._id} orderedBook={orderedBook}>
              <th>{i+1}</th>
              <td>{displayName}</td>
              <td>{email}</td>
             
              <td>
                <button className="btn btn-sm btn-outline">Pay</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrders;
