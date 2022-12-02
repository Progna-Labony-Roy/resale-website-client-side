import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../Context/AuthProvider";


const BookingModals = ({bookName ,setBookName}) => {
  const {name,book_name ,resale_price,book_img ,_id}=bookName;
  const {user}=useContext(AuthContext);
  const {email,displayName} =user
  
const handleBooking = event =>{
event.preventDefault();
const form= event.target;
const book_name=form.book_name.value;
const book_img=form.book_img.value;
const resale_price=form.price.value;
const email= form.email.value;
const location = form.location.value;
const phone = form.phone.value;
const user=form.user.value;

const orderedBooks= {
  bookID :_id,
   book_name,
   book_img,
   resale_price,
   userName: user,
   email,
   location,
   phone
}

fetch('https://resale-web-server-progna-labony-roy.vercel.app/orderedBooks',{
  method: "POST",
  headers:{
    "content-type" : 'application/json'
  },
  body: JSON.stringify(orderedBooks)
})
.then(res => res.json())
.then(data =>{
  console.log(data)
  
  if(data.acknowledged){
    setBookName(null);
    toast.success('Your order is placed')
  }
 
})



}
  
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">
          {name}
          </h3>
          <form onSubmit={handleBooking} className="mt-5">
          <input type="text" name='book_name' default value={book_name} className="input input-bordered w-full  mt-3" />
          <input type="text" name='book_img' default value={book_img} className="input input-bordered w-full  mt-3" />
          <input type="text" name='price' default value={resale_price} className="input input-bordered w-full  mt-3" />
          <input type="text" name='user' default value={displayName} className="input input-bordered w-full  mt-3" />
          <input type="text" name='email' default value={email} className="input input-bordered w-full  mt-3" />
          <input type="text" name='location' placeholder="location" className="input input-bordered w-full  mt-3" required />
          <input type="text" name='phone' placeholder="Phone" className="input input-bordered w-full  mt-3" required/>
          <br />
          <input className="btn btn-accent w-full  mt-3" type='submit' value='Order Now'></input>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModals;
