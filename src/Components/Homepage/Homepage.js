import { useState,useEffect } from "react";
import Homeinfo from "../Homeinfo/Homeinfo";


const Homepage = () => {
    const [homepage,sethomepage]=useState([]);
    useEffect(()=>{
        fetch('./fakedata.JSON')
        .then(res=>res.json())
        .then(data=>sethomepage(data));
    },[])
    return (
        <div>
            {
                homepage.map(home =><Homeinfo
                    Key={home.id} 
                    home={home}
                ></Homeinfo>)
            
            }
        </div>
    )
}

export default Homepage
