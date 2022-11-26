import { useQuery } from "@tanstack/react-query";
import React from "react";
import './CategoryBook.css'
const CategoryBook = ({ avaiableBook, setBookName }) => {
  const {
    name,
    Sellers_name,
    Time_of_posting,
    Year_of_use,
    book_img,
    original_price,
    resale_price,
  } = avaiableBook;
  console.log(avaiableBook);


  
  // const url = `http://localhost:5000/books?category_id=${avaiableBook?.category_id}`

  // const { data: books =[]} =useQuery({
  //     queryKey:['books',avaiableBook?.category_id],
  //     queryFn: async () =>{
  //         const res =await fetch(url);
  //         const data = await res.json();
  //         return data;
  //     }
  // })

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="book-image" src={book_img} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          <div className="badge badge-secondary p-3">Seller Name:{Sellers_name}</div>
        </h2>
        <div className="card-actions ">
          <div className="badge badge-outline p-3">
            Resale Price: {resale_price}
          </div>
          <div className="badge badge-outline p-3">
            Original Price :{original_price}
          </div>
          <div className="badge badge-outline p-3">
            Year of use :{Year_of_use}y
          </div>
          <div className="badge badge-outline p-3">Time of Posting :</div>
        </div>
       
        <label htmlFor="booking-modal" className="btn btn-accent mt-3" onClick={() =>setBookName(avaiableBook)}>Book Now</label>
      </div>
    </div>
  );
};

export default CategoryBook;
