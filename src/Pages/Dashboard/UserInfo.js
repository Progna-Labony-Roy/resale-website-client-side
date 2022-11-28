import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';


export const UserInfo = () => {
    const [oneUser,setOneUser] =useState('')
    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
          const result = await fetch("http://localhost:5000/users");
          const data = await result.json();
          return data;
        },
      });

      console.log(users)
      console.log(oneUser)
    
     
    return (
        <div>
         {users.map( user => setOneUser(user))}
        </div>
    );
};

export default UserInfo;