import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";


const AllUsers = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const result = await fetch("http://localhost:5000/users");
      const data = await result.json();
      return data;
    },
  });

  const handleMakeAdmin = (id) => {
    fetch(`http://localhost:5000/users/allusers/${id}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("Token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Admin creation successful");
          refetch();
        }
      });
  };
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
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users?.length &&
            users.map((user, i) => (
              <tr key={user._id}>
                <th>{i + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{!user.status ? user.role : user.status}</td>
                <td>Canada</td>
                <td>
                    {user?.role === 'Admin' ?
                    <p>Admin</p>
                    : <>
                    {
                     ( user.status) === 'Buyer' ?
                      <button></button>
                      :
                      <button
                    onClick={() => handleMakeAdmin(user._id)}
                    className="btn btn-xs btn-outline"
                  >
                    Make Admin
                  </button>
                    }
                    </>
                    }
                </td>
                <td>
                  <button className="btn btn-xs btn-primary">Delete</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;
