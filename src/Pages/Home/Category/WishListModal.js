import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';

const WishListModal = ({bookName ,setBookName}) => {
    const {book_name ,resale_price }=bookName;
    const {user}=useContext(AuthContext);
    
    
  const handleWishlist = event =>{
  event.preventDefault();
  const form= event.target;
  // const book_name=form.book_name.value;
  const email= form.email.value;
  const location = form.location.value;
  const phone = form.phone.value;
  const user=form.user.value;
  console.log(book_name)
  
  const wishlist= {
     book_name ,
     userName: user,
     email,
     location,
     phone
  }
  
  fetch('https://resale-web-server-eight.vercel.app/wishlist',{
    method: "POST",
    headers:{
      "content-type" : 'application/json'
    },
    body: JSON.stringify(wishlist)
  })
  .then(res => res.json())
  .then(data =>{
    console.log(data)
    
    if(data.acknowledged){
      setBookName(null);
      toast.success('Added to wishlist')
    }
   
  })
  
  
  
  }
    
    return (
      <div>
        <input type="checkbox" id="wishlist-modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label
              htmlFor="wishlist-modal"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            {/* <h3 className="text-lg font-bold">
            {book_name}
            </h3> */}
            <form onSubmit={handleWishlist} className="mt-5">
            <input type="text" name='book_name' default value={book_name} className="input input-bordered w-full  mt-3" />
            <input type="text" name='price' default value={resale_price} className="input input-bordered w-full  mt-3" />
            <input type="text" name='user' default value={user?.displayName} className="input input-bordered w-full  mt-3" />
            <input type="text" name='email' default value={user?.email} className="input input-bordered w-full  mt-3" />
            <input type="text" name='location' placeholder="location" className="input input-bordered w-full  mt-3" required />
            <input type="text" name='phone' placeholder="Phone" className="input input-bordered w-full  mt-3" required/>
            <br />
            <input className="btn btn-accent w-full  mt-3" type='submit' value='wishlist'></input>
            </form>
          </div>
        </div>
      </div>
    );
};

export default WishListModal;