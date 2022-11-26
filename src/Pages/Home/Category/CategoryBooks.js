import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookingModals from "./BookingModals";
import CategoryBook from "./CategoryBook";

const CategoryBooks = () => {
  const avaiableBooks = useLoaderData();
  // console.log(avaiableBooks)
  const [bookName ,setBookName] = useState(null); 
// console.log(bookName)
  
// const url = `http://localhost:5000/books?category_id=${category_id}`

//   const { data: books =[]} =useQuery({
//       queryKey:['books',category_id],
//       queryFn: async () =>{
//           const res =await fetch(url);
//           const data = await res.json();
//           return data;
//       }
//   })

  return <div> 



    {
        avaiableBooks.map(avaiableBook => <CategoryBook key={avaiableBook._id} avaiableBook={avaiableBook}   setBookName={setBookName}></CategoryBook>)
    }
    
   { bookName && <BookingModals bookName={bookName} setBookName={setBookName}></BookingModals>}
  </div>
};

export default CategoryBooks;
