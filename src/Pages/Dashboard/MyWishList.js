import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const MyWishList = () => {
  const { user } = useContext(AuthContext);
  const { email, displayName } = user;

  const url = `https://resale-web-server-progna-labony-roy.vercel.app/wishlists?email=${user?.email}`;

  const { data: wishlists = [] } = useQuery({
    queryKey: ["wishlists", user?.email],
    queryFn: async () => {
      const result = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await result.json();
      return data;
    },
  });

  console.log(wishlists)
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
          {wishlists?.length &&
            wishlists.map((orderedBook, i) => (
              <tr key={orderedBook._id} orderedBook={orderedBook}>
                <th>{i + 1}</th>
                <td>{displayName}</td>
                <td>{email}</td>

                <td>
                  
                 
                    <Link to={`/dashboard/payment/${orderedBook._id}`}>
                      <button className="btn btn-success btn-xs">Pay</button>
                    </Link>
              
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyWishList;
