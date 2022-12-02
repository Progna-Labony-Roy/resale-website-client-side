import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../Context/AuthProvider";
import ConfirmModal from "../../Shared/ConfirmModal";
import Loader from "../../Shared/Loader";

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  const [deleteProduct, setDeleteProduct] = useState();

  const cancel = () => {
    setDeleteProduct(null);
  };

  const url = `http://localhost:5000/books?email=${user?.email}`;

  const {
    data: books = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["books", user?.email],
    queryFn: async () => {
      const result = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("Token")}`,
        },
      });
      const data = await result.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loader></Loader>;
  }

  const handleDeleteUser = (user) => {
    console.log(user);
    fetch(`http://localhost:5000/books/${user.email}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          refetch();
          toast.success(`Deleted successfully`);
        }
      });
  };

  return (
    <div className="overflow-x-auto">
      <table className="table table-compact w-full">
        <thead>
          <tr>
            <th></th>
            <th>Added Book Name</th>
            <th>Resale Price</th>
            <th>Sales Status</th>
            <th>Delete</th>
            <th>Advertisement</th>
          </tr>
        </thead>
        <tbody>
          {books?.length &&
            books.map((book, i) => (
              <tr key={book._id}>
                <th>{i + 1}</th>
                <td>{book.book_name}</td>
                <td>{book.resale_price}</td>
                <td>
                  {
                    (book.sales_status ==='Sold') ? <p className="text-red-500">{book.sales_status}</p> : <p className="text-green-500">Unsold</p>
                  }
                </td>
                <td>
                  <label
                    htmlFor="confirm-modal"
                    onClick={() => {
                      setDeleteProduct(user);
                    }}
                    className="btn btn-sm btn-error mt-3"
                  >
                    Delete
                  </label>
                </td>
                <td>{
                  book.sales_status !=='Sold' && <button className="btn btn-sm btn-success mt-3">ADVERTISEMENT</button>
                  }

                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {deleteProduct && (
        <ConfirmModal
          title={`Do you want to delete?`}
          message={`Delete permanently`}
          handleDeleteUser={handleDeleteUser}
          modalData={deleteProduct}
          cancel={cancel}
        ></ConfirmModal>
      )}
    </div>
  );
};

export default MyProducts;
