import React, { useState,useEffect } from 'react'
import Review from '../Review/Review';

const Student = () => {
    const [review,setreview]=useState([]);
    useEffect(()=>{
        fetch('./studentresult.JSON')
        .then(res=>res.json())
        .then(data=>setreview(data));
    },[])
    return (
        <div>
            {
                review.map(rev =><Review
                    Key={rev.id} 
                    rev={rev}
                ></Review>)
            
            }
        </div>
    )
}

export default Student
