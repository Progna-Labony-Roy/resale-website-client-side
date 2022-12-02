import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookingModals from "./BookingModals";
import CategoryBook from "./CategoryBook";
import WishListModal from "./WishListModal";

const CategoryBooks = () => {
  const avaiableBooks = useLoaderData();
 
  const [bookName ,setBookName] = useState(null); 
// console.log(bookName)
  
const url = `http://localhost:5000/category/${avaiableBooks.name}`

  const { data: books =[]} =useQuery({
      queryKey:['books'],
      queryFn: async () =>{
          const res =await fetch(url);
          const data = await res.json();
          return data;
      }
  })
const filterBooks =books.filter(b => b.name === avaiableBooks.name)

  return <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10'> 
    {
        filterBooks.map(avaiableBook => <CategoryBook key={avaiableBook._id} avaiableBook={avaiableBook}   setBookName={setBookName}></CategoryBook>)
    }
    
   { bookName && <BookingModals bookName={bookName} setBookName={setBookName}></BookingModals>}
   {bookName && <WishListModal bookName={bookName} setBookName={setBookName}></WishListModal>}
  </div>
};

export default CategoryBooks;
