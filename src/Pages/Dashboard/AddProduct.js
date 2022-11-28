import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import Loader from "../../Shared/Loader";

const AddProduct = () => {
  const navigate=useNavigate();
  const formData= new FormData();
  const { user } = useContext(AuthContext);

  const imageApiKey =process.env.REACT_APP_imageb_key;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { data: categoryNames, isLoading } = useQuery({
    queryKey: ["categoryName"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/categoryNames");
      const data = await res.json();
      return data;
    },
  });

  const conditons = [
    { id: "01", name: "Fair" },
    { id: "02", name: "Good" },
    { id: "03", name: "Excellent" },
  ];

  const handleAddBook = (data) => {
    console.log(data)
    const image= data.bookImage[0]
    formData.append("image",image);
    const url =`https://api.imgbb.com/1/upload?expiration=600&key=${imageApiKey}`;
    fetch(url ,{
      method: 'POST',
      body: formData
    })
    .then(res =>res.json())
    .then(imgData =>{
      if(imgData.success){
        const books = {
          name :data.category,
          Sellers_name : data.sellerName,
          email : data.email,
          Time_of_posting :0,
          Year_of_use: data.yearOfUse,
          book_img :imgData.data.url,
          original_price: data.originalPrice,
          location :data.location,
          book_name :data.bookName
        }

        fetch('http://localhost:5000/books',{
          method:'POST',
          headers:{
            'content-type':'application/json',
            authorization: `bearer ${localStorage.getItem('accessTolen')}`
          },
          body: JSON.stringify(books)
        })
        .then(res=> res.json())
        .then(result =>{
          toast('Product added successfully')
          navigate('/dashboard/myproducts')
          console.log(result)
        })
      }
    })
  };

  if(isLoading){
<Loader></Loader>
  }

  return (
    <div className="flex justify-center">
      <form onSubmit={handleSubmit(handleAddBook)}>
        {/* register your input into the hook by invoking the "register" function */}
        <div className="form-control   my-5">
          <h2 className="text-center text-4xl font-bold mb-8">
            Add a book you want to sell
          </h2>
          <label className="label">
            <span className="label-text">Book Name:</span>
          </label>
          <input
            {...register("bookName", { required: "Enter book name" })}
            type="text"
            className="input input-bordered w-full  my-2"
          />
          {errors.bookName && (
            <span className="text-red-500">{errors.bookName.message}</span>
          )}
          <label className="label">
            <span className="label-text">Seller Name</span>
          </label>
          <input
            {...register("sellerName", { required: "Enter your name" })}
            value={user.displayName}
            type="text"
            className="input input-bordered w-full my-2"
          />
          {errors.sellerName && (
            <span className="text-red-500">{errors.sellerName.message}</span>
          )}
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            {...register("email", { required: "Enter your name" })}
            value={user.displayName}
            type="text"
            className="input input-bordered w-full my-2"
          />
          {errors.email && (
            <span className="text-red-500">{errors.email.message}</span>
          )}
          <label className="label">
            <span className="label-text">Year of use</span>
          </label>
          <input
            {...register("yearOfUse", { required: "How old is the book?" })}
            type="text"
            className="input input-bordered w-full my-2"
          />
          {errors.yearOfUse && (
            <span className="text-red-500">{errors.yearOfUse.message}</span>
          )}
          <label className="label">
            <span className="label-text">Book image</span>
          </label>
          <input
            {...register("bookImage", { required: "Enter book image" })}
            type="file"
            className="input input-bordered w-full my-2"
          />
          {errors.bookImage && (
            <span className="text-red-500">{errors.bookImage.message}</span>
          )}
          <label className="label">
            <span className="label-text">Original Price</span>
          </label>
          <input
            {...register("originalPrice", {
              required: "Enter your original price",
            })}
            type="text"
            className="input input-bordered w-full my-2"
          />
          {errors.originalPrice && (
            <span className="text-red-500">{errors.originalPrice.message}</span>
          )}
          <label className="label">
            <span className="label-text">Resale price</span>
          </label>
          <input
            {...register("resalePrice", {
              required: "Enter your resale price",
            })}
            type="text"
            className="input input-bordered w-full my-2"
          />
          {errors.resalePrice && (
            <span className="text-red-500">{errors.resalePrice.message}</span>
          )}
          <label className="label">
            <span className="label-text">Location</span>
          </label>
          <input
            {...register("location", { required: "Enter location" })}
            type="text"
            className="input input-bordered w-full mt-2"
          />
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Conditon</span>
            </label>
            <select {...register("conditon")} className="select input-bordered">
              {conditons?.length &&  conditons.map((condition) => (
                <option key={condition.id} value={condition.name}>
                  {condition.name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Category name</span>
            </label>
            <select {...register("category")} className="select input-bordered">
              {categoryNames?.length && categoryNames.map((categoryName) => (
                <option key={categoryName._id} value={categoryName.name}>
                  {categoryName.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <input
          type="submit"
          value="Add book"
          className="btn btn-success my-3 w-full"
        />
      </form>
    </div>
  );
};

export default AddProduct;
