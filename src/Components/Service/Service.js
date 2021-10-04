import React, { useState,useEffect } from 'react'
import Serviceboy from '../Serviceboy/Serviceboy';

const Service = () => {
  const [service,setservice]=useState([]);
  useEffect(() => {
    
    
  
      fetch('./Faked.JSON')
      .then(res=>res.json())
      .then(data=>setservice(data));
  },[])
  return (
    <div>
        {
            service.map(serve =><Serviceboy
                Key={serve.id} 
                serve={serve}
            ></Serviceboy>)
        
        }
    </div>
)
}

export default Service
