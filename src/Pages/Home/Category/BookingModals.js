import React, { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider";


const BookingModals = ({bookName}) => {
  const {name ,resale_price ,location}=bookName;
  const {user}=useContext(AuthContext);
  const {email} =user
  
const handleBooking = event =>{
event.preventDefault();
const form= event.target;
const name=form.name.value;
const email= form.name.value;
const location = form.location.value;
const phone = form.phone.value;


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
          <input type="text" name='name' value={name} className="input input-bordered w-full  mt-3" />
          <input type="text" name='price' value={resale_price} className="input input-bordered w-full  mt-3" />
          <input type="text" name='use' placeholder="User Name" className="input input-bordered w-full  mt-3" />
          <input type="text" name='email' value={email} className="input input-bordered w-full  mt-3" />
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
