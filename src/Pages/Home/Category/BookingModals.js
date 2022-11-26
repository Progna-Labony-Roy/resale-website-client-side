import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../Context/AuthProvider";


const BookingModals = ({bookName ,setBookName}) => {
  const {name ,resale_price ,location}=bookName;
  const {user}=useContext(AuthContext);
  const {email,displayName} =user
  
const handleBooking = event =>{
event.preventDefault();
const form= event.target;
const name=form.name.value;
const email= form.email.value;
const location = form.location.value;
const phone = form.phone.value;
const user=form.user.value;

const orderedBooks= {
   bookName :name,
   userName: user,
   email,
   location,
   phone
}

fetch('http://localhost:5000/orderedBooks',{
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
          <input type="text" name='name' default value={name} className="input input-bordered w-full  mt-3" />
          <input type="text" name='price' default value={resale_price} className="input input-bordered w-full  mt-3" />
          <input type="text" name='user' default value={displayName} className="input input-bordered w-full  mt-3" />
          <input type="text" name='email' default value={email} className="input input-bordered w-full  mt-3" />
          <input type="text" name='location' placeholder="location" className="input input-bordered w-full  mt-3" />
          <input type="text" name='phone' placeholder="Phone" className="input input-bordered w-full  mt-3" />
          <br />
          <input className="btn btn-accent w-full  mt-3" type='submit' value='book'></input>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModals;
