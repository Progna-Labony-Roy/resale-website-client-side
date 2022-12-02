import { useEffect, useState } from "react";

const useSeller = email =>{
    const [isVarified,setIsVarified] = useState('');
    const [isSellerLoading , setIsSellerLoading ] =useState(true);
  
    useEffect(() =>{
      if(email){
        fetch(`https://resale-web-server-progna-labony-roy.vercel.app/users/verify/${email}`)
        .then(res => res.json())
        .then(data =>{
         setIsVarified(data.isVarified);
         setIsSellerLoading(false);
        })
      }
    },[email]);
    return [isVarified,isSellerLoading]
}

export default useSeller;