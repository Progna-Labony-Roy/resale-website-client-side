import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookingModals from "./BookingModals";
import CategoryBook from "./CategoryBook";

const CategoryBooks = () => {
  const avaiableBooks = useLoaderData();
  console.log(avaiableBooks)
  const [bookName ,setBookName] = useState(null); 

  return <div> 
    {
        avaiableBooks.map(avaiableBook => <CategoryBook key={avaiableBook._id} avaiableBook={avaiableBook}   setBookName={setBookName}></CategoryBook>)
    }
    
   { bookName && <BookingModals bookName={bookName}></BookingModals>}
  </div>
};

export default CategoryBooks;
