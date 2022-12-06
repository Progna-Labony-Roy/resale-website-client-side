const Advertisement = ({avaiableBook} ) => {
  
 
    const {
        book_name,
        Sellers_name,
        Year_of_use,
        book_img,
        original_price,
        resale_price,
        location,
        time_of_posting
        } = avaiableBook;
      console.log(avaiableBook);
    
    
      return (
        <div>
          <div className="card w-96 bg-base-100 shadow-xl mt-8">
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
              <div className="badge badge-outline p-3">Time of Posting :{time_of_posting}</div>
            </div>
            <div className="flex">
              <div>Seller :{Sellers_name} </div>
            </div>
  
          </div>
        </div>
        </div>
      );
};

export default Advertisement;