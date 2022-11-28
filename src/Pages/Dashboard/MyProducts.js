import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import Loader from '../../Shared/Loader';

const MyProducts = () => {
    const { user } = useContext(AuthContext);
  const {email , displayName} =user;

  const url = `https://resale-web-server-eight.vercel.app/books?email=${user?.email}`;

  const { data: books = [] ,isLoading} = useQuery({
    queryKey: ["books", user?.email],
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

  if(isLoading){
    return <Loader></Loader>
  }

  return (
    <div className="overflow-x-auto">
      <table className="table table-compact w-full">
        <thead>
          <tr>
            <th></th>
            <th>Added Book Name</th>
            <th>Resale Price</th>
            <th>Original Price</th>
            <th>Book Condition</th>
          </tr>
        </thead>
        <tbody>
          {books?.length && books.map((book, i) => (
            <tr key={book._id}>
              <th>{i+1}</th>
              <td>{book.book_name}</td>
              <td>{book.resale_price}</td>
              <td>{book.original_price}</td>
              <td>{book.Year_of_use}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyProducts;