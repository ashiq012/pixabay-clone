import PixabayContext from "./PixabayContext";
import React from 'react'
import { useState , useEffect} from "react";
import { data } from "react-router-dom";
function PixabayState(props) {
    const [apiData, setapiData] = useState([]);
    useEffect( () => {
        const fetchData = async() => {
        try{
            const res = await fetch(`https://pixabay.com/api/?key=51650272-dfa3ebb19c0fd1dd394c7d711&q=london&image_type=photo&pretty=true`)
            // if(!res){
            // throw new res.json({
            //     success: false,
            //     message: "Failed to fetch data"
            //         })}
            const apiData = await res.json();
            setapiData(apiData.hits);
            
         
        }
        catch(err){
            console.error("Error fetching data:", err);
        }
    };
    fetchData();

},[])

    
  return (
    <PixabayContext.Provider
    value = {{
        apiData
    }}>
        {props.children}
    </PixabayContext.Provider>
  )
}

export default PixabayState