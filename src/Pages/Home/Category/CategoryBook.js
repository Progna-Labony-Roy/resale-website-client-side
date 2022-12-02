import React, { useContext } from "react";
import "./CategoryBook.css";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { AuthContext } from "../../../Context/AuthProvider";
import useSeller from "../../../Hooks/useSeller";

const CategoryBook = ({ avaiableBook, setBookName }) => {
  const {
    book_name,
    Sellers_name,
    Year_of_use,
    book_img,
    original_price,
    resale_price,
    location,
    sales_status
  } = avaiableBook;
  console.log(avaiableBook);

  const { user } = useContext(AuthContext);
  const [isVarified] = useSeller(user?.email);

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="book-image" src={book_img} alt="" />
      </figure>
      <div className="card-body">
        
        <div>
          <h2 className="card-title badge badge-secondary py-4">{book_name}</h2>
        </div>
     
        <div className="card-actions ">
          <div className="badge badge-outline p-3">
            Resale Price: {resale_price}
          </div>
          <div className="badge badge-outline p-3">
            Original Price :{original_price}
          </div>
          <div className="badge badge-outline p-3">
            Location :{location}
          </div>
          <div className="badge badge-outline p-3">
            Years of use :{Year_of_use}y
          </div>
          <div className="badge badge-outline p-3">Time of Posting :</div>
        </div>
        <div className="flex">
          <div>Seller :{Sellers_name} </div>
          {isVarified && (
            <CheckCircleIcon className="h-4 w-4 text-blue-500"></CheckCircleIcon>
          )}
        </div>

        <div className="flex justify-between">
          <label
            htmlFor="wishlist-modal"
            className="btn btn-accent mt-3"
            onClick={() => setBookName(avaiableBook)}
          >
            WishList
          </label>
          <label
            htmlFor="booking-modal"
            className="btn btn-accent mt-3"
            onClick={() => setBookName(avaiableBook)}
          >
            Book Now
          </label>
         
        </div>
      </div>
    </div>
  );
};

export default CategoryBook;
