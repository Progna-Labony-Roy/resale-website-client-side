import React, { useEffect } from 'react';

const useTitle = (title) => {
    useEffect(()=>{
document.title=title;
    },[title])
    return (
        <div>
          
        </div>
    );
};

export default useTitle;