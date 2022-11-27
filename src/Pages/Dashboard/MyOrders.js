import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const {email , displayName} =user;

  const url = `http://localhost:5000/orderedBooks?email=${user?.email}`;

  const { data: orderedBooks = [] } = useQuery({
    queryKey: ["orderedBooks", user?.email],
    queryFn: async () => {
      const result = await fetch(url);
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
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Varification</th>
            <th>Admin</th>
            <th>Favorite Color</th>
          </tr>
        </thead>
        <tbody>
          {orderedBooks.map((orderedBookt, i) => (
            <tr>
              <th>{i+1}</th>
              <td>{displayName}</td>
              <td>{email}</td>
              <td>Littel, Schaden and Vandervort</td>
              <td>Canada</td>
              <td>12/16/2020</td>
              <td>Blue</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrders;
