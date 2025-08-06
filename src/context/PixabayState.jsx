import PixabayContext from "./PixabayContext";
import React from 'react'
import { useState , useEffect} from "react";
import { data } from "react-router-dom";
function PixabayState(props) {
    const [apiData, setapiData] = useState([]);
    const [searchInput, setSearchInput] = useState("london");
    useEffect( () => {
        const fetchData = async() => {
        const apikey = "51650272-dfa3ebb19c0fd1dd394c7d711"
        try{
            const res = await fetch(`https://pixabay.com/api/?key=${apikey}&q=${searchInput}&image_type=photo&pretty=true`)
             if(!res){
            throw new res.json({
                success: false,
                message: "Failed to fetch data"
                    })}
            const apiData = await res.json();
            setapiData(apiData.hits);
            
         
        }
        catch(err){
            console.error("Error fetching data:", err);
        }
    };
      
    fetchData();

},[searchInput])

     const fetchBycat = async(cat) => {
        const apikey = "51650272-dfa3ebb19c0fd1dd394c7d711"
        try{
            const res = await fetch(`https://pixabay.com/api/?key=${apikey}&category=${cat}&image_type=photo&pretty=true`)
             if(!res){
            throw new res.json({
                success: false,
            message: "Failed to fetch data"
                    })}
            const apiData = await res.json();
            setapiData(apiData.hits);
            
        }
        catch(err){
            console.error("Error fetching data:", err);
        }
    };
  return (
    <PixabayContext.Provider
    value = {{
        apiData,
        fetchBycat,
        setSearchInput
    }}>
        {props.children}
    </PixabayContext.Provider>
  )
}

export default PixabayState