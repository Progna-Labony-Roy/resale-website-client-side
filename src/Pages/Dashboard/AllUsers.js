import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../Context/AuthProvider";
import ConfirmModal from "../../Shared/ConfirmModal";
import Loader from "../../Shared/Loader";


const AllUsers = () => {
  const [deleteUser, setDeleteUser ] =useState();

  const cancel =() =>{
    setDeleteUser(null)
  }

  const { data: users =[] ,isLoading, refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const result = await fetch("https://resale-web-server-eight.vercel.app/users");
      const data = await result.json();
      return data;
    },
  });

  if(isLoading){
    return <Loader></Loader>
  }

  const handleDeleteUser = user =>{
    console.log(user._id)
    fetch(`https://resale-web-server-eight.vercel.app/users/${user._id}`,{
      method: 'DELETE',
      headers: {
        authorization: `bearer ${localStorage.getItem('Token')}`
      }
    })
    .then(res => res.json())
    .then(data =>{
      console.log(data)
      if(data.deletedCount >0){
        refetch();
      toast.success(`Deleted successfully`)
      }
      
    })
  }

  const handleMakeAdmin = (id) => {
    fetch(`https://resale-web-server-eight.vercel.app/users/allusers/${id}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("Token")}`
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
    <div>
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
                <td>{user?.status === 'Seller' && user?.role === 'Admin' ? <p>Varified</p> : ''}</td>
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
                <label htmlFor="confirm-modal" 
                onClick={() =>{ setDeleteUser(user)}}
                className="btn btn-sm btn-error mt-3" >Delete</label>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
    {
      deleteUser && <ConfirmModal
      title={`Do you want to delete?`}
      message={ `Delete permanently`}
      handleDeleteUser={handleDeleteUser}
      modalData={deleteUser}
      cancel={cancel}
      ></ConfirmModal>
    }
    </div>
  );
};

export default AllUsers;
